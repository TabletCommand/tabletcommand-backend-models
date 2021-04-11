import { SchemaDefinition, SchemaOptions, Schema, Document, Model } from "mongoose";

import { ObjectID, ObjectId } from "bson";

export type MongooseModule = typeof import("mongoose");
export type MongooseModel<T extends Document> = Model<T>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MongooseSchema<T extends Document<any> = Document<any>> = Schema<T>;

export type MongooseDocument = Document<ObjectID>;
export type UnionToIntersection<T> = (T extends unknown ? (_p: T) => unknown : never) extends ((_p: infer U) => unknown) ? U : never;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UnboxPromise<T extends Promise<any>> = T extends Promise<infer U> ? U : never;
export type ModelItemType<T extends Model<Document>> = T extends PrivateSchemaInfo<infer T, infer TMethods> ? T & TMethods : never;
export type SchemaItemType<T extends { __interface: unknown }> = T extends { __interface: infer U } ? U : never;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ReplaceModelReturnType<T extends (..._a: any[]) => Promise<any>, TNewReturnType extends Model<any>> =
  (..._a: Parameters<T>) => Promise<TNewReturnType>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ItemTypeFromTypeSchemaFunction<T extends (..._a: any[]) => Promise<any>> = 
  Omit<ModelItemType<UnboxPromise<ReturnType<T>>>, "id" | "_id">;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ModelTypeFromTypeSchemaFunction<TItemType extends Document> = Model<TItemType>;

export type MongooseProperty<T extends SchemaDefinition[string]> =
  T extends { type: (Schema & { __interface: infer P })[] } ? P[] :
  T extends { type: ((..._a: unknown[]) => infer P)[] } ? P[] :
  T extends ((..._a: unknown[]) => infer P)[] ? P[] :
  T extends (Schema & { __interface: infer P })[] ? P[] :

  T extends { type: (..._a: unknown[]) => infer P } ? P :
  T extends { type: Schema & { __interface: infer P } } ? P :
  T extends (..._a: unknown[]) => infer P ? P :
  T extends Schema & { __interface: infer P } ? P :
  T extends { type: MongooseModule["Types"]["ObjectId"] } ? ObjectId :
  T extends MongooseModule["Types"]["ObjectId"] ? ObjectId :
  T extends { type: MongooseModule["Schema"]["Types"]["ObjectId"] } ? Schema.Types.ObjectId :
  T extends { type: Array<MongooseModule["Schema"]["Types"]["ObjectId"]> } ? Schema.Types.ObjectId[] :
  T extends MongooseModule["Types"]["ObjectId"] ? Schema.Types.ObjectId :
  T extends Record<string, unknown> ? { [P in keyof T]: MongooseProperty<T[P]> } :
  never;

export type MongooseInterface<T extends SchemaDefinition> = {
  [P in keyof T]: MongooseProperty<T[P]>
};

export type TypedSchema<T extends SchemaDefinition> = Schema & { __interface: MongooseInterface<T> };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TypedDocument<T extends TypedSchema<any>> = Document & (
  T extends { __interface: infer U } ? U : never
);

export function createSchemaDefinition<T extends SchemaDefinition>(c: T) {
  return c;
}

export interface PrivateSchemaInfo<TInterface, TMethods> {
  __interface: TInterface; 
  __methods: TMethods;
}


export function createSchema
  <T extends SchemaDefinition, TMethods>(schemaCtor: typeof Schema, p: T, o: SchemaOptions, methods?: TMethods & ThisType<DocumentFromSchemaDefinition<T>>)
  : Schema & PrivateSchemaInfo<MongooseInterface<T>, TMethods> {
  const schema = new schemaCtor(p, o);
  if (methods) {
    schema.methods = methods as never;
  }
  return schema as unknown as Schema & PrivateSchemaInfo<MongooseInterface<T>, TMethods>;
}

export function createModel<T, TMethods>(mongoose: MongooseModule, name: string, schema: Schema & PrivateSchemaInfo<T, TMethods>) {
  if (mongoose.models[name]) {
    return mongoose.model<Document>(name) as Model<Document> & PrivateSchemaInfo<T, TMethods>;
  } else {
    return mongoose.model<Document>(name, schema) as Model<Document> & PrivateSchemaInfo<T, TMethods>;
  }
}

export type ModelFromSchemaDefinition<T extends SchemaDefinition> = ModelFromSchema<Schema & { __interface: MongooseInterface<T> }>;
export type ModelFromSchema<T extends Schema> = Model<DocumentTypeFromSchema<T>>;
export type DocumentFromSchemaDefinition<T extends SchemaDefinition> = DocumentTypeFromSchema<Schema & { __interface: MongooseInterface<T> }>;
export type DocumentTypeFromSchema<T extends Schema> = T extends Schema & { __interface: infer TI } ? TI & MongooseDocument & { schema: T } : never;
export type DocumentTypeFromModel<T extends Model<Document>> = T extends Model<infer U> ? U : never;
export type FieldsOfDocument<T extends Document> = T extends MongooseDocument & infer F ? F & { id?: ObjectID, _id: ObjectID } : never;

export function retrieveCurrentUnixTime(): number {
  return Date.now() / 1000;
}

export function currentDate() {
  return new Date();
}

type Or<T> = T & {
  $or?: Or<T>[],
};

type NonFunctionKeys<T> = {
  [P in keyof T]: T[P] extends (..._a: never[]) => unknown ? never : P
}[keyof T];

interface Comparison<T> {
  $eq?: T;
  $gt?: T;
  $gte?: T;
  $in?: T[];
  $lt?: T;
  $lte?: T;
  $ne?: T;
  $nin?: T[];
}
type PropConditions<T> =
  T extends boolean ? Comparison<T> :
  T extends number ? Comparison<T> & { $mod?: [number, number] } :
  T extends string ? Comparison<T>
  & (Record<string, unknown> | { $regex: string, $options: string })
  & (Record<string, unknown> | {
    $text:
    {
      $search: string,
      $language?: string,
      $caseSensitive?: boolean,
      $diacriticSensitive?: boolean,
    },
  }) :
  never;
type Conditions<T> = {
  [P in NonFunctionKeys<T>]?: T[P] | PropConditions<T[P]>
};
export function conditions<T extends import("mongoose").Document>(items: import("mongoose").Model<T>, c: Or<Conditions<T>>) {
  return c;
}

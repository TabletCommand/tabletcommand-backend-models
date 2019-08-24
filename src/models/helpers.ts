import { SchemaDefinition, SchemaOptions, Schema, model, Document, Model } from "mongoose";

import { ObjectID, ObjectId } from "bson";

export type MongooseModule = typeof import("mongoose");
export type MongooseModel<T extends Document, QueryHelpers = {}> = Model<T, QueryHelpers>;
// tslint:disable-next-line: no-any
export type MongooseSchema<T = any>  = Schema<T>;
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export type MongooseDocument = Omit<Document, "_id"> & {
    _id: ObjectID,
};
export type UnionToIntersection<T> = (T extends unknown ? (p: T) => unknown : never) extends ((p: infer U) => unknown) ? U : never;
// tslint:disable-next-line: no-any
export type UnboxPromise<T extends Promise<any>> = T extends Promise<infer U> ? U : never;

export type ModelItemType<T extends Model<Document>> = T extends Model<infer U> ? U : never;
export type SchemaItemType<T extends { _interface: unknown }> = T extends { _interface: infer U } ? U : never;

export type MongooseProperty<T extends SchemaDefinition[string]> =
    T extends { type: Array<Schema & { _interface: infer P }> } ? P[] :
    T extends { type: Array<(...a: unknown[]) => infer P> } ? P[] :
    T extends Array<(...a: unknown[]) => infer P> ? P[] :
    T extends Array<Schema & { _interface: infer P }> ? P[] :

    T extends { type: (...a: unknown[]) => infer P } ? P :
    T extends { type: Schema & { _interface: infer P } } ? P :
    T extends (...a: unknown[]) => infer P ? P :
    T extends Schema & { _interface: infer P } ? P :
    T extends { type: MongooseModule["Types"]["ObjectId"] } ? ObjectId :
    T extends MongooseModule["Types"]["ObjectId"] ? ObjectId :
    T extends object ? { [P in keyof T]: MongooseProperty<T[P]> } :
    never;

export type MongooseInterface<T extends SchemaDefinition> = {} & {
    [P in keyof T]: MongooseProperty<T[P]>
};

export type TypedSchema<T extends SchemaDefinition> = Schema & { _interface: MongooseInterface<T> };
// tslint:disable-next-line: no-any
export type TypedDocument<T extends TypedSchema<any>> = Document & (
    T extends { _interface: infer U } ? U : never
);

export function createSchemaDefinition<T extends SchemaDefinition>(c: T) {
    return c;
}

export function createSchema
    <T extends SchemaDefinition, TMethods>(schemaCtor: typeof Schema, p: T, o: SchemaOptions, methods?: TMethods & ThisType<DocumentFromSchemaDefinition<T>>)
        : Schema & { _interface: MongooseInterface<T>, _methods: TMethods } {
    const schema = new schemaCtor(p, o);
    if (methods) {
        schema.methods = methods;
    }
    return schema as unknown as Schema & { _interface: MongooseInterface<T>, _methods: TMethods };
}

export function createModel<T, TMethods>(mongoose: MongooseModule, name: string, schema: Schema & { _interface: T, _methods?: TMethods }, collection?: string, skipInit?: boolean) {
    if (mongoose.models[name]) {
        return mongoose.model<Document & T & TMethods>(name);
    } else {
        return mongoose.model<Document & T & TMethods>(name, schema);
    }
}

export type ModelFromSchemaDefinition<T extends SchemaDefinition> = ModelFromSchema<Schema & { _interface: MongooseInterface<T> }>;
export type ModelFromSchema<T extends Schema> = Model<DocumentTypeFromSchema<T>>;
export type DocumentFromSchemaDefinition<T extends SchemaDefinition> = DocumentTypeFromSchema<Schema & { _interface: MongooseInterface<T> }>;
export type DocumentTypeFromSchema<T extends Schema> = T extends Schema & { _interface: infer TI } ? TI & MongooseDocument & { schema: T }  : never;
export type DocumentTypeFromModel<T extends Model<Document>> = T extends Model<infer U> ? U : never;
export type FieldsOfDocument<T extends Document> = T extends Document & infer F ? F & { id?: unknown, _id: unknown } : never;
export function retrieveCurrentUnixTime(): any {
  return Date.now() / 1000;
}

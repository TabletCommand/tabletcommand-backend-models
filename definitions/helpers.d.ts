import { SchemaDefinition, SchemaOptions, Schema, Document, Model } from "mongoose";
import { ObjectID, ObjectId } from "bson";
export declare type MongooseModule = typeof import("mongoose");
export declare type MongooseModel<T extends Document> = Model<T>;
export declare type MongooseSchema<T extends Document<any> = Document<any>> = Schema<T>;
export declare type MongooseDocument = Document<ObjectID>;
export declare type UnionToIntersection<T> = (T extends unknown ? (_p: T) => unknown : never) extends ((_p: infer U) => unknown) ? U : never;
export declare type UnboxPromise<T extends Promise<any>> = T extends Promise<infer U> ? U : never;
export declare type ModelItemType<T extends Model<Document>> = T extends PrivateSchemaInfo<infer T, infer TMethods> ? T & TMethods : never;
export declare type SchemaItemType<T extends {
    __interface: unknown;
}> = T extends {
    __interface: infer U;
} ? U : never;
export declare type ReplaceModelReturnType<T extends (..._a: any[]) => Promise<any>, TNewReturnType extends Model<any>> = (..._a: Parameters<T>) => Promise<TNewReturnType>;
export declare type ItemTypeFromTypeSchemaFunction<T extends (..._a: any[]) => Promise<any>> = Omit<ModelItemType<UnboxPromise<ReturnType<T>>>, "id" | "_id">;
export declare type ModelTypeFromTypeSchemaFunction<TItemType extends Document> = Model<TItemType>;
export declare type MongooseProperty<T extends SchemaDefinition[string]> = T extends {
    type: (Schema & {
        __interface: infer P;
    })[];
} ? P[] : T extends {
    type: ((..._a: unknown[]) => infer P)[];
} ? P[] : T extends ((..._a: unknown[]) => infer P)[] ? P[] : T extends (Schema & {
    __interface: infer P;
})[] ? P[] : T extends {
    type: (..._a: unknown[]) => infer P;
} ? P : T extends {
    type: Schema & {
        __interface: infer P;
    };
} ? P : T extends (..._a: unknown[]) => infer P ? P : T extends Schema & {
    __interface: infer P;
} ? P : T extends {
    type: MongooseModule["Types"]["ObjectId"];
} ? ObjectId : T extends MongooseModule["Types"]["ObjectId"] ? ObjectId : T extends {
    type: MongooseModule["Schema"]["Types"]["ObjectId"];
} ? Schema.Types.ObjectId : T extends {
    type: Array<MongooseModule["Schema"]["Types"]["ObjectId"]>;
} ? Schema.Types.ObjectId[] : T extends MongooseModule["Types"]["ObjectId"] ? Schema.Types.ObjectId : T extends Record<string, unknown> ? {
    [P in keyof T]: MongooseProperty<T[P]>;
} : never;
export declare type MongooseInterface<T extends SchemaDefinition> = {
    [P in keyof T]: MongooseProperty<T[P]>;
};
export declare type TypedSchema<T extends SchemaDefinition> = Schema & {
    __interface: MongooseInterface<T>;
};
export declare type TypedDocument<T extends TypedSchema<any>> = Document & (T extends {
    __interface: infer U;
} ? U : never);
export declare function createSchemaDefinition<T extends SchemaDefinition>(c: T): T;
export interface PrivateSchemaInfo<TInterface, TMethods> {
    __interface: TInterface;
    __methods: TMethods;
}
export declare function createSchema<T extends SchemaDefinition, TMethods>(schemaCtor: typeof Schema, p: T, o: SchemaOptions, methods?: TMethods & ThisType<DocumentFromSchemaDefinition<T>>): Schema & PrivateSchemaInfo<MongooseInterface<T>, TMethods>;
export declare function createModel<T, TMethods>(mongoose: MongooseModule, name: string, schema: Schema & PrivateSchemaInfo<T, TMethods>): Model<Document<any, {}>, {}> & PrivateSchemaInfo<T, TMethods>;
export declare type ModelFromSchemaDefinition<T extends SchemaDefinition> = ModelFromSchema<Schema & {
    __interface: MongooseInterface<T>;
}>;
export declare type ModelFromSchema<T extends Schema> = Model<DocumentTypeFromSchema<T>>;
export declare type DocumentFromSchemaDefinition<T extends SchemaDefinition> = DocumentTypeFromSchema<Schema & {
    __interface: MongooseInterface<T>;
}>;
export declare type DocumentTypeFromSchema<T extends Schema> = T extends Schema & {
    __interface: infer TI;
} ? TI & MongooseDocument & {
    schema: T;
} : never;
export declare type DocumentTypeFromModel<T extends Model<Document>> = T extends Model<infer U> ? U : never;
export declare type FieldsOfDocument<T extends Document> = T extends MongooseDocument & infer F ? F & {
    id?: ObjectID;
    _id: ObjectID;
} : never;
export declare function retrieveCurrentUnixTime(): number;
export declare function currentDate(): Date;
declare type Or<T> = T & {
    $or?: Or<T>[];
};
declare type NonFunctionKeys<T> = {
    [P in keyof T]: T[P] extends (..._a: never[]) => unknown ? never : P;
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
declare type PropConditions<T> = T extends boolean ? Comparison<T> : T extends number ? Comparison<T> & {
    $mod?: [number, number];
} : T extends string ? Comparison<T> & (Record<string, unknown> | {
    $regex: string;
    $options: string;
}) & (Record<string, unknown> | {
    $text: {
        $search: string;
        $language?: string;
        $caseSensitive?: boolean;
        $diacriticSensitive?: boolean;
    };
}) : never;
declare type Conditions<T> = {
    [P in NonFunctionKeys<T>]?: T[P] | PropConditions<T[P]>;
};
export declare function conditions<T extends import("mongoose").Document>(items: import("mongoose").Model<T>, c: Or<Conditions<T>>): Or<Conditions<T>>;
export {};

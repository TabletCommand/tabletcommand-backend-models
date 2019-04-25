import { SchemaDefinition, SchemaOptions, Schema, Document, Model } from 'mongoose';
import { ObjectID } from 'bson';
export declare type MongooseModule = typeof import("mongoose");
export declare type MongooseModel<T extends Document, QueryHelpers = {}> = Model<T, QueryHelpers>;
export declare type MongooseSchema<T = any> = Schema<T>;
declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export declare type MongooseDocument = Omit<Document, '_id'> & {
    _id: ObjectID;
};
export declare type UnionToIntersection<T> = (T extends unknown ? (p: T) => unknown : never) extends ((p: infer U) => unknown) ? U : never;
export declare type UnboxPromise<T extends Promise<any>> = T extends Promise<infer U> ? U : never;
export declare type ModelItemType<T extends Model<Document>> = T extends Model<infer U> ? U : never;
export declare type SchemaItemType<T extends {
    _interface: unknown;
}> = T extends {
    _interface: infer U;
} ? U : never;
export declare type MongooseProperty<T extends SchemaDefinition[string]> = T extends {
    type: Array<Schema & {
        _interface: infer P;
    }>;
} ? P[] : T extends {
    type: Array<(...a: unknown[]) => infer P>;
} ? P[] : T extends Array<(...a: unknown[]) => infer P> ? P[] : T extends Array<Schema & {
    _interface: infer P;
}> ? P[] : T extends {
    type: (...a: unknown[]) => infer P;
} ? P : T extends {
    type: Schema & {
        _interface: infer P;
    };
} ? P : T extends (...a: unknown[]) => infer P ? P : T extends Schema & {
    _interface: infer P;
} ? P : T extends object ? {
    [P in keyof T]: MongooseProperty<T[P]>;
} : never;
export declare type MongooseInterface<T extends SchemaDefinition> = {} & {
    [P in keyof T]: MongooseProperty<T[P]>;
};
export declare type TypedSchema<T extends SchemaDefinition> = Schema & {
    _interface: MongooseInterface<T>;
};
export declare type TypedDocument<T extends TypedSchema<any>> = Document & (T extends {
    _interface: infer U;
} ? U : never);
export declare function createSchemaDefinition<T extends SchemaDefinition>(c: T): T;
export declare function createSchema<T extends SchemaDefinition, TMethods>(schemaCtor: typeof Schema, p: T, o: SchemaOptions, methods?: TMethods & ThisType<DocumentFromSchemaDefinition<T>>): Schema & {
    _interface: MongooseInterface<T>;
    _methods: TMethods;
};
export declare function createModel<T, TMethods>(mongoose: MongooseModule, name: string, schema: Schema & {
    _interface: T;
    _methods?: TMethods;
}, collection?: string, skipInit?: boolean): Model<Document & T & TMethods, {}>;
export declare type ModelFromSchemaDefinition<T extends SchemaDefinition> = ModelFromSchema<Schema & {
    _interface: MongooseInterface<T>;
}>;
export declare type ModelFromSchema<T extends Schema> = Model<DocumentTypeFromSchema<T>>;
export declare type DocumentFromSchemaDefinition<T extends SchemaDefinition> = DocumentTypeFromSchema<Schema & {
    _interface: MongooseInterface<T>;
}>;
export declare type DocumentTypeFromSchema<T extends Schema> = T extends Schema & {
    _interface: infer TI;
} ? TI & MongooseDocument & {
    schema: T;
} : never;
export declare type DocumentTypeFromModel<T extends Model<Document>> = T extends Model<infer U> ? U : never;
export declare type FieldsOfDocument<T extends Document> = T extends Document & infer F ? F & {
    id: unknown;
    _id: unknown;
} : never;
export {};

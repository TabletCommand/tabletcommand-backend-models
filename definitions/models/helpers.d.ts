import { SchemaDefinition, SchemaOptions, Schema, Document, Model } from 'mongoose';
import { MongooseModule } from './types';
export declare type ModelItemType<T extends Model<any>> = T extends Model<infer U> ? U : never;
export declare type SchemaItemType<T extends {
    _interface: any;
}> = T extends {
    _interface: infer U;
} ? U : never;
export declare type MongooseProperty<T extends SchemaDefinition[string]> = T extends {
    type: Array<Schema & {
        _interface: infer P;
    }>;
} ? P[] : T extends {
    type: Array<(...a: any) => infer P>;
} ? P[] : T extends Array<(...a: any) => infer P> ? P[] : T extends Array<Schema & {
    _interface: infer P;
}> ? P[] : T extends {
    type: (...a: any) => infer P;
} ? P : T extends {
    type: Schema & {
        _interface: infer P;
    };
} ? P : T extends (...a: any) => infer P ? P : T extends Schema & {
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
} ? TI & Document : never;
export declare type DocumentTypeFromModel<T extends Model<any>> = T extends Model<infer U> ? U : never;
export declare type FieldsOfDocument<T extends Document> = T extends Document & infer F ? F & {
    id: any;
    _id: any;
} : never;

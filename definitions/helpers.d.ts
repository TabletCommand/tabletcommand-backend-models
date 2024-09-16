import { SchemaDefinition, Schema, Document, Model, Types } from "mongoose";
export type MongooseModule = typeof import("mongoose");
export type MongooseModel<T extends Document, QueryHelpers = Record<string, unknown>> = Model<T, QueryHelpers>;
export type MongooseSchema<T = any> = Schema<T>;
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type MongooseDocument = Omit<Document, "_id"> & {
    _id: Types.ObjectId;
};
export type UnionToIntersection<T> = (T extends unknown ? (p: T) => unknown : never) extends ((p: infer U) => unknown) ? U : never;
export type UnboxPromise<T extends Promise<any>> = T extends Promise<infer U> ? U : never;
export type ModelItemType<T extends Model<Document>> = T extends Model<infer U> ? U : never;
export type SchemaItemType<T extends {
    _interface: unknown;
}> = T extends {
    _interface: infer U;
} ? U : never;
export type ReplaceModelReturnType<T extends (...a: any[]) => Promise<any>, TNewReturnType extends UnboxPromise<ReturnType<T>>> = (...a: Parameters<T>) => Promise<TNewReturnType>;
export type ItemTypeFromTypeSchemaFunction<T extends (...a: any[]) => Promise<any>> = ModelItemType<UnboxPromise<ReturnType<T>>>;
export type ModelTypeFromTypeSchemaFunction<TItemType extends Document> = Model<TItemType>;
export type MongooseProperty<T extends SchemaDefinition[string]> = T extends {
    type: (Schema & {
        _interface: infer P;
    })[];
} ? P[] : T extends {
    type: ((...a: unknown[]) => infer P)[];
} ? P[] : T extends ((...a: unknown[]) => infer P)[] ? P[] : T extends (Schema & {
    _interface: infer P;
})[] ? P[] : T extends {
    type: (...a: unknown[]) => infer P;
} ? P : T extends {
    type: Schema & {
        _interface: infer P;
    };
} ? P : T extends (...a: unknown[]) => infer P ? P : T extends Schema & {
    _interface: infer P;
} ? P : T extends {
    type: MongooseModule["Types"]["ObjectId"];
} ? Types.ObjectId : T extends MongooseModule["Types"]["ObjectId"] ? Types.ObjectId : T extends Record<string, unknown> ? {
    [P in keyof T]: MongooseProperty<T[P]>;
} : never;
export type MongooseInterface<T extends SchemaDefinition> = Record<string, unknown> & {
    [P in keyof T]: MongooseProperty<T[P]>;
};
export type TypedSchema<T extends SchemaDefinition> = Schema & {
    _interface: MongooseInterface<T>;
};
export type TypedDocument<T extends TypedSchema<any>> = Document & (T extends {
    _interface: infer U;
} ? U : never);
export type ModelFromSchemaDefinition<T extends SchemaDefinition> = ModelFromSchema<Schema & {
    _interface: MongooseInterface<T>;
}>;
export type ModelFromSchema<T extends Schema> = Model<DocumentTypeFromSchema<T>>;
export type DocumentFromSchemaDefinition<T extends SchemaDefinition> = DocumentTypeFromSchema<Schema & {
    _interface: MongooseInterface<T>;
}>;
export type DocumentTypeFromSchema<T extends Schema> = T extends Schema & {
    _interface: infer TI;
} ? TI & MongooseDocument & {
    schema: T;
} : never;
export type DocumentTypeFromModel<T extends Model<Document>> = T extends Model<infer U> ? U : never;
export type FieldsOfDocument<T extends Document> = T extends Document & infer F ? F & {
    id?: unknown;
    _id: unknown;
} : never;
export declare function retrieveCurrentUnixTime(): number;
export declare function currentDate(): Date;
type Or<T> = T & {
    $or?: Or<T>[];
};
type NonFunctionKeys<T> = {
    [P in keyof T]: T[P] extends (...a: never[]) => unknown ? never : P;
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
type PropConditions<T> = T extends boolean ? Comparison<T> : T extends number ? Comparison<T> & {
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
type Conditions<T> = {
    [P in NonFunctionKeys<T>]?: T[P] | PropConditions<T[P]>;
};
export declare function conditions<T extends import("mongoose").Document>(items: import("mongoose").Model<T>, c: Or<Conditions<T>>): Or<Conditions<T>>;
export declare function convertToObjectId(id: string): Types.ObjectId;
export declare function disconnectMongoose(): Promise<void>;
export declare function closeAllMongooseConnections(): Promise<void>;
export {};
//# sourceMappingURL=helpers.d.ts.map
import { SchemaDefinition, SchemaOptions, Schema, Document, Model } from "mongoose";
import { ObjectID, ObjectId } from "bson";
export declare type MongooseModule = typeof import("mongoose");
export declare type MongooseModel<T extends Document, QueryHelpers = {}> = Model<T, QueryHelpers>;
export declare type MongooseSchema<T = any> = Schema<T>;
declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export declare type MongooseDocument = Omit<Document, "_id"> & {
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
export declare type ReplaceModelReturnType<T extends (...a: any[]) => Promise<any>, TNewReturnType extends UnboxPromise<ReturnType<T>>> = (...a: Parameters<T>) => Promise<TNewReturnType>;
export declare type ItemTypeFromTypeSchemaFunction<T extends (...a: any[]) => Promise<any>> = ModelItemType<UnboxPromise<ReturnType<T>>>;
export declare type ModelTypeFromTypeSchemaFunction<TItemType extends Document> = Model<TItemType>;
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
} ? P : T extends {
    type: MongooseModule["Types"]["ObjectId"];
} ? ObjectId : T extends MongooseModule["Types"]["ObjectId"] ? ObjectId : T extends object ? {
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
}, collection?: string, skipInit?: boolean): Model<Document & T & TMethods, {}> & {
    __methods?: TMethods | undefined;
};
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
    id?: unknown;
    _id: unknown;
} : never;
export declare function retrieveCurrentUnixTime(): number;
declare type Or<T> = T & {
    $or?: Array<Or<T>>;
};
declare type NonFunctionKeys<T> = {
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
declare type PropConditions<T> = T extends boolean ? Comparison<T> : T extends number ? Comparison<T> & {
    $mod?: [number, number];
} : T extends string ? Comparison<T> & ({} | {
    $regex: string;
    $options: string;
}) & ({} | {
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
//# sourceMappingURL=helpers.d.ts.map
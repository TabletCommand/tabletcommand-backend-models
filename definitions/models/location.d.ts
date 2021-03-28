/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType, retrieveCurrentUnixTime } from "../helpers";
export declare function LocationModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any, {}> & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    departmentId: string;
    userId: string;
    uuid: string;
    username: string;
    device_type: string;
    active: boolean;
    modified_unix_date: number;
    version: number;
    session: string;
    heading: number;
    esriId: number;
    location: {
        longitude: number;
        latitude: number;
    };
    locationGeoJSON: import("../helpers").MongooseInterface<{
        type: {
            type: StringConstructor;
            required: true;
            enum: string[];
            default: string;
        };
        coordinates: {
            type: NumberConstructor[];
            required: true;
            default: never[];
        };
    }>;
    opAreaCode: string;
    opAreaName: string;
    shared: boolean;
    state: string;
} & {
    propagateToObject<T>(this: Record<string, unknown> & {
        _id: import("bson").ObjectId;
        departmentId: string;
        userId: string;
        uuid: string;
        username: string;
        device_type: string;
        active: boolean;
        modified_unix_date: number;
        version: number;
        session: string;
        heading: number;
        esriId: number;
        location: {
            longitude: number;
            latitude: number;
        };
        locationGeoJSON: import("../helpers").MongooseInterface<{
            type: {
                type: StringConstructor;
                required: true;
                enum: string[];
                default: string;
            };
            coordinates: {
                type: NumberConstructor[];
                required: true;
                default: never[];
            };
        }>;
        opAreaCode: string;
        opAreaName: string;
        shared: boolean;
        state: string;
    } & {
        update: (update?: import("mongoose").UpdateQuery<import("mongoose").Document<any, {}>> | undefined, options?: import("mongoose").QueryOptions | null | undefined, callback?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined) => import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
        get: (path: string, type?: any, options?: any) => any;
        set: {
            (path: string, val: any, options?: any): import("mongoose").Document<any, {}>;
            (path: string, val: any, type: any, options?: any): import("mongoose").Document<any, {}>;
            (value: any): import("mongoose").Document<any, {}>;
        };
        delete: {
            (options?: import("mongoose").QueryOptions | undefined): import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
            (options?: import("mongoose").QueryOptions | undefined, cb?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined): void;
        };
        invalidate: (path: string, errorMsg: string | import("mongoose").NativeError, value?: any, kind?: string | undefined) => import("mongoose").NativeError | null;
        populate: {
            (path: string, callback?: ((err: import("mongoose").CallbackError, res: import("mongoose").Document<any, {}>) => void) | undefined): import("mongoose").Document<any, {}>;
            (path: string, names: string, callback?: ((err: any, res: import("mongoose").Document<any, {}>) => void) | undefined): import("mongoose").Document<any, {}>;
            (opts: import("mongoose").PopulateOptions | import("mongoose").PopulateOptions[], callback?: ((err: import("mongoose").CallbackError, res: import("mongoose").Document<any, {}>) => void) | undefined): import("mongoose").Document<any, {}>;
        };
        __v?: number | undefined;
        $getAllSubdocs: () => import("mongoose").Document<any, {}>[];
        $ignore: (path: string) => void;
        $isDefault: (path: string) => boolean;
        $isDeleted: (val?: boolean | undefined) => boolean;
        $getPopulatedDocs: () => import("mongoose").Document<any, {}>[];
        $isEmpty: (path: string) => boolean;
        $isValid: (path: string) => boolean;
        $locals: Record<string, unknown>;
        $markValid: (path: string) => void;
        $op: string | null;
        $session: (session?: import("mongodb").ClientSession | null | undefined) => import("mongodb").ClientSession;
        $set: {
            (path: string, val: any, options?: any): import("mongoose").Document<any, {}>;
            (path: string, val: any, type: any, options?: any): import("mongoose").Document<any, {}>;
            (value: any): import("mongoose").Document<any, {}>;
        };
        $where: Record<string, unknown>;
        baseModelName?: string | undefined;
        collection: import("mongoose").Collection;
        db: import("mongoose").Connection;
        deleteOne: {
            (options?: import("mongoose").QueryOptions | undefined): import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
            (options?: import("mongoose").QueryOptions | undefined, cb?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined): void;
        };
        depopulate: (path: string) => import("mongoose").Document<any, {}>;
        directModifiedPaths: () => string[];
        equals: (doc: import("mongoose").Document<any, {}>) => boolean;
        errors?: import("mongoose").Error.ValidationError | undefined;
        execPopulate: {
            (): Promise<import("mongoose").Document<any, {}>>;
            (callback: (err: import("mongoose").CallbackError, res: import("mongoose").Document<any, {}>) => void): void;
        };
        getChanges: () => import("mongoose").UpdateQuery<import("mongoose").Document<any, {}>>;
        id?: any;
        increment: () => import("mongoose").Document<any, {}>;
        init: (obj: any, opts?: any, cb?: ((err: import("mongoose").CallbackError, doc: import("mongoose").Document<any, {}>) => void) | undefined) => import("mongoose").Document<any, {}>;
        isDirectModified: (path: string) => boolean;
        isDirectSelected: (path: string) => boolean;
        isInit: (path: string) => boolean;
        isModified: (path?: string | string[] | undefined) => boolean;
        isNew: boolean;
        isSelected: (path: string) => boolean;
        markModified: (path: string, scope?: any) => void;
        modifiedPaths: (options?: {
            includeChildren?: boolean | undefined;
        } | undefined) => string[];
        model: <T_1 extends import("mongoose").Model<any, {}>>(name: string) => T_1;
        modelName: string;
        overwrite: (obj: import("mongoose")._AllowStringsForIds<import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>>) => import("mongoose").Document<any, {}>;
        populated: (path: string) => any;
        remove: {
            (options?: import("mongoose").QueryOptions | undefined): Promise<import("mongoose").Document<any, {}>>;
            (options?: import("mongoose").QueryOptions | undefined, cb?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined): void;
        };
        replaceOne: (replacement?: import("mongoose")._AllowStringsForIds<import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>> | undefined, options?: import("mongoose").QueryOptions | null | undefined, callback?: ((err: any, res: any) => void) | undefined) => import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
        save: {
            (options?: import("mongoose").SaveOptions | undefined): Promise<import("mongoose").Document<any, {}>>;
            (options?: import("mongoose").SaveOptions | undefined, fn?: ((err: import("mongoose").CallbackError, doc: import("mongoose").Document<any, {}>) => void) | undefined): void;
            (fn?: ((err: import("mongoose").CallbackError, doc: import("mongoose").Document<any, {}>) => void) | undefined): void;
        };
        schema: import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined>;
        toJSON: {
            (options?: import("mongoose").ToObjectOptions | undefined): import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>;
            <T_2>(options?: import("mongoose").ToObjectOptions | undefined): T_2;
        };
        toObject: {
            (options?: import("mongoose").ToObjectOptions | undefined): import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>;
            <T_3>(options?: import("mongoose").ToObjectOptions | undefined): T_3;
        };
        unmarkModified: (path: string) => void;
        updateOne: (update?: import("mongoose").UpdateQuery<import("mongoose").Document<any, {}>> | undefined, options?: import("mongoose").QueryOptions | null | undefined, callback?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined) => import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
        validate: {
            (pathsToValidate?: string[] | undefined, options?: any): Promise<void>;
            (callback: (err: import("mongoose").CallbackError) => void): void;
            (pathsToValidate: string[], callback: (err: import("mongoose").CallbackError) => void): void;
            (pathsToValidate: string[], options: any, callback: (err: import("mongoose").CallbackError) => void): void;
        };
        validateSync: (pathsToValidate?: string[] | undefined, options?: any) => import("mongoose").NativeError | null;
    } & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & {
            _interface: import("../helpers").MongooseInterface<{
                _id: {
                    type: import("mongoose").Types.ObjectIdConstructor;
                    auto: true;
                };
                departmentId: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                    index: true;
                };
                userId: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                };
                uuid: {
                    type: StringConstructor;
                    default: () => string;
                };
                username: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                };
                device_type: {
                    type: StringConstructor;
                    required: true;
                };
                active: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                modified_unix_date: {
                    type: NumberConstructor;
                    default: typeof retrieveCurrentUnixTime;
                };
                version: {
                    type: NumberConstructor;
                    default: number;
                };
                session: {
                    type: StringConstructor;
                    default: string;
                };
                heading: {
                    type: NumberConstructor;
                    default: number;
                };
                esriId: {
                    type: NumberConstructor;
                    default: number;
                };
                location: {
                    longitude: {
                        type: NumberConstructor;
                        required: true;
                        default: number;
                    };
                    latitude: {
                        type: NumberConstructor;
                        required: true;
                        default: number;
                    };
                };
                locationGeoJSON: {
                    type: import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & {
                        _interface: import("../helpers").MongooseInterface<{
                            type: {
                                type: StringConstructor;
                                required: true;
                                enum: string[];
                                default: string;
                            };
                            coordinates: {
                                type: NumberConstructor[];
                                required: true;
                                default: never[];
                            };
                        }>;
                        _methods: unknown;
                    };
                    default: null;
                };
                opAreaCode: {
                    type: StringConstructor;
                    default: string;
                };
                opAreaName: {
                    type: StringConstructor;
                    default: string;
                };
                shared: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                state: {
                    type: StringConstructor;
                    default: string;
                };
            }>;
        };
    }, dbItem: Record<string, unknown> & {
        _id: import("bson").ObjectId;
        departmentId: string;
        userId: string;
        uuid: string;
        username: string;
        device_type: string;
        active: boolean;
        modified_unix_date: number;
        version: number;
        session: string;
        heading: number;
        esriId: number;
        location: {
            longitude: number;
            latitude: number;
        };
        locationGeoJSON: import("../helpers").MongooseInterface<{
            type: {
                type: StringConstructor;
                required: true;
                enum: string[];
                default: string;
            };
            coordinates: {
                type: NumberConstructor[];
                required: true;
                default: never[];
            };
        }>;
        opAreaCode: string;
        opAreaName: string;
        shared: boolean;
        state: string;
    } & {
        update: (update?: import("mongoose").UpdateQuery<import("mongoose").Document<any, {}>> | undefined, options?: import("mongoose").QueryOptions | null | undefined, callback?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined) => import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
        get: (path: string, type?: any, options?: any) => any;
        set: {
            (path: string, val: any, options?: any): import("mongoose").Document<any, {}>;
            (path: string, val: any, type: any, options?: any): import("mongoose").Document<any, {}>;
            (value: any): import("mongoose").Document<any, {}>;
        };
        delete: {
            (options?: import("mongoose").QueryOptions | undefined): import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
            (options?: import("mongoose").QueryOptions | undefined, cb?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined): void;
        };
        invalidate: (path: string, errorMsg: string | import("mongoose").NativeError, value?: any, kind?: string | undefined) => import("mongoose").NativeError | null;
        populate: {
            (path: string, callback?: ((err: import("mongoose").CallbackError, res: import("mongoose").Document<any, {}>) => void) | undefined): import("mongoose").Document<any, {}>;
            (path: string, names: string, callback?: ((err: any, res: import("mongoose").Document<any, {}>) => void) | undefined): import("mongoose").Document<any, {}>;
            (opts: import("mongoose").PopulateOptions | import("mongoose").PopulateOptions[], callback?: ((err: import("mongoose").CallbackError, res: import("mongoose").Document<any, {}>) => void) | undefined): import("mongoose").Document<any, {}>;
        };
        __v?: number | undefined;
        $getAllSubdocs: () => import("mongoose").Document<any, {}>[];
        $ignore: (path: string) => void;
        $isDefault: (path: string) => boolean;
        $isDeleted: (val?: boolean | undefined) => boolean;
        $getPopulatedDocs: () => import("mongoose").Document<any, {}>[];
        $isEmpty: (path: string) => boolean;
        $isValid: (path: string) => boolean;
        $locals: Record<string, unknown>;
        $markValid: (path: string) => void;
        $op: string | null;
        $session: (session?: import("mongodb").ClientSession | null | undefined) => import("mongodb").ClientSession;
        $set: {
            (path: string, val: any, options?: any): import("mongoose").Document<any, {}>;
            (path: string, val: any, type: any, options?: any): import("mongoose").Document<any, {}>;
            (value: any): import("mongoose").Document<any, {}>;
        };
        $where: Record<string, unknown>;
        baseModelName?: string | undefined;
        collection: import("mongoose").Collection;
        db: import("mongoose").Connection;
        deleteOne: {
            (options?: import("mongoose").QueryOptions | undefined): import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
            (options?: import("mongoose").QueryOptions | undefined, cb?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined): void;
        };
        depopulate: (path: string) => import("mongoose").Document<any, {}>;
        directModifiedPaths: () => string[];
        equals: (doc: import("mongoose").Document<any, {}>) => boolean;
        errors?: import("mongoose").Error.ValidationError | undefined;
        execPopulate: {
            (): Promise<import("mongoose").Document<any, {}>>;
            (callback: (err: import("mongoose").CallbackError, res: import("mongoose").Document<any, {}>) => void): void;
        };
        getChanges: () => import("mongoose").UpdateQuery<import("mongoose").Document<any, {}>>;
        id?: any;
        increment: () => import("mongoose").Document<any, {}>;
        init: (obj: any, opts?: any, cb?: ((err: import("mongoose").CallbackError, doc: import("mongoose").Document<any, {}>) => void) | undefined) => import("mongoose").Document<any, {}>;
        isDirectModified: (path: string) => boolean;
        isDirectSelected: (path: string) => boolean;
        isInit: (path: string) => boolean;
        isModified: (path?: string | string[] | undefined) => boolean;
        isNew: boolean;
        isSelected: (path: string) => boolean;
        markModified: (path: string, scope?: any) => void;
        modifiedPaths: (options?: {
            includeChildren?: boolean | undefined;
        } | undefined) => string[];
        model: <T_1 extends import("mongoose").Model<any, {}>>(name: string) => T_1;
        modelName: string;
        overwrite: (obj: import("mongoose")._AllowStringsForIds<import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>>) => import("mongoose").Document<any, {}>;
        populated: (path: string) => any;
        remove: {
            (options?: import("mongoose").QueryOptions | undefined): Promise<import("mongoose").Document<any, {}>>;
            (options?: import("mongoose").QueryOptions | undefined, cb?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined): void;
        };
        replaceOne: (replacement?: import("mongoose")._AllowStringsForIds<import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>> | undefined, options?: import("mongoose").QueryOptions | null | undefined, callback?: ((err: any, res: any) => void) | undefined) => import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
        save: {
            (options?: import("mongoose").SaveOptions | undefined): Promise<import("mongoose").Document<any, {}>>;
            (options?: import("mongoose").SaveOptions | undefined, fn?: ((err: import("mongoose").CallbackError, doc: import("mongoose").Document<any, {}>) => void) | undefined): void;
            (fn?: ((err: import("mongoose").CallbackError, doc: import("mongoose").Document<any, {}>) => void) | undefined): void;
        };
        schema: import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined>;
        toJSON: {
            (options?: import("mongoose").ToObjectOptions | undefined): import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>;
            <T_2>(options?: import("mongoose").ToObjectOptions | undefined): T_2;
        };
        toObject: {
            (options?: import("mongoose").ToObjectOptions | undefined): import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>;
            <T_3>(options?: import("mongoose").ToObjectOptions | undefined): T_3;
        };
        unmarkModified: (path: string) => void;
        updateOne: (update?: import("mongoose").UpdateQuery<import("mongoose").Document<any, {}>> | undefined, options?: import("mongoose").QueryOptions | null | undefined, callback?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined) => import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
        validate: {
            (pathsToValidate?: string[] | undefined, options?: any): Promise<void>;
            (callback: (err: import("mongoose").CallbackError) => void): void;
            (pathsToValidate: string[], callback: (err: import("mongoose").CallbackError) => void): void;
            (pathsToValidate: string[], options: any, callback: (err: import("mongoose").CallbackError) => void): void;
        };
        validateSync: (pathsToValidate?: string[] | undefined, options?: any) => import("mongoose").NativeError | null;
    } & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & {
            _interface: import("../helpers").MongooseInterface<{
                _id: {
                    type: import("mongoose").Types.ObjectIdConstructor;
                    auto: true;
                };
                departmentId: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                    index: true;
                };
                userId: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                };
                uuid: {
                    type: StringConstructor;
                    default: () => string;
                };
                username: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                };
                device_type: {
                    type: StringConstructor;
                    required: true;
                };
                active: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                modified_unix_date: {
                    type: NumberConstructor;
                    default: typeof retrieveCurrentUnixTime;
                };
                version: {
                    type: NumberConstructor;
                    default: number;
                };
                session: {
                    type: StringConstructor;
                    default: string;
                };
                heading: {
                    type: NumberConstructor;
                    default: number;
                };
                esriId: {
                    type: NumberConstructor;
                    default: number;
                };
                location: {
                    longitude: {
                        type: NumberConstructor;
                        required: true;
                        default: number;
                    };
                    latitude: {
                        type: NumberConstructor;
                        required: true;
                        default: number;
                    };
                };
                locationGeoJSON: {
                    type: import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & {
                        _interface: import("../helpers").MongooseInterface<{
                            type: {
                                type: StringConstructor;
                                required: true;
                                enum: string[];
                                default: string;
                            };
                            coordinates: {
                                type: NumberConstructor[];
                                required: true;
                                default: never[];
                            };
                        }>;
                        _methods: unknown;
                    };
                    default: null;
                };
                opAreaCode: {
                    type: StringConstructor;
                    default: string;
                };
                opAreaName: {
                    type: StringConstructor;
                    default: string;
                };
                shared: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                state: {
                    type: StringConstructor;
                    default: string;
                };
            }>;
        };
    }, callback: (_doc: Record<string, unknown> & {
        _id: import("bson").ObjectId;
        departmentId: string;
        userId: string;
        uuid: string;
        username: string;
        device_type: string;
        active: boolean;
        modified_unix_date: number;
        version: number;
        session: string;
        heading: number;
        esriId: number;
        location: {
            longitude: number;
            latitude: number;
        };
        locationGeoJSON: import("../helpers").MongooseInterface<{
            type: {
                type: StringConstructor;
                required: true;
                enum: string[];
                default: string;
            };
            coordinates: {
                type: NumberConstructor[];
                required: true;
                default: never[];
            };
        }>;
        opAreaCode: string;
        opAreaName: string;
        shared: boolean;
        state: string;
    } & {
        update: (update?: import("mongoose").UpdateQuery<import("mongoose").Document<any, {}>> | undefined, options?: import("mongoose").QueryOptions | null | undefined, callback?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined) => import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
        get: (path: string, type?: any, options?: any) => any;
        set: {
            (path: string, val: any, options?: any): import("mongoose").Document<any, {}>;
            (path: string, val: any, type: any, options?: any): import("mongoose").Document<any, {}>;
            (value: any): import("mongoose").Document<any, {}>;
        };
        delete: {
            (options?: import("mongoose").QueryOptions | undefined): import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
            (options?: import("mongoose").QueryOptions | undefined, cb?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined): void;
        };
        invalidate: (path: string, errorMsg: string | import("mongoose").NativeError, value?: any, kind?: string | undefined) => import("mongoose").NativeError | null;
        populate: {
            (path: string, callback?: ((err: import("mongoose").CallbackError, res: import("mongoose").Document<any, {}>) => void) | undefined): import("mongoose").Document<any, {}>;
            (path: string, names: string, callback?: ((err: any, res: import("mongoose").Document<any, {}>) => void) | undefined): import("mongoose").Document<any, {}>;
            (opts: import("mongoose").PopulateOptions | import("mongoose").PopulateOptions[], callback?: ((err: import("mongoose").CallbackError, res: import("mongoose").Document<any, {}>) => void) | undefined): import("mongoose").Document<any, {}>;
        };
        __v?: number | undefined;
        $getAllSubdocs: () => import("mongoose").Document<any, {}>[];
        $ignore: (path: string) => void;
        $isDefault: (path: string) => boolean;
        $isDeleted: (val?: boolean | undefined) => boolean;
        $getPopulatedDocs: () => import("mongoose").Document<any, {}>[];
        $isEmpty: (path: string) => boolean;
        $isValid: (path: string) => boolean;
        $locals: Record<string, unknown>;
        $markValid: (path: string) => void;
        $op: string | null;
        $session: (session?: import("mongodb").ClientSession | null | undefined) => import("mongodb").ClientSession;
        $set: {
            (path: string, val: any, options?: any): import("mongoose").Document<any, {}>;
            (path: string, val: any, type: any, options?: any): import("mongoose").Document<any, {}>;
            (value: any): import("mongoose").Document<any, {}>;
        };
        $where: Record<string, unknown>;
        baseModelName?: string | undefined;
        collection: import("mongoose").Collection;
        db: import("mongoose").Connection;
        deleteOne: {
            (options?: import("mongoose").QueryOptions | undefined): import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
            (options?: import("mongoose").QueryOptions | undefined, cb?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined): void;
        };
        depopulate: (path: string) => import("mongoose").Document<any, {}>;
        directModifiedPaths: () => string[];
        equals: (doc: import("mongoose").Document<any, {}>) => boolean;
        errors?: import("mongoose").Error.ValidationError | undefined;
        execPopulate: {
            (): Promise<import("mongoose").Document<any, {}>>;
            (callback: (err: import("mongoose").CallbackError, res: import("mongoose").Document<any, {}>) => void): void;
        };
        getChanges: () => import("mongoose").UpdateQuery<import("mongoose").Document<any, {}>>;
        id?: any;
        increment: () => import("mongoose").Document<any, {}>;
        init: (obj: any, opts?: any, cb?: ((err: import("mongoose").CallbackError, doc: import("mongoose").Document<any, {}>) => void) | undefined) => import("mongoose").Document<any, {}>;
        isDirectModified: (path: string) => boolean;
        isDirectSelected: (path: string) => boolean;
        isInit: (path: string) => boolean;
        isModified: (path?: string | string[] | undefined) => boolean;
        isNew: boolean;
        isSelected: (path: string) => boolean;
        markModified: (path: string, scope?: any) => void;
        modifiedPaths: (options?: {
            includeChildren?: boolean | undefined;
        } | undefined) => string[];
        model: <T_1 extends import("mongoose").Model<any, {}>>(name: string) => T_1;
        modelName: string;
        overwrite: (obj: import("mongoose")._AllowStringsForIds<import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>>) => import("mongoose").Document<any, {}>;
        populated: (path: string) => any;
        remove: {
            (options?: import("mongoose").QueryOptions | undefined): Promise<import("mongoose").Document<any, {}>>;
            (options?: import("mongoose").QueryOptions | undefined, cb?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined): void;
        };
        replaceOne: (replacement?: import("mongoose")._AllowStringsForIds<import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>> | undefined, options?: import("mongoose").QueryOptions | null | undefined, callback?: ((err: any, res: any) => void) | undefined) => import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
        save: {
            (options?: import("mongoose").SaveOptions | undefined): Promise<import("mongoose").Document<any, {}>>;
            (options?: import("mongoose").SaveOptions | undefined, fn?: ((err: import("mongoose").CallbackError, doc: import("mongoose").Document<any, {}>) => void) | undefined): void;
            (fn?: ((err: import("mongoose").CallbackError, doc: import("mongoose").Document<any, {}>) => void) | undefined): void;
        };
        schema: import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined>;
        toJSON: {
            (options?: import("mongoose").ToObjectOptions | undefined): import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>;
            <T_2>(options?: import("mongoose").ToObjectOptions | undefined): T_2;
        };
        toObject: {
            (options?: import("mongoose").ToObjectOptions | undefined): import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>;
            <T_3>(options?: import("mongoose").ToObjectOptions | undefined): T_3;
        };
        unmarkModified: (path: string) => void;
        updateOne: (update?: import("mongoose").UpdateQuery<import("mongoose").Document<any, {}>> | undefined, options?: import("mongoose").QueryOptions | null | undefined, callback?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined) => import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
        validate: {
            (pathsToValidate?: string[] | undefined, options?: any): Promise<void>;
            (callback: (err: import("mongoose").CallbackError) => void): void;
            (pathsToValidate: string[], callback: (err: import("mongoose").CallbackError) => void): void;
            (pathsToValidate: string[], options: any, callback: (err: import("mongoose").CallbackError) => void): void;
        };
        validateSync: (pathsToValidate?: string[] | undefined, options?: any) => import("mongoose").NativeError | null;
    } & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & {
            _interface: import("../helpers").MongooseInterface<{
                _id: {
                    type: import("mongoose").Types.ObjectIdConstructor;
                    auto: true;
                };
                departmentId: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                    index: true;
                };
                userId: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                };
                uuid: {
                    type: StringConstructor;
                    default: () => string;
                };
                username: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                };
                device_type: {
                    type: StringConstructor;
                    required: true;
                };
                active: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                modified_unix_date: {
                    type: NumberConstructor;
                    default: typeof retrieveCurrentUnixTime;
                };
                version: {
                    type: NumberConstructor;
                    default: number;
                };
                session: {
                    type: StringConstructor;
                    default: string;
                };
                heading: {
                    type: NumberConstructor;
                    default: number;
                };
                esriId: {
                    type: NumberConstructor;
                    default: number;
                };
                location: {
                    longitude: {
                        type: NumberConstructor;
                        required: true;
                        default: number;
                    };
                    latitude: {
                        type: NumberConstructor;
                        required: true;
                        default: number;
                    };
                };
                locationGeoJSON: {
                    type: import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & {
                        _interface: import("../helpers").MongooseInterface<{
                            type: {
                                type: StringConstructor;
                                required: true;
                                enum: string[];
                                default: string;
                            };
                            coordinates: {
                                type: NumberConstructor[];
                                required: true;
                                default: never[];
                            };
                        }>;
                        _methods: unknown;
                    };
                    default: null;
                };
                opAreaCode: {
                    type: StringConstructor;
                    default: string;
                };
                opAreaName: {
                    type: StringConstructor;
                    default: string;
                };
                shared: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                state: {
                    type: StringConstructor;
                    default: string;
                };
            }>;
        };
    }) => T): T;
}, {}> & {
    __methods?: {
        propagateToObject<T>(this: Record<string, unknown> & {
            _id: import("bson").ObjectId;
            departmentId: string;
            userId: string;
            uuid: string;
            username: string;
            device_type: string;
            active: boolean;
            modified_unix_date: number;
            version: number;
            session: string;
            heading: number;
            esriId: number;
            location: {
                longitude: number;
                latitude: number;
            };
            locationGeoJSON: import("../helpers").MongooseInterface<{
                type: {
                    type: StringConstructor;
                    required: true;
                    enum: string[];
                    default: string;
                };
                coordinates: {
                    type: NumberConstructor[];
                    required: true;
                    default: never[];
                };
            }>;
            opAreaCode: string;
            opAreaName: string;
            shared: boolean;
            state: string;
        } & {
            update: (update?: import("mongoose").UpdateQuery<import("mongoose").Document<any, {}>> | undefined, options?: import("mongoose").QueryOptions | null | undefined, callback?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined) => import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
            get: (path: string, type?: any, options?: any) => any;
            set: {
                (path: string, val: any, options?: any): import("mongoose").Document<any, {}>;
                (path: string, val: any, type: any, options?: any): import("mongoose").Document<any, {}>;
                (value: any): import("mongoose").Document<any, {}>;
            };
            delete: {
                (options?: import("mongoose").QueryOptions | undefined): import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
                (options?: import("mongoose").QueryOptions | undefined, cb?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined): void;
            };
            invalidate: (path: string, errorMsg: string | import("mongoose").NativeError, value?: any, kind?: string | undefined) => import("mongoose").NativeError | null;
            populate: {
                (path: string, callback?: ((err: import("mongoose").CallbackError, res: import("mongoose").Document<any, {}>) => void) | undefined): import("mongoose").Document<any, {}>;
                (path: string, names: string, callback?: ((err: any, res: import("mongoose").Document<any, {}>) => void) | undefined): import("mongoose").Document<any, {}>;
                (opts: import("mongoose").PopulateOptions | import("mongoose").PopulateOptions[], callback?: ((err: import("mongoose").CallbackError, res: import("mongoose").Document<any, {}>) => void) | undefined): import("mongoose").Document<any, {}>;
            };
            __v?: number | undefined;
            $getAllSubdocs: () => import("mongoose").Document<any, {}>[];
            $ignore: (path: string) => void;
            $isDefault: (path: string) => boolean;
            $isDeleted: (val?: boolean | undefined) => boolean;
            $getPopulatedDocs: () => import("mongoose").Document<any, {}>[];
            $isEmpty: (path: string) => boolean;
            $isValid: (path: string) => boolean;
            $locals: Record<string, unknown>;
            $markValid: (path: string) => void;
            $op: string | null;
            $session: (session?: import("mongodb").ClientSession | null | undefined) => import("mongodb").ClientSession;
            $set: {
                (path: string, val: any, options?: any): import("mongoose").Document<any, {}>;
                (path: string, val: any, type: any, options?: any): import("mongoose").Document<any, {}>;
                (value: any): import("mongoose").Document<any, {}>;
            };
            $where: Record<string, unknown>;
            baseModelName?: string | undefined;
            collection: import("mongoose").Collection;
            db: import("mongoose").Connection;
            deleteOne: {
                (options?: import("mongoose").QueryOptions | undefined): import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
                (options?: import("mongoose").QueryOptions | undefined, cb?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined): void;
            };
            depopulate: (path: string) => import("mongoose").Document<any, {}>;
            directModifiedPaths: () => string[];
            equals: (doc: import("mongoose").Document<any, {}>) => boolean;
            errors?: import("mongoose").Error.ValidationError | undefined;
            execPopulate: {
                (): Promise<import("mongoose").Document<any, {}>>;
                (callback: (err: import("mongoose").CallbackError, res: import("mongoose").Document<any, {}>) => void): void;
            };
            getChanges: () => import("mongoose").UpdateQuery<import("mongoose").Document<any, {}>>;
            id?: any;
            increment: () => import("mongoose").Document<any, {}>;
            init: (obj: any, opts?: any, cb?: ((err: import("mongoose").CallbackError, doc: import("mongoose").Document<any, {}>) => void) | undefined) => import("mongoose").Document<any, {}>;
            isDirectModified: (path: string) => boolean;
            isDirectSelected: (path: string) => boolean;
            isInit: (path: string) => boolean;
            isModified: (path?: string | string[] | undefined) => boolean;
            isNew: boolean;
            isSelected: (path: string) => boolean;
            markModified: (path: string, scope?: any) => void;
            modifiedPaths: (options?: {
                includeChildren?: boolean | undefined;
            } | undefined) => string[];
            model: <T_1 extends import("mongoose").Model<any, {}>>(name: string) => T_1;
            modelName: string;
            overwrite: (obj: import("mongoose")._AllowStringsForIds<import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>>) => import("mongoose").Document<any, {}>;
            populated: (path: string) => any;
            remove: {
                (options?: import("mongoose").QueryOptions | undefined): Promise<import("mongoose").Document<any, {}>>;
                (options?: import("mongoose").QueryOptions | undefined, cb?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined): void;
            };
            replaceOne: (replacement?: import("mongoose")._AllowStringsForIds<import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>> | undefined, options?: import("mongoose").QueryOptions | null | undefined, callback?: ((err: any, res: any) => void) | undefined) => import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
            save: {
                (options?: import("mongoose").SaveOptions | undefined): Promise<import("mongoose").Document<any, {}>>;
                (options?: import("mongoose").SaveOptions | undefined, fn?: ((err: import("mongoose").CallbackError, doc: import("mongoose").Document<any, {}>) => void) | undefined): void;
                (fn?: ((err: import("mongoose").CallbackError, doc: import("mongoose").Document<any, {}>) => void) | undefined): void;
            };
            schema: import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined>;
            toJSON: {
                (options?: import("mongoose").ToObjectOptions | undefined): import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>;
                <T_2>(options?: import("mongoose").ToObjectOptions | undefined): T_2;
            };
            toObject: {
                (options?: import("mongoose").ToObjectOptions | undefined): import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>;
                <T_3>(options?: import("mongoose").ToObjectOptions | undefined): T_3;
            };
            unmarkModified: (path: string) => void;
            updateOne: (update?: import("mongoose").UpdateQuery<import("mongoose").Document<any, {}>> | undefined, options?: import("mongoose").QueryOptions | null | undefined, callback?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined) => import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
            validate: {
                (pathsToValidate?: string[] | undefined, options?: any): Promise<void>;
                (callback: (err: import("mongoose").CallbackError) => void): void;
                (pathsToValidate: string[], callback: (err: import("mongoose").CallbackError) => void): void;
                (pathsToValidate: string[], options: any, callback: (err: import("mongoose").CallbackError) => void): void;
            };
            validateSync: (pathsToValidate?: string[] | undefined, options?: any) => import("mongoose").NativeError | null;
        } & {
            _id: import("bson").ObjectId;
        } & {
            schema: import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & {
                _interface: import("../helpers").MongooseInterface<{
                    _id: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        auto: true;
                    };
                    departmentId: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                        index: true;
                    };
                    userId: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                    };
                    uuid: {
                        type: StringConstructor;
                        default: () => string;
                    };
                    username: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                    };
                    device_type: {
                        type: StringConstructor;
                        required: true;
                    };
                    active: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    modified_unix_date: {
                        type: NumberConstructor;
                        default: typeof retrieveCurrentUnixTime;
                    };
                    version: {
                        type: NumberConstructor;
                        default: number;
                    };
                    session: {
                        type: StringConstructor;
                        default: string;
                    };
                    heading: {
                        type: NumberConstructor;
                        default: number;
                    };
                    esriId: {
                        type: NumberConstructor;
                        default: number;
                    };
                    location: {
                        longitude: {
                            type: NumberConstructor;
                            required: true;
                            default: number;
                        };
                        latitude: {
                            type: NumberConstructor;
                            required: true;
                            default: number;
                        };
                    };
                    locationGeoJSON: {
                        type: import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & {
                            _interface: import("../helpers").MongooseInterface<{
                                type: {
                                    type: StringConstructor;
                                    required: true;
                                    enum: string[];
                                    default: string;
                                };
                                coordinates: {
                                    type: NumberConstructor[];
                                    required: true;
                                    default: never[];
                                };
                            }>;
                            _methods: unknown;
                        };
                        default: null;
                    };
                    opAreaCode: {
                        type: StringConstructor;
                        default: string;
                    };
                    opAreaName: {
                        type: StringConstructor;
                        default: string;
                    };
                    shared: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    state: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
            };
        }, dbItem: Record<string, unknown> & {
            _id: import("bson").ObjectId;
            departmentId: string;
            userId: string;
            uuid: string;
            username: string;
            device_type: string;
            active: boolean;
            modified_unix_date: number;
            version: number;
            session: string;
            heading: number;
            esriId: number;
            location: {
                longitude: number;
                latitude: number;
            };
            locationGeoJSON: import("../helpers").MongooseInterface<{
                type: {
                    type: StringConstructor;
                    required: true;
                    enum: string[];
                    default: string;
                };
                coordinates: {
                    type: NumberConstructor[];
                    required: true;
                    default: never[];
                };
            }>;
            opAreaCode: string;
            opAreaName: string;
            shared: boolean;
            state: string;
        } & {
            update: (update?: import("mongoose").UpdateQuery<import("mongoose").Document<any, {}>> | undefined, options?: import("mongoose").QueryOptions | null | undefined, callback?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined) => import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
            get: (path: string, type?: any, options?: any) => any;
            set: {
                (path: string, val: any, options?: any): import("mongoose").Document<any, {}>;
                (path: string, val: any, type: any, options?: any): import("mongoose").Document<any, {}>;
                (value: any): import("mongoose").Document<any, {}>;
            };
            delete: {
                (options?: import("mongoose").QueryOptions | undefined): import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
                (options?: import("mongoose").QueryOptions | undefined, cb?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined): void;
            };
            invalidate: (path: string, errorMsg: string | import("mongoose").NativeError, value?: any, kind?: string | undefined) => import("mongoose").NativeError | null;
            populate: {
                (path: string, callback?: ((err: import("mongoose").CallbackError, res: import("mongoose").Document<any, {}>) => void) | undefined): import("mongoose").Document<any, {}>;
                (path: string, names: string, callback?: ((err: any, res: import("mongoose").Document<any, {}>) => void) | undefined): import("mongoose").Document<any, {}>;
                (opts: import("mongoose").PopulateOptions | import("mongoose").PopulateOptions[], callback?: ((err: import("mongoose").CallbackError, res: import("mongoose").Document<any, {}>) => void) | undefined): import("mongoose").Document<any, {}>;
            };
            __v?: number | undefined;
            $getAllSubdocs: () => import("mongoose").Document<any, {}>[];
            $ignore: (path: string) => void;
            $isDefault: (path: string) => boolean;
            $isDeleted: (val?: boolean | undefined) => boolean;
            $getPopulatedDocs: () => import("mongoose").Document<any, {}>[];
            $isEmpty: (path: string) => boolean;
            $isValid: (path: string) => boolean;
            $locals: Record<string, unknown>;
            $markValid: (path: string) => void;
            $op: string | null;
            $session: (session?: import("mongodb").ClientSession | null | undefined) => import("mongodb").ClientSession;
            $set: {
                (path: string, val: any, options?: any): import("mongoose").Document<any, {}>;
                (path: string, val: any, type: any, options?: any): import("mongoose").Document<any, {}>;
                (value: any): import("mongoose").Document<any, {}>;
            };
            $where: Record<string, unknown>;
            baseModelName?: string | undefined;
            collection: import("mongoose").Collection;
            db: import("mongoose").Connection;
            deleteOne: {
                (options?: import("mongoose").QueryOptions | undefined): import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
                (options?: import("mongoose").QueryOptions | undefined, cb?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined): void;
            };
            depopulate: (path: string) => import("mongoose").Document<any, {}>;
            directModifiedPaths: () => string[];
            equals: (doc: import("mongoose").Document<any, {}>) => boolean;
            errors?: import("mongoose").Error.ValidationError | undefined;
            execPopulate: {
                (): Promise<import("mongoose").Document<any, {}>>;
                (callback: (err: import("mongoose").CallbackError, res: import("mongoose").Document<any, {}>) => void): void;
            };
            getChanges: () => import("mongoose").UpdateQuery<import("mongoose").Document<any, {}>>;
            id?: any;
            increment: () => import("mongoose").Document<any, {}>;
            init: (obj: any, opts?: any, cb?: ((err: import("mongoose").CallbackError, doc: import("mongoose").Document<any, {}>) => void) | undefined) => import("mongoose").Document<any, {}>;
            isDirectModified: (path: string) => boolean;
            isDirectSelected: (path: string) => boolean;
            isInit: (path: string) => boolean;
            isModified: (path?: string | string[] | undefined) => boolean;
            isNew: boolean;
            isSelected: (path: string) => boolean;
            markModified: (path: string, scope?: any) => void;
            modifiedPaths: (options?: {
                includeChildren?: boolean | undefined;
            } | undefined) => string[];
            model: <T_1 extends import("mongoose").Model<any, {}>>(name: string) => T_1;
            modelName: string;
            overwrite: (obj: import("mongoose")._AllowStringsForIds<import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>>) => import("mongoose").Document<any, {}>;
            populated: (path: string) => any;
            remove: {
                (options?: import("mongoose").QueryOptions | undefined): Promise<import("mongoose").Document<any, {}>>;
                (options?: import("mongoose").QueryOptions | undefined, cb?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined): void;
            };
            replaceOne: (replacement?: import("mongoose")._AllowStringsForIds<import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>> | undefined, options?: import("mongoose").QueryOptions | null | undefined, callback?: ((err: any, res: any) => void) | undefined) => import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
            save: {
                (options?: import("mongoose").SaveOptions | undefined): Promise<import("mongoose").Document<any, {}>>;
                (options?: import("mongoose").SaveOptions | undefined, fn?: ((err: import("mongoose").CallbackError, doc: import("mongoose").Document<any, {}>) => void) | undefined): void;
                (fn?: ((err: import("mongoose").CallbackError, doc: import("mongoose").Document<any, {}>) => void) | undefined): void;
            };
            schema: import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined>;
            toJSON: {
                (options?: import("mongoose").ToObjectOptions | undefined): import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>;
                <T_2>(options?: import("mongoose").ToObjectOptions | undefined): T_2;
            };
            toObject: {
                (options?: import("mongoose").ToObjectOptions | undefined): import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>;
                <T_3>(options?: import("mongoose").ToObjectOptions | undefined): T_3;
            };
            unmarkModified: (path: string) => void;
            updateOne: (update?: import("mongoose").UpdateQuery<import("mongoose").Document<any, {}>> | undefined, options?: import("mongoose").QueryOptions | null | undefined, callback?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined) => import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
            validate: {
                (pathsToValidate?: string[] | undefined, options?: any): Promise<void>;
                (callback: (err: import("mongoose").CallbackError) => void): void;
                (pathsToValidate: string[], callback: (err: import("mongoose").CallbackError) => void): void;
                (pathsToValidate: string[], options: any, callback: (err: import("mongoose").CallbackError) => void): void;
            };
            validateSync: (pathsToValidate?: string[] | undefined, options?: any) => import("mongoose").NativeError | null;
        } & {
            _id: import("bson").ObjectId;
        } & {
            schema: import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & {
                _interface: import("../helpers").MongooseInterface<{
                    _id: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        auto: true;
                    };
                    departmentId: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                        index: true;
                    };
                    userId: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                    };
                    uuid: {
                        type: StringConstructor;
                        default: () => string;
                    };
                    username: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                    };
                    device_type: {
                        type: StringConstructor;
                        required: true;
                    };
                    active: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    modified_unix_date: {
                        type: NumberConstructor;
                        default: typeof retrieveCurrentUnixTime;
                    };
                    version: {
                        type: NumberConstructor;
                        default: number;
                    };
                    session: {
                        type: StringConstructor;
                        default: string;
                    };
                    heading: {
                        type: NumberConstructor;
                        default: number;
                    };
                    esriId: {
                        type: NumberConstructor;
                        default: number;
                    };
                    location: {
                        longitude: {
                            type: NumberConstructor;
                            required: true;
                            default: number;
                        };
                        latitude: {
                            type: NumberConstructor;
                            required: true;
                            default: number;
                        };
                    };
                    locationGeoJSON: {
                        type: import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & {
                            _interface: import("../helpers").MongooseInterface<{
                                type: {
                                    type: StringConstructor;
                                    required: true;
                                    enum: string[];
                                    default: string;
                                };
                                coordinates: {
                                    type: NumberConstructor[];
                                    required: true;
                                    default: never[];
                                };
                            }>;
                            _methods: unknown;
                        };
                        default: null;
                    };
                    opAreaCode: {
                        type: StringConstructor;
                        default: string;
                    };
                    opAreaName: {
                        type: StringConstructor;
                        default: string;
                    };
                    shared: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    state: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
            };
        }, callback: (_doc: Record<string, unknown> & {
            _id: import("bson").ObjectId;
            departmentId: string;
            userId: string;
            uuid: string;
            username: string;
            device_type: string;
            active: boolean;
            modified_unix_date: number;
            version: number;
            session: string;
            heading: number;
            esriId: number;
            location: {
                longitude: number;
                latitude: number;
            };
            locationGeoJSON: import("../helpers").MongooseInterface<{
                type: {
                    type: StringConstructor;
                    required: true;
                    enum: string[];
                    default: string;
                };
                coordinates: {
                    type: NumberConstructor[];
                    required: true;
                    default: never[];
                };
            }>;
            opAreaCode: string;
            opAreaName: string;
            shared: boolean;
            state: string;
        } & {
            update: (update?: import("mongoose").UpdateQuery<import("mongoose").Document<any, {}>> | undefined, options?: import("mongoose").QueryOptions | null | undefined, callback?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined) => import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
            get: (path: string, type?: any, options?: any) => any;
            set: {
                (path: string, val: any, options?: any): import("mongoose").Document<any, {}>;
                (path: string, val: any, type: any, options?: any): import("mongoose").Document<any, {}>;
                (value: any): import("mongoose").Document<any, {}>;
            };
            delete: {
                (options?: import("mongoose").QueryOptions | undefined): import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
                (options?: import("mongoose").QueryOptions | undefined, cb?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined): void;
            };
            invalidate: (path: string, errorMsg: string | import("mongoose").NativeError, value?: any, kind?: string | undefined) => import("mongoose").NativeError | null;
            populate: {
                (path: string, callback?: ((err: import("mongoose").CallbackError, res: import("mongoose").Document<any, {}>) => void) | undefined): import("mongoose").Document<any, {}>;
                (path: string, names: string, callback?: ((err: any, res: import("mongoose").Document<any, {}>) => void) | undefined): import("mongoose").Document<any, {}>;
                (opts: import("mongoose").PopulateOptions | import("mongoose").PopulateOptions[], callback?: ((err: import("mongoose").CallbackError, res: import("mongoose").Document<any, {}>) => void) | undefined): import("mongoose").Document<any, {}>;
            };
            __v?: number | undefined;
            $getAllSubdocs: () => import("mongoose").Document<any, {}>[];
            $ignore: (path: string) => void;
            $isDefault: (path: string) => boolean;
            $isDeleted: (val?: boolean | undefined) => boolean;
            $getPopulatedDocs: () => import("mongoose").Document<any, {}>[];
            $isEmpty: (path: string) => boolean;
            $isValid: (path: string) => boolean;
            $locals: Record<string, unknown>;
            $markValid: (path: string) => void;
            $op: string | null;
            $session: (session?: import("mongodb").ClientSession | null | undefined) => import("mongodb").ClientSession;
            $set: {
                (path: string, val: any, options?: any): import("mongoose").Document<any, {}>;
                (path: string, val: any, type: any, options?: any): import("mongoose").Document<any, {}>;
                (value: any): import("mongoose").Document<any, {}>;
            };
            $where: Record<string, unknown>;
            baseModelName?: string | undefined;
            collection: import("mongoose").Collection;
            db: import("mongoose").Connection;
            deleteOne: {
                (options?: import("mongoose").QueryOptions | undefined): import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
                (options?: import("mongoose").QueryOptions | undefined, cb?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined): void;
            };
            depopulate: (path: string) => import("mongoose").Document<any, {}>;
            directModifiedPaths: () => string[];
            equals: (doc: import("mongoose").Document<any, {}>) => boolean;
            errors?: import("mongoose").Error.ValidationError | undefined;
            execPopulate: {
                (): Promise<import("mongoose").Document<any, {}>>;
                (callback: (err: import("mongoose").CallbackError, res: import("mongoose").Document<any, {}>) => void): void;
            };
            getChanges: () => import("mongoose").UpdateQuery<import("mongoose").Document<any, {}>>;
            id?: any;
            increment: () => import("mongoose").Document<any, {}>;
            init: (obj: any, opts?: any, cb?: ((err: import("mongoose").CallbackError, doc: import("mongoose").Document<any, {}>) => void) | undefined) => import("mongoose").Document<any, {}>;
            isDirectModified: (path: string) => boolean;
            isDirectSelected: (path: string) => boolean;
            isInit: (path: string) => boolean;
            isModified: (path?: string | string[] | undefined) => boolean;
            isNew: boolean;
            isSelected: (path: string) => boolean;
            markModified: (path: string, scope?: any) => void;
            modifiedPaths: (options?: {
                includeChildren?: boolean | undefined;
            } | undefined) => string[];
            model: <T_1 extends import("mongoose").Model<any, {}>>(name: string) => T_1;
            modelName: string;
            overwrite: (obj: import("mongoose")._AllowStringsForIds<import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>>) => import("mongoose").Document<any, {}>;
            populated: (path: string) => any;
            remove: {
                (options?: import("mongoose").QueryOptions | undefined): Promise<import("mongoose").Document<any, {}>>;
                (options?: import("mongoose").QueryOptions | undefined, cb?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined): void;
            };
            replaceOne: (replacement?: import("mongoose")._AllowStringsForIds<import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>> | undefined, options?: import("mongoose").QueryOptions | null | undefined, callback?: ((err: any, res: any) => void) | undefined) => import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
            save: {
                (options?: import("mongoose").SaveOptions | undefined): Promise<import("mongoose").Document<any, {}>>;
                (options?: import("mongoose").SaveOptions | undefined, fn?: ((err: import("mongoose").CallbackError, doc: import("mongoose").Document<any, {}>) => void) | undefined): void;
                (fn?: ((err: import("mongoose").CallbackError, doc: import("mongoose").Document<any, {}>) => void) | undefined): void;
            };
            schema: import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined>;
            toJSON: {
                (options?: import("mongoose").ToObjectOptions | undefined): import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>;
                <T_2>(options?: import("mongoose").ToObjectOptions | undefined): T_2;
            };
            toObject: {
                (options?: import("mongoose").ToObjectOptions | undefined): import("mongoose").LeanDocument<import("mongoose").Document<any, {}>>;
                <T_3>(options?: import("mongoose").ToObjectOptions | undefined): T_3;
            };
            unmarkModified: (path: string) => void;
            updateOne: (update?: import("mongoose").UpdateQuery<import("mongoose").Document<any, {}>> | undefined, options?: import("mongoose").QueryOptions | null | undefined, callback?: ((err: import("mongoose").CallbackError, res: any) => void) | undefined) => import("mongoose").Query<any, import("mongoose").Document<any, {}>, {}>;
            validate: {
                (pathsToValidate?: string[] | undefined, options?: any): Promise<void>;
                (callback: (err: import("mongoose").CallbackError) => void): void;
                (pathsToValidate: string[], callback: (err: import("mongoose").CallbackError) => void): void;
                (pathsToValidate: string[], options: any, callback: (err: import("mongoose").CallbackError) => void): void;
            };
            validateSync: (pathsToValidate?: string[] | undefined, options?: any) => import("mongoose").NativeError | null;
        } & {
            _id: import("bson").ObjectId;
        } & {
            schema: import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & {
                _interface: import("../helpers").MongooseInterface<{
                    _id: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        auto: true;
                    };
                    departmentId: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                        index: true;
                    };
                    userId: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                    };
                    uuid: {
                        type: StringConstructor;
                        default: () => string;
                    };
                    username: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                    };
                    device_type: {
                        type: StringConstructor;
                        required: true;
                    };
                    active: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    modified_unix_date: {
                        type: NumberConstructor;
                        default: typeof retrieveCurrentUnixTime;
                    };
                    version: {
                        type: NumberConstructor;
                        default: number;
                    };
                    session: {
                        type: StringConstructor;
                        default: string;
                    };
                    heading: {
                        type: NumberConstructor;
                        default: number;
                    };
                    esriId: {
                        type: NumberConstructor;
                        default: number;
                    };
                    location: {
                        longitude: {
                            type: NumberConstructor;
                            required: true;
                            default: number;
                        };
                        latitude: {
                            type: NumberConstructor;
                            required: true;
                            default: number;
                        };
                    };
                    locationGeoJSON: {
                        type: import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & {
                            _interface: import("../helpers").MongooseInterface<{
                                type: {
                                    type: StringConstructor;
                                    required: true;
                                    enum: string[];
                                    default: string;
                                };
                                coordinates: {
                                    type: NumberConstructor[];
                                    required: true;
                                    default: never[];
                                };
                            }>;
                            _methods: unknown;
                        };
                        default: null;
                    };
                    opAreaCode: {
                        type: StringConstructor;
                        default: string;
                    };
                    opAreaName: {
                        type: StringConstructor;
                        default: string;
                    };
                    shared: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    state: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
            };
        }) => T): T;
    } | undefined;
}>;
export interface Location extends ItemTypeFromTypeSchemaFunction<typeof LocationModule> {
}
export interface LocationModel extends ModelTypeFromTypeSchemaFunction<Location> {
}
declare const _default: ReplaceModelReturnType<typeof LocationModule, LocationModel>;
export default _default;
//# sourceMappingURL=location.d.ts.map
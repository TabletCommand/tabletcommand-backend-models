/// <reference types="mongoose" />
<<<<<<< HEAD
import { currentDate, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function CADVehicleStatusModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
=======
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
<<<<<<< HEAD
export declare function CADVehicleStatusModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any> & Record<string, unknown> & {
>>>>>>> 3af52d1 (Upgraded mongoose uuid and ts packages.)
=======
export declare function CADVehicleStatusModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any, {}> & Record<string, unknown> & {
>>>>>>> a8e26f7 (Upgraded TS and monggose.)
    uuid: string;
    departmentId: string;
    vehicleId: string;
    radioName: string;
    requestTime: number;
    responseTime: number;
    status: string;
    statusCode: string;
    modifiedDate: number;
    modified: string;
    requestStatus: number;
    owner: string;
    incidentNumber: string;
    options: import("../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
            default: string;
        };
        type: {
            type: StringConstructor;
            default: string;
        };
        value: {
            type: StringConstructor;
            default: string;
        };
        key: {
            type: StringConstructor;
            default: string;
        };
    }>[];
    capability: string;
} & {
    propagateToObject<T>(dbItem: Record<string, unknown> & {
        uuid: string;
        departmentId: string;
        vehicleId: string;
        radioName: string;
        requestTime: number;
        responseTime: number;
        status: string;
        statusCode: string;
        modifiedDate: number;
        modified: string;
        requestStatus: number;
        owner: string;
        incidentNumber: string;
        options: import("../helpers").MongooseInterface<{
            name: {
                type: StringConstructor;
                default: string;
            };
            type: {
                type: StringConstructor;
                default: string;
            };
            value: {
                type: StringConstructor;
                default: string;
            };
            key: {
                type: StringConstructor;
                default: string;
            };
        }>[];
        capability: string;
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
                uuid: {
                    type: StringConstructor;
                    index: true;
                    default: () => string;
                };
                departmentId: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                    index: true;
                };
                vehicleId: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                    minlength: number;
                };
                radioName: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                    minlength: number;
                };
                requestTime: {
                    type: NumberConstructor;
                    default: number;
                };
                responseTime: {
                    type: NumberConstructor;
                    default: number;
                };
                status: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                    minlength: number;
                };
                statusCode: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                    minlength: number;
                };
                modifiedDate: {
                    type: NumberConstructor;
                    default: number;
                    min: number;
                };
                modified: {
                    type: DateConstructor;
                    default: typeof currentDate;
                };
                requestStatus: {
                    type: NumberConstructor;
                    default: number;
                };
                owner: {
                    type: StringConstructor;
                    default: string;
                };
                incidentNumber: {
                    type: StringConstructor;
                    default: string;
                };
                options: {
                    type: (import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & {
                        _interface: import("../helpers").MongooseInterface<{
                            name: {
                                type: StringConstructor;
                                default: string;
                            };
                            type: {
                                type: StringConstructor;
                                default: string;
                            };
                            value: {
                                type: StringConstructor;
                                default: string;
                            };
                            key: {
                                type: StringConstructor;
                                default: string;
                            };
                        }>;
                        _methods: unknown;
                    })[];
                    default: never[];
                };
                capability: {
                    type: StringConstructor;
                    default: string;
                };
            }>;
        };
    }, callback: (o: Record<string, unknown> & {
        uuid: string;
        departmentId: string;
        vehicleId: string;
        radioName: string;
        requestTime: number;
        responseTime: number;
        status: string;
        statusCode: string;
        modifiedDate: number;
        modified: string;
        requestStatus: number;
        owner: string;
        incidentNumber: string;
        options: import("../helpers").MongooseInterface<{
            name: {
                type: StringConstructor;
                default: string;
            };
            type: {
                type: StringConstructor;
                default: string;
            };
            value: {
                type: StringConstructor;
                default: string;
            };
            key: {
                type: StringConstructor;
                default: string;
            };
        }>[];
        capability: string;
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
                uuid: {
                    type: StringConstructor;
                    index: true;
                    default: () => string;
                };
                departmentId: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                    index: true;
                };
                vehicleId: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                    minlength: number;
                };
                radioName: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                    minlength: number;
                };
                requestTime: {
                    type: NumberConstructor;
                    default: number;
                };
                responseTime: {
                    type: NumberConstructor;
                    default: number;
                };
                status: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                    minlength: number;
                };
                statusCode: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                    minlength: number;
                };
                modifiedDate: {
                    type: NumberConstructor;
                    default: number;
                    min: number;
                };
                modified: {
                    type: DateConstructor;
                    default: typeof currentDate;
                };
                requestStatus: {
                    type: NumberConstructor;
                    default: number;
                };
                owner: {
                    type: StringConstructor;
                    default: string;
                };
                incidentNumber: {
                    type: StringConstructor;
                    default: string;
                };
                options: {
                    type: (import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & {
                        _interface: import("../helpers").MongooseInterface<{
                            name: {
                                type: StringConstructor;
                                default: string;
                            };
                            type: {
                                type: StringConstructor;
                                default: string;
                            };
                            value: {
                                type: StringConstructor;
                                default: string;
                            };
                            key: {
                                type: StringConstructor;
                                default: string;
                            };
                        }>;
                        _methods: unknown;
                    })[];
                    default: never[];
                };
                capability: {
                    type: StringConstructor;
                    default: string;
                };
            }>;
        };
    }) => T): T;
}, {}> & {
    __methods?: {
        propagateToObject<T>(dbItem: Record<string, unknown> & {
            uuid: string;
            departmentId: string;
            vehicleId: string;
            radioName: string;
            requestTime: number;
            responseTime: number;
            status: string;
            statusCode: string;
            modifiedDate: number;
            modified: string;
            requestStatus: number;
            owner: string;
            incidentNumber: string;
            options: import("../helpers").MongooseInterface<{
                name: {
                    type: StringConstructor;
                    default: string;
                };
                type: {
                    type: StringConstructor;
                    default: string;
                };
                value: {
                    type: StringConstructor;
                    default: string;
                };
                key: {
                    type: StringConstructor;
                    default: string;
                };
            }>[];
            capability: string;
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
                    uuid: {
                        type: StringConstructor;
                        index: true;
                        default: () => string;
                    };
                    departmentId: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                        index: true;
                    };
                    vehicleId: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                        minlength: number;
                    };
                    radioName: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                        minlength: number;
                    };
                    requestTime: {
                        type: NumberConstructor;
                        default: number;
                    };
                    responseTime: {
                        type: NumberConstructor;
                        default: number;
                    };
                    status: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                        minlength: number;
                    };
                    statusCode: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                        minlength: number;
                    };
                    modifiedDate: {
                        type: NumberConstructor;
                        default: number;
                        min: number;
                    };
                    modified: {
                        type: DateConstructor;
                        default: typeof currentDate;
                    };
                    requestStatus: {
                        type: NumberConstructor;
                        default: number;
                    };
                    owner: {
                        type: StringConstructor;
                        default: string;
                    };
                    incidentNumber: {
                        type: StringConstructor;
                        default: string;
                    };
                    options: {
                        type: (import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & {
                            _interface: import("../helpers").MongooseInterface<{
                                name: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                type: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                value: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                key: {
                                    type: StringConstructor;
                                    default: string;
                                };
                            }>;
                            _methods: unknown;
                        })[];
                        default: never[];
                    };
                    capability: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
            };
        }, callback: (o: Record<string, unknown> & {
            uuid: string;
            departmentId: string;
            vehicleId: string;
            radioName: string;
            requestTime: number;
            responseTime: number;
            status: string;
            statusCode: string;
            modifiedDate: number;
            modified: string;
            requestStatus: number;
            owner: string;
            incidentNumber: string;
            options: import("../helpers").MongooseInterface<{
                name: {
                    type: StringConstructor;
                    default: string;
                };
                type: {
                    type: StringConstructor;
                    default: string;
                };
                value: {
                    type: StringConstructor;
                    default: string;
                };
                key: {
                    type: StringConstructor;
                    default: string;
                };
            }>[];
            capability: string;
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
                    uuid: {
                        type: StringConstructor;
                        index: true;
                        default: () => string;
                    };
                    departmentId: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                        index: true;
                    };
                    vehicleId: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                        minlength: number;
                    };
                    radioName: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                        minlength: number;
                    };
                    requestTime: {
                        type: NumberConstructor;
                        default: number;
                    };
                    responseTime: {
                        type: NumberConstructor;
                        default: number;
                    };
                    status: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                        minlength: number;
                    };
                    statusCode: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                        minlength: number;
                    };
                    modifiedDate: {
                        type: NumberConstructor;
                        default: number;
                        min: number;
                    };
                    modified: {
                        type: DateConstructor;
                        default: typeof currentDate;
                    };
                    requestStatus: {
                        type: NumberConstructor;
                        default: number;
                    };
                    owner: {
                        type: StringConstructor;
                        default: string;
                    };
                    incidentNumber: {
                        type: StringConstructor;
                        default: string;
                    };
                    options: {
                        type: (import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & {
                            _interface: import("../helpers").MongooseInterface<{
                                name: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                type: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                value: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                key: {
                                    type: StringConstructor;
                                    default: string;
                                };
                            }>;
                            _methods: unknown;
                        })[];
                        default: never[];
                    };
                    capability: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
            };
        }) => T): T;
    } | undefined;
}>;
export interface CADVehicleStatus extends ItemTypeFromTypeSchemaFunction<typeof CADVehicleStatusModule> {
}
export interface CADVehicleStatusModel extends ModelTypeFromTypeSchemaFunction<CADVehicleStatus> {
}
declare const _default: ReplaceModelReturnType<typeof CADVehicleStatusModule, CADVehicleStatusModel>;
export default _default;
//# sourceMappingURL=cad-vehicle-status.d.ts.map
/// <reference types="mongoose" />
import * as uuid from "uuid";
import { currentDate, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function CADVehicleStatusModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
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
        toString: () => string;
        update: {
            (doc: any, callback?: ((err: any, raw: any) => void) | undefined): import("mongoose").Query<any>;
            (doc: any, options: import("mongoose").ModelUpdateOptions, callback?: ((err: any, raw: any) => void) | undefined): import("mongoose").Query<any>;
        };
        get: (path: string, type?: any, options?: {
            virtuals?: boolean | undefined;
            getters?: boolean | undefined;
        } | undefined) => any;
        set: {
            (path: string, val: any, options?: any): import("mongoose").Document;
            (path: string, val: any, type: any, options?: any): import("mongoose").Document;
            (value: any): import("mongoose").Document;
        };
        removeListener: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
        off: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
        invalidate: (path: string, errorMsg: string | import("mongoose").NativeError, value?: any, kind?: string | undefined) => boolean | import("mongoose").Error.ValidationError;
        increment: () => import("mongoose").Document;
        model: <T_1 extends import("mongoose").Document>(name: string) => import("mongoose").Model<T_1, {}>;
        $isDeleted: {
            (isDeleted: boolean): void;
            (): boolean;
        };
        remove: (fn?: ((err: any, product: import("mongoose").Document) => void) | undefined) => Promise<import("mongoose").Document>;
        deleteOne: (fn?: ((err: any, product: import("mongoose").Document) => void) | undefined) => Promise<import("mongoose").Document>;
        save: {
            (options?: import("mongoose").SaveOptions | undefined, fn?: ((err: any, product: import("mongoose").Document) => void) | undefined): Promise<import("mongoose").Document>;
            (fn?: ((err: any, product: import("mongoose").Document) => void) | undefined): Promise<import("mongoose").Document>;
        };
        __v?: number | undefined;
        $isDefault: (path?: string | undefined) => boolean;
        $session: (session?: import("mongoose").ClientSession | undefined) => import("mongoose").ClientSession;
        depopulate: (path?: string | undefined) => import("mongoose").Document;
        equals: (doc: import("mongoose").MongooseDocument) => boolean;
        execPopulate: () => Promise<import("mongoose").Document>;
        isDirectSelected: (path: string) => boolean;
        init: (doc: import("mongoose").MongooseDocument, opts?: any) => import("mongoose").Document;
        inspect: (options?: any) => any;
        isDirectModified: (path: string) => boolean;
        isInit: (path: string) => boolean;
        isModified: (path?: string | undefined) => boolean;
        isSelected: (path: string) => boolean;
        markModified: (path: string) => void;
        modifiedPaths: () => string[];
        populate: {
            (callback: (err: any, res: import("mongoose").Document) => void): import("mongoose").Document;
            (path: string, callback?: ((err: any, res: import("mongoose").Document) => void) | undefined): import("mongoose").Document;
            (path: string, names: string, callback?: ((err: any, res: import("mongoose").Document) => void) | undefined): import("mongoose").Document;
            (options: import("mongoose").ModelPopulateOptions | import("mongoose").ModelPopulateOptions[], callback?: ((err: any, res: import("mongoose").Document) => void) | undefined): import("mongoose").Document;
        };
        populated: (path: string) => any;
        overwrite: (obj: any) => import("mongoose").Document;
        toJSON: (options?: import("mongoose").DocumentToObjectOptions | undefined) => any;
        toObject: (options?: import("mongoose").DocumentToObjectOptions | undefined) => any;
        unmarkModified: (path: string) => void;
        replaceOne: (replacement: any, callback?: ((err: any, raw: any) => void) | undefined) => import("mongoose").Query<any>;
        updateOne: {
            (doc: any, callback?: ((err: any, raw: any) => void) | undefined): import("mongoose").Query<any>;
            (doc: any, options: import("mongoose").ModelUpdateOptions, callback?: ((err: any, raw: any) => void) | undefined): import("mongoose").Query<any>;
        };
        validate: {
            (callback?: ((err: any) => void) | undefined): Promise<void>;
            (optional: any, callback?: ((err: any) => void) | undefined): Promise<void>;
        };
        validateSync: (pathsToValidate?: string | string[] | undefined) => import("mongoose").Error.ValidationError | undefined;
        errors: any;
        isNew: boolean;
        schema: import("mongoose").Schema<any>;
        $locals: {
            [k: string]: any;
        };
        id?: any;
        addListener: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
        on: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
        once: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
        removeAllListeners: (event?: string | symbol | undefined) => import("mongoose").Document;
        setMaxListeners: (n: number) => import("mongoose").Document;
        getMaxListeners: () => number;
        listeners: (event: string | symbol) => Function[];
        rawListeners: (event: string | symbol) => Function[];
        emit: (event: string | symbol, ...args: any[]) => boolean;
        listenerCount: (event: string | symbol) => number;
        prependListener: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
        prependOnceListener: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
        eventNames: () => (string | symbol)[];
        collection: import("mongoose").Collection;
        db: import("mongoose").Connection;
    } & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<any> & {
            _interface: import("../helpers").MongooseInterface<{
                uuid: {
                    type: StringConstructor;
                    index: true;
                    default: (<T_2 extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T_2, offset?: number | undefined) => T_2) & ((options?: uuid.V4Options | undefined) => string);
                };
                departmentId: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                    index: true;
                };
                vehicleId: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                    minlength: number;
                };
                radioName: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
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
                    required: boolean;
                    minlength: number;
                };
                statusCode: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
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
                    type: (import("mongoose").Schema<any> & {
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
        toString: () => string;
        update: {
            (doc: any, callback?: ((err: any, raw: any) => void) | undefined): import("mongoose").Query<any>;
            (doc: any, options: import("mongoose").ModelUpdateOptions, callback?: ((err: any, raw: any) => void) | undefined): import("mongoose").Query<any>;
        };
        get: (path: string, type?: any, options?: {
            virtuals?: boolean | undefined;
            getters?: boolean | undefined;
        } | undefined) => any;
        set: {
            (path: string, val: any, options?: any): import("mongoose").Document;
            (path: string, val: any, type: any, options?: any): import("mongoose").Document;
            (value: any): import("mongoose").Document;
        };
        removeListener: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
        off: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
        invalidate: (path: string, errorMsg: string | import("mongoose").NativeError, value?: any, kind?: string | undefined) => boolean | import("mongoose").Error.ValidationError;
        increment: () => import("mongoose").Document;
        model: <T_1 extends import("mongoose").Document>(name: string) => import("mongoose").Model<T_1, {}>;
        $isDeleted: {
            (isDeleted: boolean): void;
            (): boolean;
        };
        remove: (fn?: ((err: any, product: import("mongoose").Document) => void) | undefined) => Promise<import("mongoose").Document>;
        deleteOne: (fn?: ((err: any, product: import("mongoose").Document) => void) | undefined) => Promise<import("mongoose").Document>;
        save: {
            (options?: import("mongoose").SaveOptions | undefined, fn?: ((err: any, product: import("mongoose").Document) => void) | undefined): Promise<import("mongoose").Document>;
            (fn?: ((err: any, product: import("mongoose").Document) => void) | undefined): Promise<import("mongoose").Document>;
        };
        __v?: number | undefined;
        $isDefault: (path?: string | undefined) => boolean;
        $session: (session?: import("mongoose").ClientSession | undefined) => import("mongoose").ClientSession;
        depopulate: (path?: string | undefined) => import("mongoose").Document;
        equals: (doc: import("mongoose").MongooseDocument) => boolean;
        execPopulate: () => Promise<import("mongoose").Document>;
        isDirectSelected: (path: string) => boolean;
        init: (doc: import("mongoose").MongooseDocument, opts?: any) => import("mongoose").Document;
        inspect: (options?: any) => any;
        isDirectModified: (path: string) => boolean;
        isInit: (path: string) => boolean;
        isModified: (path?: string | undefined) => boolean;
        isSelected: (path: string) => boolean;
        markModified: (path: string) => void;
        modifiedPaths: () => string[];
        populate: {
            (callback: (err: any, res: import("mongoose").Document) => void): import("mongoose").Document;
            (path: string, callback?: ((err: any, res: import("mongoose").Document) => void) | undefined): import("mongoose").Document;
            (path: string, names: string, callback?: ((err: any, res: import("mongoose").Document) => void) | undefined): import("mongoose").Document;
            (options: import("mongoose").ModelPopulateOptions | import("mongoose").ModelPopulateOptions[], callback?: ((err: any, res: import("mongoose").Document) => void) | undefined): import("mongoose").Document;
        };
        populated: (path: string) => any;
        overwrite: (obj: any) => import("mongoose").Document;
        toJSON: (options?: import("mongoose").DocumentToObjectOptions | undefined) => any;
        toObject: (options?: import("mongoose").DocumentToObjectOptions | undefined) => any;
        unmarkModified: (path: string) => void;
        replaceOne: (replacement: any, callback?: ((err: any, raw: any) => void) | undefined) => import("mongoose").Query<any>;
        updateOne: {
            (doc: any, callback?: ((err: any, raw: any) => void) | undefined): import("mongoose").Query<any>;
            (doc: any, options: import("mongoose").ModelUpdateOptions, callback?: ((err: any, raw: any) => void) | undefined): import("mongoose").Query<any>;
        };
        validate: {
            (callback?: ((err: any) => void) | undefined): Promise<void>;
            (optional: any, callback?: ((err: any) => void) | undefined): Promise<void>;
        };
        validateSync: (pathsToValidate?: string | string[] | undefined) => import("mongoose").Error.ValidationError | undefined;
        errors: any;
        isNew: boolean;
        schema: import("mongoose").Schema<any>;
        $locals: {
            [k: string]: any;
        };
        id?: any;
        addListener: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
        on: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
        once: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
        removeAllListeners: (event?: string | symbol | undefined) => import("mongoose").Document;
        setMaxListeners: (n: number) => import("mongoose").Document;
        getMaxListeners: () => number;
        listeners: (event: string | symbol) => Function[];
        rawListeners: (event: string | symbol) => Function[];
        emit: (event: string | symbol, ...args: any[]) => boolean;
        listenerCount: (event: string | symbol) => number;
        prependListener: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
        prependOnceListener: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
        eventNames: () => (string | symbol)[];
        collection: import("mongoose").Collection;
        db: import("mongoose").Connection;
    } & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<any> & {
            _interface: import("../helpers").MongooseInterface<{
                uuid: {
                    type: StringConstructor;
                    index: true;
                    default: (<T_2 extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T_2, offset?: number | undefined) => T_2) & ((options?: uuid.V4Options | undefined) => string);
                };
                departmentId: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                    index: true;
                };
                vehicleId: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                    minlength: number;
                };
                radioName: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
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
                    required: boolean;
                    minlength: number;
                };
                statusCode: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
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
                    type: (import("mongoose").Schema<any> & {
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
            toString: () => string;
            update: {
                (doc: any, callback?: ((err: any, raw: any) => void) | undefined): import("mongoose").Query<any>;
                (doc: any, options: import("mongoose").ModelUpdateOptions, callback?: ((err: any, raw: any) => void) | undefined): import("mongoose").Query<any>;
            };
            get: (path: string, type?: any, options?: {
                virtuals?: boolean | undefined;
                getters?: boolean | undefined;
            } | undefined) => any;
            set: {
                (path: string, val: any, options?: any): import("mongoose").Document;
                (path: string, val: any, type: any, options?: any): import("mongoose").Document;
                (value: any): import("mongoose").Document;
            };
            removeListener: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
            off: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
            invalidate: (path: string, errorMsg: string | import("mongoose").NativeError, value?: any, kind?: string | undefined) => boolean | import("mongoose").Error.ValidationError;
            increment: () => import("mongoose").Document;
            model: <T_1 extends import("mongoose").Document>(name: string) => import("mongoose").Model<T_1, {}>;
            $isDeleted: {
                (isDeleted: boolean): void;
                (): boolean;
            };
            remove: (fn?: ((err: any, product: import("mongoose").Document) => void) | undefined) => Promise<import("mongoose").Document>;
            deleteOne: (fn?: ((err: any, product: import("mongoose").Document) => void) | undefined) => Promise<import("mongoose").Document>;
            save: {
                (options?: import("mongoose").SaveOptions | undefined, fn?: ((err: any, product: import("mongoose").Document) => void) | undefined): Promise<import("mongoose").Document>;
                (fn?: ((err: any, product: import("mongoose").Document) => void) | undefined): Promise<import("mongoose").Document>;
            };
            __v?: number | undefined;
            $isDefault: (path?: string | undefined) => boolean;
            $session: (session?: import("mongoose").ClientSession | undefined) => import("mongoose").ClientSession;
            depopulate: (path?: string | undefined) => import("mongoose").Document;
            equals: (doc: import("mongoose").MongooseDocument) => boolean;
            execPopulate: () => Promise<import("mongoose").Document>;
            isDirectSelected: (path: string) => boolean;
            init: (doc: import("mongoose").MongooseDocument, opts?: any) => import("mongoose").Document;
            inspect: (options?: any) => any;
            isDirectModified: (path: string) => boolean;
            isInit: (path: string) => boolean;
            isModified: (path?: string | undefined) => boolean;
            isSelected: (path: string) => boolean;
            markModified: (path: string) => void;
            modifiedPaths: () => string[];
            populate: {
                (callback: (err: any, res: import("mongoose").Document) => void): import("mongoose").Document;
                (path: string, callback?: ((err: any, res: import("mongoose").Document) => void) | undefined): import("mongoose").Document;
                (path: string, names: string, callback?: ((err: any, res: import("mongoose").Document) => void) | undefined): import("mongoose").Document;
                (options: import("mongoose").ModelPopulateOptions | import("mongoose").ModelPopulateOptions[], callback?: ((err: any, res: import("mongoose").Document) => void) | undefined): import("mongoose").Document;
            };
            populated: (path: string) => any;
            overwrite: (obj: any) => import("mongoose").Document;
            toJSON: (options?: import("mongoose").DocumentToObjectOptions | undefined) => any;
            toObject: (options?: import("mongoose").DocumentToObjectOptions | undefined) => any;
            unmarkModified: (path: string) => void;
            replaceOne: (replacement: any, callback?: ((err: any, raw: any) => void) | undefined) => import("mongoose").Query<any>;
            updateOne: {
                (doc: any, callback?: ((err: any, raw: any) => void) | undefined): import("mongoose").Query<any>;
                (doc: any, options: import("mongoose").ModelUpdateOptions, callback?: ((err: any, raw: any) => void) | undefined): import("mongoose").Query<any>;
            };
            validate: {
                (callback?: ((err: any) => void) | undefined): Promise<void>;
                (optional: any, callback?: ((err: any) => void) | undefined): Promise<void>;
            };
            validateSync: (pathsToValidate?: string | string[] | undefined) => import("mongoose").Error.ValidationError | undefined;
            errors: any;
            isNew: boolean;
            schema: import("mongoose").Schema<any>;
            $locals: {
                [k: string]: any;
            };
            id?: any;
            addListener: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
            on: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
            once: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
            removeAllListeners: (event?: string | symbol | undefined) => import("mongoose").Document;
            setMaxListeners: (n: number) => import("mongoose").Document;
            getMaxListeners: () => number;
            listeners: (event: string | symbol) => Function[];
            rawListeners: (event: string | symbol) => Function[];
            emit: (event: string | symbol, ...args: any[]) => boolean;
            listenerCount: (event: string | symbol) => number;
            prependListener: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
            prependOnceListener: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
            eventNames: () => (string | symbol)[];
            collection: import("mongoose").Collection;
            db: import("mongoose").Connection;
        } & {
            _id: import("bson").ObjectId;
        } & {
            schema: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    uuid: {
                        type: StringConstructor;
                        index: true;
                        default: (<T_2 extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T_2, offset?: number | undefined) => T_2) & ((options?: uuid.V4Options | undefined) => string);
                    };
                    departmentId: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                        index: true;
                    };
                    vehicleId: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                        minlength: number;
                    };
                    radioName: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
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
                        required: boolean;
                        minlength: number;
                    };
                    statusCode: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
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
                        type: (import("mongoose").Schema<any> & {
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
            toString: () => string;
            update: {
                (doc: any, callback?: ((err: any, raw: any) => void) | undefined): import("mongoose").Query<any>;
                (doc: any, options: import("mongoose").ModelUpdateOptions, callback?: ((err: any, raw: any) => void) | undefined): import("mongoose").Query<any>;
            };
            get: (path: string, type?: any, options?: {
                virtuals?: boolean | undefined;
                getters?: boolean | undefined;
            } | undefined) => any;
            set: {
                (path: string, val: any, options?: any): import("mongoose").Document;
                (path: string, val: any, type: any, options?: any): import("mongoose").Document;
                (value: any): import("mongoose").Document;
            };
            removeListener: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
            off: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
            invalidate: (path: string, errorMsg: string | import("mongoose").NativeError, value?: any, kind?: string | undefined) => boolean | import("mongoose").Error.ValidationError;
            increment: () => import("mongoose").Document;
            model: <T_1 extends import("mongoose").Document>(name: string) => import("mongoose").Model<T_1, {}>;
            $isDeleted: {
                (isDeleted: boolean): void;
                (): boolean;
            };
            remove: (fn?: ((err: any, product: import("mongoose").Document) => void) | undefined) => Promise<import("mongoose").Document>;
            deleteOne: (fn?: ((err: any, product: import("mongoose").Document) => void) | undefined) => Promise<import("mongoose").Document>;
            save: {
                (options?: import("mongoose").SaveOptions | undefined, fn?: ((err: any, product: import("mongoose").Document) => void) | undefined): Promise<import("mongoose").Document>;
                (fn?: ((err: any, product: import("mongoose").Document) => void) | undefined): Promise<import("mongoose").Document>;
            };
            __v?: number | undefined;
            $isDefault: (path?: string | undefined) => boolean;
            $session: (session?: import("mongoose").ClientSession | undefined) => import("mongoose").ClientSession;
            depopulate: (path?: string | undefined) => import("mongoose").Document;
            equals: (doc: import("mongoose").MongooseDocument) => boolean;
            execPopulate: () => Promise<import("mongoose").Document>;
            isDirectSelected: (path: string) => boolean;
            init: (doc: import("mongoose").MongooseDocument, opts?: any) => import("mongoose").Document;
            inspect: (options?: any) => any;
            isDirectModified: (path: string) => boolean;
            isInit: (path: string) => boolean;
            isModified: (path?: string | undefined) => boolean;
            isSelected: (path: string) => boolean;
            markModified: (path: string) => void;
            modifiedPaths: () => string[];
            populate: {
                (callback: (err: any, res: import("mongoose").Document) => void): import("mongoose").Document;
                (path: string, callback?: ((err: any, res: import("mongoose").Document) => void) | undefined): import("mongoose").Document;
                (path: string, names: string, callback?: ((err: any, res: import("mongoose").Document) => void) | undefined): import("mongoose").Document;
                (options: import("mongoose").ModelPopulateOptions | import("mongoose").ModelPopulateOptions[], callback?: ((err: any, res: import("mongoose").Document) => void) | undefined): import("mongoose").Document;
            };
            populated: (path: string) => any;
            overwrite: (obj: any) => import("mongoose").Document;
            toJSON: (options?: import("mongoose").DocumentToObjectOptions | undefined) => any;
            toObject: (options?: import("mongoose").DocumentToObjectOptions | undefined) => any;
            unmarkModified: (path: string) => void;
            replaceOne: (replacement: any, callback?: ((err: any, raw: any) => void) | undefined) => import("mongoose").Query<any>;
            updateOne: {
                (doc: any, callback?: ((err: any, raw: any) => void) | undefined): import("mongoose").Query<any>;
                (doc: any, options: import("mongoose").ModelUpdateOptions, callback?: ((err: any, raw: any) => void) | undefined): import("mongoose").Query<any>;
            };
            validate: {
                (callback?: ((err: any) => void) | undefined): Promise<void>;
                (optional: any, callback?: ((err: any) => void) | undefined): Promise<void>;
            };
            validateSync: (pathsToValidate?: string | string[] | undefined) => import("mongoose").Error.ValidationError | undefined;
            errors: any;
            isNew: boolean;
            schema: import("mongoose").Schema<any>;
            $locals: {
                [k: string]: any;
            };
            id?: any;
            addListener: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
            on: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
            once: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
            removeAllListeners: (event?: string | symbol | undefined) => import("mongoose").Document;
            setMaxListeners: (n: number) => import("mongoose").Document;
            getMaxListeners: () => number;
            listeners: (event: string | symbol) => Function[];
            rawListeners: (event: string | symbol) => Function[];
            emit: (event: string | symbol, ...args: any[]) => boolean;
            listenerCount: (event: string | symbol) => number;
            prependListener: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
            prependOnceListener: (event: string | symbol, listener: (...args: any[]) => void) => import("mongoose").Document;
            eventNames: () => (string | symbol)[];
            collection: import("mongoose").Collection;
            db: import("mongoose").Connection;
        } & {
            _id: import("bson").ObjectId;
        } & {
            schema: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    uuid: {
                        type: StringConstructor;
                        index: true;
                        default: (<T_2 extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T_2, offset?: number | undefined) => T_2) & ((options?: uuid.V4Options | undefined) => string);
                    };
                    departmentId: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                        index: true;
                    };
                    vehicleId: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                        minlength: number;
                    };
                    radioName: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
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
                        required: boolean;
                        minlength: number;
                    };
                    statusCode: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
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
                        type: (import("mongoose").Schema<any> & {
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
/// <reference types="mongoose" />
/// <reference types="bson" />
import { ModelItemType } from "./helpers";
import { MongooseModule, UnboxPromise } from "./helpers";
export declare function LocationModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    _id: {
        type: {
            prototype: {} | {
                [x: string]: {} | any | {}[];
            } | {}[];
            cacheHexString?: undefined;
            createFromHexString: {};
            createFromTime: {};
            isValid: {};
            generate: {};
        };
        auto: never;
    };
    departmentId: string;
    userId: string;
    uuid: string;
    username: string;
    device_type: string;
    active: boolean;
    modified_unix_date: number;
    version: number;
    session: string;
    location: {
        longitude: number;
        latitude: number;
    };
} & {
    propagateToObject<T>(this: {
        _id: {
            type: {
                prototype: {} | {
                    [x: string]: {} | any | {}[];
                } | {}[];
                cacheHexString?: undefined;
                createFromHexString: {};
                createFromTime: {};
                isValid: {};
                generate: {};
            };
            auto: never;
        };
        departmentId: string;
        userId: string;
        uuid: string;
        username: string;
        device_type: string;
        active: boolean;
        modified_unix_date: number;
        version: number;
        session: string;
        location: {
            longitude: number;
            latitude: number;
        };
    } & Pick<import("mongoose").Document, "collection" | "id" | "toJSON" | "toObject" | "save" | "init" | "validate" | "remove" | "increment" | "model" | "isDeleted" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "get" | "inspect" | "invalidate" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "set" | "toString" | "unmarkModified" | "replaceOne" | "update" | "updateOne" | "validateSync" | "errors" | "isNew" | "schema" | "addListener" | "on" | "once" | "removeListener" | "off" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "base" | "baseModelName" | "db" | "discriminators" | "modelName"> & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<any> & {
            _interface: {
                _id: {
                    type: {
                        prototype: {} | {
                            [x: string]: {} | any | {}[];
                        } | {}[];
                        cacheHexString?: undefined;
                        createFromHexString: {};
                        createFromTime: {};
                        isValid: {};
                        generate: {};
                    };
                    auto: never;
                };
                departmentId: string;
                userId: string;
                uuid: string;
                username: string;
                device_type: string;
                active: boolean;
                modified_unix_date: number;
                version: number;
                session: string;
                location: {
                    longitude: number;
                    latitude: number;
                };
            };
        };
    }, dbItem: {
        _id: {
            type: {
                prototype: {} | {
                    [x: string]: {} | any | {}[];
                } | {}[];
                cacheHexString?: undefined;
                createFromHexString: {};
                createFromTime: {};
                isValid: {};
                generate: {};
            };
            auto: never;
        };
        departmentId: string;
        userId: string;
        uuid: string;
        username: string;
        device_type: string;
        active: boolean;
        modified_unix_date: number;
        version: number;
        session: string;
        location: {
            longitude: number;
            latitude: number;
        };
    } & Pick<import("mongoose").Document, "collection" | "id" | "toJSON" | "toObject" | "save" | "init" | "validate" | "remove" | "increment" | "model" | "isDeleted" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "get" | "inspect" | "invalidate" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "set" | "toString" | "unmarkModified" | "replaceOne" | "update" | "updateOne" | "validateSync" | "errors" | "isNew" | "schema" | "addListener" | "on" | "once" | "removeListener" | "off" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "base" | "baseModelName" | "db" | "discriminators" | "modelName"> & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<any> & {
            _interface: {
                _id: {
                    type: {
                        prototype: {} | {
                            [x: string]: {} | any | {}[];
                        } | {}[];
                        cacheHexString?: undefined;
                        createFromHexString: {};
                        createFromTime: {};
                        isValid: {};
                        generate: {};
                    };
                    auto: never;
                };
                departmentId: string;
                userId: string;
                uuid: string;
                username: string;
                device_type: string;
                active: boolean;
                modified_unix_date: number;
                version: number;
                session: string;
                location: {
                    longitude: number;
                    latitude: number;
                };
            };
        };
    }, callback: (doc: {
        _id: {
            type: {
                prototype: {} | {
                    [x: string]: {} | any | {}[];
                } | {}[];
                cacheHexString?: undefined;
                createFromHexString: {};
                createFromTime: {};
                isValid: {};
                generate: {};
            };
            auto: never;
        };
        departmentId: string;
        userId: string;
        uuid: string;
        username: string;
        device_type: string;
        active: boolean;
        modified_unix_date: number;
        version: number;
        session: string;
        location: {
            longitude: number;
            latitude: number;
        };
    } & Pick<import("mongoose").Document, "collection" | "id" | "toJSON" | "toObject" | "save" | "init" | "validate" | "remove" | "increment" | "model" | "isDeleted" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "get" | "inspect" | "invalidate" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "set" | "toString" | "unmarkModified" | "replaceOne" | "update" | "updateOne" | "validateSync" | "errors" | "isNew" | "schema" | "addListener" | "on" | "once" | "removeListener" | "off" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "base" | "baseModelName" | "db" | "discriminators" | "modelName"> & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<any> & {
            _interface: {
                _id: {
                    type: {
                        prototype: {} | {
                            [x: string]: {} | any | {}[];
                        } | {}[];
                        cacheHexString?: undefined;
                        createFromHexString: {};
                        createFromTime: {};
                        isValid: {};
                        generate: {};
                    };
                    auto: never;
                };
                departmentId: string;
                userId: string;
                uuid: string;
                username: string;
                device_type: string;
                active: boolean;
                modified_unix_date: number;
                version: number;
                session: string;
                location: {
                    longitude: number;
                    latitude: number;
                };
            };
        };
    }) => T): T;
}, {}>>;
export default LocationModule;
export declare type LocationModel = UnboxPromise<ReturnType<typeof LocationModule>>;
export declare type Location = ModelItemType<LocationModel>;
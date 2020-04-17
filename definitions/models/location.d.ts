/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function LocationModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
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
    esriId: number;
    location: {
        longitude: number;
        latitude: number;
    };
} & {
    propagateToObject<T>(this: {
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
        esriId: number;
        location: {
            longitude: number;
            latitude: number;
        };
    } & Pick<import("mongoose").Document, "toString" | "base" | "update" | "get" | "set" | "removeListener" | "addListener" | "emit" | "on" | "once" | "prependListener" | "prependOnceListener" | "off" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "listenerCount" | "eventNames" | "invalidate" | "increment" | "model" | "$isDeleted" | "remove" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "unmarkModified" | "replaceOne" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "baseModelName" | "collection" | "db" | "discriminators" | "modelName"> & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<any> & {
            _interface: {
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
                esriId: number;
                location: {
                    longitude: number;
                    latitude: number;
                };
            };
        };
    }, dbItem: {
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
        esriId: number;
        location: {
            longitude: number;
            latitude: number;
        };
    } & Pick<import("mongoose").Document, "toString" | "base" | "update" | "get" | "set" | "removeListener" | "addListener" | "emit" | "on" | "once" | "prependListener" | "prependOnceListener" | "off" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "listenerCount" | "eventNames" | "invalidate" | "increment" | "model" | "$isDeleted" | "remove" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "unmarkModified" | "replaceOne" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "baseModelName" | "collection" | "db" | "discriminators" | "modelName"> & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<any> & {
            _interface: {
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
                esriId: number;
                location: {
                    longitude: number;
                    latitude: number;
                };
            };
        };
    }, callback: (doc: {
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
        esriId: number;
        location: {
            longitude: number;
            latitude: number;
        };
    } & Pick<import("mongoose").Document, "toString" | "base" | "update" | "get" | "set" | "removeListener" | "addListener" | "emit" | "on" | "once" | "prependListener" | "prependOnceListener" | "off" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "listenerCount" | "eventNames" | "invalidate" | "increment" | "model" | "$isDeleted" | "remove" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "unmarkModified" | "replaceOne" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "baseModelName" | "collection" | "db" | "discriminators" | "modelName"> & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<any> & {
            _interface: {
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
                esriId: number;
                location: {
                    longitude: number;
                    latitude: number;
                };
            };
        };
    }) => T): T;
}, {}> & {
    __methods?: {
        propagateToObject<T>(this: {
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
            esriId: number;
            location: {
                longitude: number;
                latitude: number;
            };
        } & Pick<import("mongoose").Document, "toString" | "base" | "update" | "get" | "set" | "removeListener" | "addListener" | "emit" | "on" | "once" | "prependListener" | "prependOnceListener" | "off" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "listenerCount" | "eventNames" | "invalidate" | "increment" | "model" | "$isDeleted" | "remove" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "unmarkModified" | "replaceOne" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "baseModelName" | "collection" | "db" | "discriminators" | "modelName"> & {
            _id: import("bson").ObjectId;
        } & {
            schema: import("mongoose").Schema<any> & {
                _interface: {
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
                    esriId: number;
                    location: {
                        longitude: number;
                        latitude: number;
                    };
                };
            };
        }, dbItem: {
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
            esriId: number;
            location: {
                longitude: number;
                latitude: number;
            };
        } & Pick<import("mongoose").Document, "toString" | "base" | "update" | "get" | "set" | "removeListener" | "addListener" | "emit" | "on" | "once" | "prependListener" | "prependOnceListener" | "off" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "listenerCount" | "eventNames" | "invalidate" | "increment" | "model" | "$isDeleted" | "remove" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "unmarkModified" | "replaceOne" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "baseModelName" | "collection" | "db" | "discriminators" | "modelName"> & {
            _id: import("bson").ObjectId;
        } & {
            schema: import("mongoose").Schema<any> & {
                _interface: {
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
                    esriId: number;
                    location: {
                        longitude: number;
                        latitude: number;
                    };
                };
            };
        }, callback: (doc: {
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
            esriId: number;
            location: {
                longitude: number;
                latitude: number;
            };
        } & Pick<import("mongoose").Document, "toString" | "base" | "update" | "get" | "set" | "removeListener" | "addListener" | "emit" | "on" | "once" | "prependListener" | "prependOnceListener" | "off" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "listenerCount" | "eventNames" | "invalidate" | "increment" | "model" | "$isDeleted" | "remove" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "unmarkModified" | "replaceOne" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "baseModelName" | "collection" | "db" | "discriminators" | "modelName"> & {
            _id: import("bson").ObjectId;
        } & {
            schema: import("mongoose").Schema<any> & {
                _interface: {
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
                    esriId: number;
                    location: {
                        longitude: number;
                        latitude: number;
                    };
                };
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
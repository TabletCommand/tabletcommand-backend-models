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
    } & Pick<import("mongoose").Document, "toString" | "update" | "get" | "set" | "removeListener" | "off" | "invalidate" | "increment" | "model" | "$isDeleted" | "remove" | "deleteOne" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "unmarkModified" | "replaceOne" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "addListener" | "on" | "once" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "collection" | "db"> & {
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
    } & Pick<import("mongoose").Document, "toString" | "update" | "get" | "set" | "removeListener" | "off" | "invalidate" | "increment" | "model" | "$isDeleted" | "remove" | "deleteOne" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "unmarkModified" | "replaceOne" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "addListener" | "on" | "once" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "collection" | "db"> & {
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
    } & Pick<import("mongoose").Document, "toString" | "update" | "get" | "set" | "removeListener" | "off" | "invalidate" | "increment" | "model" | "$isDeleted" | "remove" | "deleteOne" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "unmarkModified" | "replaceOne" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "addListener" | "on" | "once" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "collection" | "db"> & {
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
        } & Pick<import("mongoose").Document, "toString" | "update" | "get" | "set" | "removeListener" | "off" | "invalidate" | "increment" | "model" | "$isDeleted" | "remove" | "deleteOne" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "unmarkModified" | "replaceOne" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "addListener" | "on" | "once" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "collection" | "db"> & {
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
        } & Pick<import("mongoose").Document, "toString" | "update" | "get" | "set" | "removeListener" | "off" | "invalidate" | "increment" | "model" | "$isDeleted" | "remove" | "deleteOne" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "unmarkModified" | "replaceOne" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "addListener" | "on" | "once" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "collection" | "db"> & {
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
        } & Pick<import("mongoose").Document, "toString" | "update" | "get" | "set" | "removeListener" | "off" | "invalidate" | "increment" | "model" | "$isDeleted" | "remove" | "deleteOne" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "unmarkModified" | "replaceOne" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "addListener" | "on" | "once" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "collection" | "db"> & {
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
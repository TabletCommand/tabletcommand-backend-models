/// <reference types="mongoose" />
import { ModelItemType } from "./helpers";
import { MongooseModule, UnboxPromise } from "./helpers";
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
        location: {
            longitude: number;
            latitude: number;
        };
    } & Pick<import("mongoose").Document, "toString" | "base" | "update" | "get" | "set" | "removeListener" | "off" | "init" | "validate" | "save" | "remove" | "updateOne" | "collection" | "id" | "toJSON" | "toObject" | "increment" | "model" | "isDeleted" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "inspect" | "invalidate" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "unmarkModified" | "replaceOne" | "validateSync" | "errors" | "isNew" | "schema" | "addListener" | "on" | "once" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "baseModelName" | "db" | "discriminators" | "modelName"> & {
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
        location: {
            longitude: number;
            latitude: number;
        };
    } & Pick<import("mongoose").Document, "toString" | "base" | "update" | "get" | "set" | "removeListener" | "off" | "init" | "validate" | "save" | "remove" | "updateOne" | "collection" | "id" | "toJSON" | "toObject" | "increment" | "model" | "isDeleted" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "inspect" | "invalidate" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "unmarkModified" | "replaceOne" | "validateSync" | "errors" | "isNew" | "schema" | "addListener" | "on" | "once" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "baseModelName" | "db" | "discriminators" | "modelName"> & {
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
        location: {
            longitude: number;
            latitude: number;
        };
    } & Pick<import("mongoose").Document, "toString" | "base" | "update" | "get" | "set" | "removeListener" | "off" | "init" | "validate" | "save" | "remove" | "updateOne" | "collection" | "id" | "toJSON" | "toObject" | "increment" | "model" | "isDeleted" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "inspect" | "invalidate" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "unmarkModified" | "replaceOne" | "validateSync" | "errors" | "isNew" | "schema" | "addListener" | "on" | "once" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "baseModelName" | "db" | "discriminators" | "modelName"> & {
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
//# sourceMappingURL=location.d.ts.map
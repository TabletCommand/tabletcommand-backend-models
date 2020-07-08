/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function CADVehicleStatusModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    uuid: string;
    departmentId: string;
    vehicleId: string;
    radioName: string;
    requestTime: number;
    responseTime: number;
    status: string;
    statusCode: string;
    modifiedDate: number;
    requestStatus: number;
    owner: string;
    incidentNumber: string;
    options: {
        name: string;
        type: string;
        value: string;
        key: string;
    }[];
    capability: string;
} & {
    propagateToObject<T>(dbItem: {
        uuid: string;
        departmentId: string;
        vehicleId: string;
        radioName: string;
        requestTime: number;
        responseTime: number;
        status: string;
        statusCode: string;
        modifiedDate: number;
        requestStatus: number;
        owner: string;
        incidentNumber: string;
        options: {
            name: string;
            type: string;
            value: string;
            key: string;
        }[];
        capability: string;
    } & Pick<import("mongoose").Document, "toString" | "update" | "get" | "set" | "removeListener" | "off" | "invalidate" | "increment" | "model" | "$isDeleted" | "remove" | "deleteOne" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "unmarkModified" | "replaceOne" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "addListener" | "on" | "once" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "collection" | "db"> & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<any> & {
            _interface: {
                uuid: string;
                departmentId: string;
                vehicleId: string;
                radioName: string;
                requestTime: number;
                responseTime: number;
                status: string;
                statusCode: string;
                modifiedDate: number;
                requestStatus: number;
                owner: string;
                incidentNumber: string;
                options: {
                    name: string;
                    type: string;
                    value: string;
                    key: string;
                }[];
                capability: string;
            };
        };
    }, callback: (o: {
        uuid: string;
        departmentId: string;
        vehicleId: string;
        radioName: string;
        requestTime: number;
        responseTime: number;
        status: string;
        statusCode: string;
        modifiedDate: number;
        requestStatus: number;
        owner: string;
        incidentNumber: string;
        options: {
            name: string;
            type: string;
            value: string;
            key: string;
        }[];
        capability: string;
    } & Pick<import("mongoose").Document, "toString" | "update" | "get" | "set" | "removeListener" | "off" | "invalidate" | "increment" | "model" | "$isDeleted" | "remove" | "deleteOne" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "unmarkModified" | "replaceOne" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "addListener" | "on" | "once" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "collection" | "db"> & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<any> & {
            _interface: {
                uuid: string;
                departmentId: string;
                vehicleId: string;
                radioName: string;
                requestTime: number;
                responseTime: number;
                status: string;
                statusCode: string;
                modifiedDate: number;
                requestStatus: number;
                owner: string;
                incidentNumber: string;
                options: {
                    name: string;
                    type: string;
                    value: string;
                    key: string;
                }[];
                capability: string;
            };
        };
    }) => T): T;
}, {}> & {
    __methods?: {
        propagateToObject<T>(dbItem: {
            uuid: string;
            departmentId: string;
            vehicleId: string;
            radioName: string;
            requestTime: number;
            responseTime: number;
            status: string;
            statusCode: string;
            modifiedDate: number;
            requestStatus: number;
            owner: string;
            incidentNumber: string;
            options: {
                name: string;
                type: string;
                value: string;
                key: string;
            }[];
            capability: string;
        } & Pick<import("mongoose").Document, "toString" | "update" | "get" | "set" | "removeListener" | "off" | "invalidate" | "increment" | "model" | "$isDeleted" | "remove" | "deleteOne" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "unmarkModified" | "replaceOne" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "addListener" | "on" | "once" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "collection" | "db"> & {
            _id: import("bson").ObjectId;
        } & {
            schema: import("mongoose").Schema<any> & {
                _interface: {
                    uuid: string;
                    departmentId: string;
                    vehicleId: string;
                    radioName: string;
                    requestTime: number;
                    responseTime: number;
                    status: string;
                    statusCode: string;
                    modifiedDate: number;
                    requestStatus: number;
                    owner: string;
                    incidentNumber: string;
                    options: {
                        name: string;
                        type: string;
                        value: string;
                        key: string;
                    }[];
                    capability: string;
                };
            };
        }, callback: (o: {
            uuid: string;
            departmentId: string;
            vehicleId: string;
            radioName: string;
            requestTime: number;
            responseTime: number;
            status: string;
            statusCode: string;
            modifiedDate: number;
            requestStatus: number;
            owner: string;
            incidentNumber: string;
            options: {
                name: string;
                type: string;
                value: string;
                key: string;
            }[];
            capability: string;
        } & Pick<import("mongoose").Document, "toString" | "update" | "get" | "set" | "removeListener" | "off" | "invalidate" | "increment" | "model" | "$isDeleted" | "remove" | "deleteOne" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "unmarkModified" | "replaceOne" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "addListener" | "on" | "once" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "collection" | "db"> & {
            _id: import("bson").ObjectId;
        } & {
            schema: import("mongoose").Schema<any> & {
                _interface: {
                    uuid: string;
                    departmentId: string;
                    vehicleId: string;
                    radioName: string;
                    requestTime: number;
                    responseTime: number;
                    status: string;
                    statusCode: string;
                    modifiedDate: number;
                    requestStatus: number;
                    owner: string;
                    incidentNumber: string;
                    options: {
                        name: string;
                        type: string;
                        value: string;
                        key: string;
                    }[];
                    capability: string;
                };
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
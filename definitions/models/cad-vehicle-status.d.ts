/// <reference types="mongoose" />
import { ModelItemType } from "./helpers";
import { MongooseModule, UnboxPromise } from "./helpers";
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
    } & Pick<import("mongoose").Document, "collection" | "id" | "toJSON" | "toObject" | "save" | "init" | "validate" | "remove" | "increment" | "model" | "isDeleted" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "get" | "inspect" | "invalidate" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "set" | "toString" | "unmarkModified" | "replaceOne" | "update" | "updateOne" | "validateSync" | "errors" | "isNew" | "schema" | "addListener" | "on" | "once" | "removeListener" | "off" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "base" | "baseModelName" | "db" | "discriminators" | "modelName"> & {
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
    } & Pick<import("mongoose").Document, "collection" | "id" | "toJSON" | "toObject" | "save" | "init" | "validate" | "remove" | "increment" | "model" | "isDeleted" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "get" | "inspect" | "invalidate" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "set" | "toString" | "unmarkModified" | "replaceOne" | "update" | "updateOne" | "validateSync" | "errors" | "isNew" | "schema" | "addListener" | "on" | "once" | "removeListener" | "off" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "base" | "baseModelName" | "db" | "discriminators" | "modelName"> & {
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
            };
        };
    }) => T): T;
}, {}>>;
export default CADVehicleStatusModule;
export declare type CADVehicleStatusModel = UnboxPromise<ReturnType<typeof CADVehicleStatusModule>>;
export declare type CADVehicleStatus = ModelItemType<CADVehicleStatusModel>;
//# sourceMappingURL=cad-vehicle-status.d.ts.map
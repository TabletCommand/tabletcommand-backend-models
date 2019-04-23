/// <reference types="mongoose" />
import { MongooseModule, UnboxPromise } from "./types";
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
    } & import("mongoose").Document, callback: (o: {
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
    } & import("mongoose").Document) => T): T;
}, {}>>;
export default CADVehicleStatusModule;
export declare type CADVehicleStatus = UnboxPromise<ReturnType<typeof CADVehicleStatusModule>>;

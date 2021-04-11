import { MongooseModule, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
import { Document, Model } from "mongoose";
export declare function CADVehicleStatusHistoryModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    departmentId: {
        type: StringConstructor;
        default: string;
        required: true;
        index: true;
    };
    vehicleId: {
        type: StringConstructor;
        default: string;
        index: true;
    };
    radioName: {
        type: StringConstructor;
        default: string;
    };
    status: {
        type: StringConstructor;
        default: string;
    };
    statusCode: {
        type: StringConstructor;
        default: string;
    };
    requestedAt: {
        type: NumberConstructor;
        default: number;
        min: number;
    };
    requestDelay: {
        type: NumberConstructor;
        default: number;
    };
    requestedBy: {
        type: StringConstructor;
        default: string;
    };
    incidentNumber: {
        type: StringConstructor;
        default: string;
    };
    options: {
        type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
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
        }>, unknown>)[];
        default: never[];
    };
    e: {
        type: StringConstructor;
        default: string;
    };
}>, unknown>>;
export interface CADVehicleStatusHistory extends Document, ItemTypeFromTypeSchemaFunction<typeof CADVehicleStatusHistoryModule> {
}
export interface CADVehicleStatusHistoryModel extends Model<CADVehicleStatusHistory> {
}
declare const _default: ReplaceModelReturnType<typeof CADVehicleStatusHistoryModule, CADVehicleStatusHistoryModel>;
export default _default;

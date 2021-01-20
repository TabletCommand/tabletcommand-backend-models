/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function CADVehicleStatusHistoryModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any> & Record<string, unknown> & {
    departmentId: string;
    vehicleId: string;
    radioName: string;
    status: string;
    statusCode: string;
    requestedAt: number;
    requestDelay: number;
    requestedBy: string;
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
    e: string;
}> & {
    __methods?: unknown;
}>;
export interface CADVehicleStatusHistory extends ItemTypeFromTypeSchemaFunction<typeof CADVehicleStatusHistoryModule> {
}
export interface CADVehicleStatusHistoryModel extends ModelTypeFromTypeSchemaFunction<CADVehicleStatusHistory> {
}
declare const _default: ReplaceModelReturnType<typeof CADVehicleStatusHistoryModule, CADVehicleStatusHistoryModel>;
export default _default;
//# sourceMappingURL=cad-vehicle-status-history.d.ts.map
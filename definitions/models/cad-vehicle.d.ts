/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function CADVehicleModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any, {}> & Record<string, unknown> & {
    uuid: string;
    departmentId: string;
    modifiedDate: number;
    vehicleId: string;
    radioName: string;
    station: import("../helpers").MongooseInterface<{
        code: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
    }>;
    mapHidden: boolean;
    capability: string;
}, {}> & {
    __methods?: unknown;
}>;
export interface CADVehicle extends ItemTypeFromTypeSchemaFunction<typeof CADVehicleModule> {
}
export interface CADVehicleModel extends ModelTypeFromTypeSchemaFunction<CADVehicle> {
}
declare const _default: ReplaceModelReturnType<typeof CADVehicleModule, CADVehicleModel>;
export default _default;
//# sourceMappingURL=cad-vehicle.d.ts.map
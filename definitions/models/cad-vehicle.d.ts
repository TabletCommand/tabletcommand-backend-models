/// <reference types="mongoose" />
<<<<<<< HEAD
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function CADVehicleModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
=======
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
<<<<<<< HEAD
export declare function CADVehicleModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any> & Record<string, unknown> & {
>>>>>>> 3af52d1 (Upgraded mongoose uuid and ts packages.)
=======
export declare function CADVehicleModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any, {}> & Record<string, unknown> & {
>>>>>>> a8e26f7 (Upgraded TS and monggose.)
    uuid: string;
    departmentId: string;
    modifiedDate: number;
    modified: string;
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
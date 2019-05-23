/// <reference types="mongoose" />
import { MongooseModule, UnboxPromise, ModelItemType } from "./helpers";
export declare function CADVehicleModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    uuid: string;
    departmentId: string;
    modifiedDate: number;
    vehicleId: string;
    radioName: string;
    station: {
        code: string;
        name: string;
    };
}, {}>>;
export default CADVehicleModule;
export declare type CADVehicleModel = UnboxPromise<ReturnType<typeof CADVehicleModule>>;
export declare type CADVehicle = ModelItemType<CADVehicleModel>;
//# sourceMappingURL=cad-vehicle.d.ts.map
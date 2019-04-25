/// <reference types="mongoose" />
import { MongooseModule, UnboxPromise } from "./helpers";
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
export declare type CADVehicle = UnboxPromise<ReturnType<typeof CADVehicleModule>>;

/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from "mongoose";
import { MongooseModule } from "../helpers";
interface StationType {
    code: string;
    name: string;
}
export interface CADVehicle {
    uuid: string;
    departmentId: string;
    modifiedDate: number;
    modified: Date;
    vehicleId: string;
    radioName: string;
    station: StationType;
    capability: string;
    mapHidden: boolean;
    locationToCAD: boolean;
    backupDate: Date;
}
export default function CADVehicleModule(mongoose: MongooseModule): Promise<Model<CADVehicle, {}, {}, {}, import("mongoose").Document<unknown, {}, CADVehicle> & CADVehicle & {
    _id: import("mongoose").Types.ObjectId;
}, any>>;
export interface CADVehicleModel extends Model<CADVehicle> {
}
export {};
//# sourceMappingURL=cad-vehicle.d.ts.map
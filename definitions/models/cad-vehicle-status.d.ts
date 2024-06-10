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
import { MongooseModule } from "../helpers";
import { CADStatusOptionSelectedSchemaType } from "./schema/cad-status-option-selected";
import { Model } from "mongoose";
interface DestinationType {
    address: string;
    name: string;
}
export interface CADVehicleStatus {
    uuid: string;
    departmentId: string;
    vehicleId: string;
    radioName: string;
    requestTime: number;
    responseTime: number;
    changedAt: Date;
    status: string;
    statusCode: string;
    modifiedDate: number;
    modified: Date;
    requestStatus: number;
    owner: string;
    ownerId: string;
    incidentNumber: string;
    options: CADStatusOptionSelectedSchemaType[];
    capability: string;
    locationCurrent: string;
    locationDestination: string;
    destination: DestinationType;
    assignableByUser: boolean;
    backupDate: Date;
}
export default function CADVehicleStatusModule(mongoose: MongooseModule): Promise<Model<CADVehicleStatus, {}, {}, {}, import("mongoose").Document<unknown, {}, CADVehicleStatus> & CADVehicleStatus & {
    _id: import("mongoose").Types.ObjectId;
}, any>>;
export interface CADVehicleStatusModel extends Model<CADVehicleStatus> {
}
export {};
//# sourceMappingURL=cad-vehicle-status.d.ts.map
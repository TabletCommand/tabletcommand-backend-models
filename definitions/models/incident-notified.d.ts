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
import { Model, Types } from "mongoose";
import { MongooseModule } from "../helpers";
interface SentItemType {
    name: string;
    type: string;
    date: Date;
}
interface UnitType {
    UnitID: string;
    UnitDispatchNumber: string;
}
export interface IncidentNotified {
    _id: Types.ObjectId;
    departmentId: string;
    IncidentNumber: string;
    incidentTypes: string[];
    units: string[];
    unitsByDispatch: UnitType[];
    sent: SentItemType[];
    updated: Date;
}
export default function IncidentNotifiedModule(mongoose: MongooseModule): Promise<Model<IncidentNotified, {}, {}, {}, import("mongoose").Document<unknown, {}, IncidentNotified> & IncidentNotified & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface IncidentNotifiedModel extends Model<IncidentNotified> {
}
export {};
//# sourceMappingURL=incident-notified.d.ts.map
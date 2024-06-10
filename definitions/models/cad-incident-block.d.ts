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
import { ReportNumberSchemaType } from "./schema/shared-incident";
import { Model, Types } from "mongoose";
export interface CADIncidentBlock {
    _id: Types.ObjectId;
    departmentId: string;
    source: string;
    IncidentNumber: string;
    AgencyIncidentCallTypeDescription: string;
    EntryDateTime: string;
    ClosedDateTime: string;
    ReportNumber: ReportNumberSchemaType[];
}
export default function CADIncidentBlockModule(mongoose: MongooseModule): Promise<Model<CADIncidentBlock, {}, {}, {}, import("mongoose").Document<unknown, {}, CADIncidentBlock> & CADIncidentBlock & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface CADIncidentBlockModel extends Model<CADIncidentBlock> {
}
//# sourceMappingURL=cad-incident-block.d.ts.map
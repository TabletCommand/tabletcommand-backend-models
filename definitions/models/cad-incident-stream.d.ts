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
import { Types, Model } from "mongoose";
export interface CADIncidentStream {
    _id: Types.ObjectId;
    id: string;
    uuid: string;
    tag: string;
    departmentId: string;
    incidentNumber: string;
    createdAt: Date;
    payload: object;
}
export default function CADIncidentStreamModule(mongoose: MongooseModule): Promise<Model<CADIncidentStream, {}, {}, {}, import("mongoose").Document<unknown, {}, CADIncidentStream> & CADIncidentStream & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface CADIncidentStreamModel extends Model<CADIncidentStream> {
}
//# sourceMappingURL=cad-incident-stream.d.ts.map
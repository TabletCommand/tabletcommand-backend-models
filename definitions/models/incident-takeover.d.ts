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
import { Model } from "mongoose";
import { IncidentTakeoverType } from "../types/incident-events";
export interface IncidentTakeover extends IncidentTakeoverType {
}
export default function IncidentTakeoverModule(mongoose: MongooseModule): Promise<Model<IncidentTakeover, {}, {}, {}, import("mongoose").Document<unknown, {}, IncidentTakeover> & IncidentTakeover & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>>;
export interface IncidentTakeoverModel extends Model<IncidentTakeover> {
}
//# sourceMappingURL=incident-takeover.d.ts.map
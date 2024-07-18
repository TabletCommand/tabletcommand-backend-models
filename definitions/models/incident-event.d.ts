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
import { IncidentEventType } from "../types/incident-events";
export interface IncidentEvent extends IncidentEventType {
}
export declare function IncidentEventSchema(mongoose: MongooseModule): import("mongoose").Schema<IncidentEventType, Model<IncidentEventType, any, any, any, import("mongoose").Document<unknown, any, IncidentEventType> & IncidentEventType & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IncidentEventType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IncidentEventType>> & import("mongoose").FlatRecord<IncidentEventType> & Required<{
    _id: import("mongoose").Types.ObjectId;
}>>;
export default function IncidentEventModule(mongoose: MongooseModule): Promise<Model<IncidentEvent, {}, {}, {}, import("mongoose").Document<unknown, {}, IncidentEvent> & IncidentEvent & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>>;
export interface IncidentEventModel extends Model<IncidentEvent> {
}
//# sourceMappingURL=incident-event.d.ts.map
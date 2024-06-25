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
interface EventUserType {
    username: string;
    email: string;
    radioName: string;
    userId: string;
}
export interface IncidentEvent {
    _id: Types.ObjectId;
    id?: string;
    departmentId: string;
    IncidentNumber: string;
    modified_unix_date: number;
    modified: Date;
    message: string;
    location: {
        longitude: number;
        latitude: number;
    };
    type: string;
    user: EventUserType;
    serverTime: number;
    userTime: number;
    uuid: string;
    ref_uuid: string;
    opts: object;
    archived: boolean;
}
export declare function IncidentEventSchema(mongoose: MongooseModule): import("mongoose").Schema<IncidentEvent, Model<IncidentEvent, any, any, any, import("mongoose").Document<unknown, any, IncidentEvent> & IncidentEvent & Required<{
    _id: Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IncidentEvent, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IncidentEvent>> & import("mongoose").FlatRecord<IncidentEvent> & Required<{
    _id: Types.ObjectId;
}>>;
export default function IncidentEventModule(mongoose: MongooseModule): Promise<Model<IncidentEvent, {}, {}, {}, import("mongoose").Document<unknown, {}, IncidentEvent> & IncidentEvent & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface IncidentEventModel extends Model<IncidentEvent> {
}
export {};
//# sourceMappingURL=incident-event.d.ts.map
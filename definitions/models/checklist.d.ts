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
import { ChecklistItem } from "./checklist-item";
import { Model, Types } from "mongoose";
export interface Checklist extends Record<string, unknown> {
    _id: Types.ObjectId;
    id?: string;
    position: number;
    userId: string;
    uuid: string;
    isMandatory: boolean;
    modified_date: string;
    modified_unix_date: number;
    modified: Date;
    departmentId: string;
    active: boolean;
    name: string;
    agencyId: Types.ObjectId;
    items: ChecklistItem[];
}
export declare function ChecklistSchema(mongoose: MongooseModule): import("mongoose").Schema<Checklist, Model<Checklist, any, any, any, import("mongoose").Document<unknown, any, Checklist> & Checklist & Required<{
    _id: Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Checklist, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Checklist>> & import("mongoose").FlatRecord<Checklist> & Required<{
    _id: Types.ObjectId;
}>>;
export default function ChecklistModule(mongoose: MongooseModule): Promise<Model<Checklist, {}, {}, {}, import("mongoose").Document<unknown, {}, Checklist> & Checklist & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface ChecklistModel extends Model<Checklist> {
}
//# sourceMappingURL=checklist.d.ts.map
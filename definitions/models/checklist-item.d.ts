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
import { Model, Types } from "mongoose";
export interface ChecklistItem extends Record<string, unknown> {
    _id: Types.ObjectId;
    id: string;
    position: number;
    userId: string;
    uuid: string;
    checklist_uuid: string;
    api_checklist_id: string;
    isMandatory: boolean;
    modified_date: string;
    modified_unix_date: number;
    departmentId: string;
    active: boolean;
    name: string;
    description: string;
}
export declare function ChecklistItemSchema(mongoose: MongooseModule): import("mongoose").Schema<ChecklistItem, Model<ChecklistItem, any, any, any, import("mongoose").Document<unknown, any, ChecklistItem> & ChecklistItem & Required<{
    _id: Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ChecklistItem, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ChecklistItem>> & import("mongoose").FlatRecord<ChecklistItem> & Required<{
    _id: Types.ObjectId;
}>>;
export default function ChecklistItemModule(mongoose: MongooseModule): Promise<Model<ChecklistItem, {}, {}, {}, import("mongoose").Document<unknown, {}, ChecklistItem> & ChecklistItem & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface ChecklistItemModel extends Model<ChecklistItem> {
}
//# sourceMappingURL=checklist-item.d.ts.map
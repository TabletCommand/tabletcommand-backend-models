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
import { ChecklistItemType } from "../types/checklist";
export interface ChecklistItem extends ChecklistItemType, Record<string, unknown> {
}
export declare function ChecklistItemSchema(mongoose: MongooseModule): import("mongoose").Schema<ChecklistItemType, Model<ChecklistItemType, any, any, any, import("mongoose").Document<unknown, any, ChecklistItemType> & ChecklistItemType & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ChecklistItemType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ChecklistItemType>> & import("mongoose").FlatRecord<ChecklistItemType> & Required<{
    _id: import("mongoose").Types.ObjectId;
}>>;
export default function ChecklistItemModule(mongoose: MongooseModule): Promise<Model<ChecklistItem, {}, {}, {}, import("mongoose").Document<unknown, {}, ChecklistItem> & ChecklistItem & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>>;
export interface ChecklistItemModel extends Model<ChecklistItem> {
}
//# sourceMappingURL=checklist-item.d.ts.map
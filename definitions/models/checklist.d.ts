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
import { ChecklistType } from "../types/checklist";
export interface Checklist extends ChecklistType, Record<string, unknown> {
}
export declare function ChecklistSchema(mongoose: MongooseModule): import("mongoose").Schema<ChecklistType, Model<ChecklistType, any, any, any, import("mongoose").Document<unknown, any, ChecklistType> & ChecklistType & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ChecklistType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ChecklistType>> & import("mongoose").FlatRecord<ChecklistType> & Required<{
    _id: import("mongoose").Types.ObjectId;
}>>;
export default function ChecklistModule(mongoose: MongooseModule): Promise<Model<Checklist, {}, {}, {}, import("mongoose").Document<unknown, {}, Checklist> & Checklist & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>>;
export interface ChecklistModel extends Model<Checklist> {
}
//# sourceMappingURL=checklist.d.ts.map
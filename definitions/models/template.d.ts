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
interface ChecklistOptionType {
    name: string;
    position: number;
    id: string;
}
interface GroupOptionType {
    name: string;
    position: number;
    uuid: string;
}
export interface Template extends Record<string, unknown> {
    _id: Types.ObjectId;
    id?: string;
    position: number;
    userId: string;
    uuid: string;
    isMandatory: boolean;
    modified_unix_date: number;
    modified: Date;
    departmentId: string;
    active: boolean;
    name: string;
    checklist: ChecklistOptionType[];
    group: GroupOptionType[];
    agencyId: Types.ObjectId;
}
export declare function TemplateSchema(mongoose: MongooseModule): import("mongoose").Schema<Template, Model<Template, any, any, any, import("mongoose").Document<unknown, any, Template> & Template & Required<{
    _id: Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Template, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Template>> & import("mongoose").FlatRecord<Template> & Required<{
    _id: Types.ObjectId;
}>>;
export default function TemplateModule(mongoose: MongooseModule): Promise<Model<Template, {}, {}, {}, import("mongoose").Document<unknown, {}, Template> & Template & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface TemplateModel extends Model<Template> {
}
export {};
//# sourceMappingURL=template.d.ts.map
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
interface BattalionUnitType extends Record<string, unknown> {
    _id: Types.ObjectId;
    id: string;
    name: string;
    friendly_id: string;
    personnel: number;
    position: number;
    active: boolean;
    isMandatory: boolean;
    modified_date: string;
    modified_unix_date: number;
    modified: Date;
    uuid: string;
    api_battalion_id: string;
    battalion_uuid: string;
    battalion_name: string;
    agencyId: Types.ObjectId;
}
export interface Battalion extends Record<string, unknown> {
    _id: Types.ObjectId;
    id?: string;
    name: string;
    active: boolean;
    modified_date: string;
    modified_unix_date?: number;
    modified: Date;
    isMandatory: boolean;
    userId: string;
    uuid: string;
    departmentId: string;
    agencyId: Types.ObjectId;
    position: number;
    units: BattalionUnitType[];
}
export declare function BattalionSchema(mongoose: MongooseModule): import("mongoose").Schema<Battalion, Model<Battalion, any, any, any, import("mongoose").Document<unknown, any, Battalion> & Battalion & Required<{
    _id: Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Battalion, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Battalion>> & import("mongoose").FlatRecord<Battalion> & Required<{
    _id: Types.ObjectId;
}>>;
export default function BattalionModule(mongoose: MongooseModule): Promise<Model<Battalion, {}, {}, {}, import("mongoose").Document<unknown, {}, Battalion> & Battalion & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface BattalionModel extends Model<Battalion> {
}
export {};
//# sourceMappingURL=battalion.d.ts.map
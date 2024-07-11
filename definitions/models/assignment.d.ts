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
export interface Assignment extends Record<string, unknown> {
    _id: Types.ObjectId;
    id: string;
    uuid: string;
    active: boolean;
    userId: string;
    departmentId: string;
    isMandatory: boolean;
    modified: Date;
    modified_date: string;
    modified_unix_date: number;
    position: number;
    name: string;
    description: string;
    full_description: string;
}
export default function AssignmentModule(mongoose: MongooseModule): Promise<Model<Assignment, {}, {}, {}, import("mongoose").Document<unknown, {}, Assignment> & Assignment & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface AssignmentModel extends Model<Assignment> {
}
//# sourceMappingURL=assignment.d.ts.map
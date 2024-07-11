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
export interface ActionLog {
    _id: Types.ObjectId;
    departmentId: string;
    email: string;
    userId: string;
    action: string;
    object: object;
    before: object;
    after: object;
    delta: object;
    message: string;
    createdAt: Date;
    modified_unix_date: number;
}
export default function ActionLogModule(mongoose: MongooseModule): Promise<Model<ActionLog, {}, {}, {}, import("mongoose").Document<unknown, {}, ActionLog> & ActionLog & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface ActionLogModel extends Model<ActionLog> {
}
//# sourceMappingURL=action-log.d.ts.map
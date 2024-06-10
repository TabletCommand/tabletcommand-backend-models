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
import { ColorSchemaType } from "./schema/color";
import { Model, Types } from "mongoose";
interface TypeSchemaType {
    type: string;
    typeOpts: object;
}
export interface Message {
    _id: Types.ObjectId;
    departmentId: string;
    userId: string;
    session: string;
    active: boolean;
    uuid: string;
    requestId: string;
    title: string;
    body: string;
    actionTitle: string;
    created: Date;
    updated: Date;
    color: ColorSchemaType;
    url: string;
    priority: number;
    type: TypeSchemaType;
}
export default function MessageModule(mongoose: MongooseModule): Promise<Model<Message, {}, {}, {}, import("mongoose").Document<unknown, {}, Message> & Message & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface MessageModel extends Model<Message> {
}
export {};
//# sourceMappingURL=message.d.ts.map
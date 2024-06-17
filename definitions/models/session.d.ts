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
import { OAuthSchemaType } from "./schema/oauth";
import { Model } from "mongoose";
export interface Session {
    _id: string;
    id: string;
    nick: string;
    email: string;
    user: string;
    active: boolean;
    token: string;
    source: string;
    departmentId: string;
    why: string;
    when: string;
    ended: string;
    userAgent: string;
    remoteAddress: string;
    deviceId: string;
    authSource: string;
    oAuth: OAuthSchemaType;
}
export default function SessionModule(mongoose: MongooseModule): Promise<Model<Session, {}, {}, {}, import("mongoose").Document<unknown, {}, Session> & Session & Required<{
    _id: string;
}>, any>>;
export interface SessionModel extends Model<Session> {
}
//# sourceMappingURL=session.d.ts.map
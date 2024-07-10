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
interface FileSchemaType {
    originalName: string;
    encoding: string;
    mimeType: string;
    localPath: string;
    remotePath: string;
    size: number;
    received: Date;
    fieldname: string;
    hostname: string;
}
export interface RemoteLog {
    _id: Types.ObjectId;
    departmentId: string;
    userId: string;
    session: string;
    active: boolean;
    uuid: string;
    requestId: string;
    received: Date;
    hostname: string;
    status: string;
    lastStatusChange: Date;
    isCADRequest: boolean;
    createdAt: Date;
    updatedAt: Date;
    message: string;
    manifest: string[];
    userAgent: string;
    appVersion: string;
    files: FileSchemaType[];
}
export default function RemoteLogModule(mongoose: MongooseModule): Promise<Model<RemoteLog, {}, {}, {}, import("mongoose").Document<unknown, {}, RemoteLog> & RemoteLog & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface RemoteLogModel extends Model<RemoteLog> {
}
export {};
//# sourceMappingURL=remote-log.d.ts.map
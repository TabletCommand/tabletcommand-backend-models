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
    fieldname: string;
    localPath: string;
    remotePath: string;
    hostname: string;
    size: number;
    received: Date;
}
export interface RemoteLogStream extends Record<string, unknown> {
    _id: Types.ObjectId;
    departmentId: string;
    userId: string;
    isCADRequest: boolean;
    session: string;
    requestId: string;
    requested: Date;
    active: boolean;
    uuid: string;
    createdAt: Date;
    updatedAt: Date;
    status: string;
    message: string;
    manifest: string[];
    userAgent: string;
    appVersion: string;
    file: FileSchemaType;
}
export default function RemoteLogStreamModule(mongoose: MongooseModule): Promise<Model<RemoteLogStream, {}, {}, {}, import("mongoose").Document<unknown, {}, RemoteLogStream> & RemoteLogStream & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface RemoteLogStreamModel extends Model<RemoteLogStream> {
}
export {};
//# sourceMappingURL=remote-log-stream.d.ts.map
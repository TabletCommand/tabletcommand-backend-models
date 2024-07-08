/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType, currentDate } from "../helpers";
export declare function RemoteLogStreamModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("mongoose").Types.ObjectId;
    departmentId: string;
    userId: string;
    session: string;
    requestId: string;
    requested: string;
    active: boolean;
    uuid: string;
    createdAt: string;
    updatedAt: string;
    message: string;
    manifest: string[];
    userAgent: string;
    appVersion: string;
    file: import("../helpers").MongooseInterface<{
        originalName: {
            type: StringConstructor;
            default: string;
        };
        encoding: {
            type: StringConstructor;
            default: string;
        };
        mimeType: {
            type: StringConstructor;
            default: string;
        };
        fieldname: {
            type: StringConstructor;
            default: string;
        };
        localPath: {
            type: StringConstructor;
            default: string;
        };
        remotePath: {
            type: StringConstructor;
            default: string;
        };
        hostname: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: NumberConstructor;
            default: number;
        };
        received: {
            type: DateConstructor;
            default: typeof currentDate;
        };
    }>;
}, {}> & {
    __methods?: unknown;
}>;
export interface RemoteLogStream extends ItemTypeFromTypeSchemaFunction<typeof RemoteLogStreamModule> {
}
export interface RemoteLogStreamModel extends ModelTypeFromTypeSchemaFunction<RemoteLogStream> {
}
declare const _default: ReplaceModelReturnType<typeof RemoteLogStreamModule, RemoteLogStreamModel>;
export default _default;
//# sourceMappingURL=remote-log-stream.d.ts.map
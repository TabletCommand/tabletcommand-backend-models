/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType, currentDate } from "../helpers";
export declare function RemoteLogModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("mongoose").Types.ObjectId;
    departmentId: string;
    userId: string;
    isCADRequest: boolean;
    session: string;
    requestId: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    notifiedAt: string;
    status: string;
    message: string;
    manifest: string[];
    userAgent: string;
    appVersion: string;
    files: import("../helpers").MongooseInterface<{
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
        remoteFilePath: {
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
    }>[];
    remoteFolderPath: string;
    remoteFolderId: string;
}, {}> & {
    __methods?: unknown;
}>;
export interface RemoteLog extends ItemTypeFromTypeSchemaFunction<typeof RemoteLogModule> {
}
export interface RemoteLogModel extends ModelTypeFromTypeSchemaFunction<RemoteLog> {
}
declare const _default: ReplaceModelReturnType<typeof RemoteLogModule, RemoteLogModel>;
export default _default;
//# sourceMappingURL=remote-log.d.ts.map
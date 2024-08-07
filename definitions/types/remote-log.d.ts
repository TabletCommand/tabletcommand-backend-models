import { Types } from "mongoose";
import { RemoteFileSchemaType } from "./remote-file";
export interface RemoteLogType {
    _id: Types.ObjectId;
    departmentId: string;
    userId: string;
    session: string;
    active: boolean;
    requestId: string;
    received: Date;
    hostname: string;
    status: string;
    lastStatusChange: Date;
    isCADRequest: boolean;
    createdAt: Date;
    updatedAt: Date;
    notifiedAt: Date;
    message: string;
    manifest: string[];
    userAgent: string;
    appVersion: string;
    remoteFolderPath: string;
    remoteFolderId: string;
    files: RemoteFileSchemaType[];
}
export interface RemoteLogStreamType {
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
    file: RemoteFileSchemaType;
    remoteFolderPath: string;
    remoteFolderId: string;
}
//# sourceMappingURL=remote-log.d.ts.map
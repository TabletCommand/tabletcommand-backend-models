/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType, currentDate } from "../helpers";
export declare function RemoteLogModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectID;
    departmentId: string;
    userId: string;
    session: string;
    active: boolean;
    uuid: string;
    requestId: string;
    received: string;
    hostname: string;
    status: string;
    lastStatusChange: string;
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
        localPath: {
            type: StringConstructor;
            default: string;
        };
        remotePath: {
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
/// <reference types="mongoose" />
import { MongooseModule, ReplaceModelReturnType, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction } from "../helpers";
export declare function SessionModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: string;
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
}, {}> & {
    __methods?: unknown;
}>;
export interface Session extends ItemTypeFromTypeSchemaFunction<typeof SessionModule> {
}
export interface SessionModel extends ModelTypeFromTypeSchemaFunction<Session> {
}
declare const _default: ReplaceModelReturnType<typeof SessionModule, SessionModel>;
export default _default;
//# sourceMappingURL=session.d.ts.map
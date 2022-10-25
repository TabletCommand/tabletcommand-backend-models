/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
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
    authSource: string;
    authGroupKey: string;
    authGroupExpireAt: string;
    oAuth: import("../helpers").MongooseInterface<{
        accessToken: {
            type: StringConstructor;
            default: string;
        };
        refreshToken: {
            type: StringConstructor;
            default: string;
        };
        expireAt: {
            type: DateConstructor;
            default: Date;
        };
    }>;
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
/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function UserModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    nick: string;
    email: string;
    name: string;
    departmentId: string;
    modified_date: string;
    when: string;
    agency: {
        code: string;
        name: string;
        domain: string;
        personnelApiKey: string;
    };
    active: boolean;
    admin: boolean;
    superuser: boolean;
    isPro: boolean;
    outsider: boolean;
    remoteLoggingEnabled: boolean;
    salt: string;
    pass: string;
    mapHidden: boolean;
    mapId: string;
    vehicle: {
        radioName: string;
        vehicleId: string;
    };
    sessionCountiPhone: number;
    sessionCountiPad: number;
    shareLocationEnabled: boolean;
    rtsAuthKey: string;
    token: string;
    tokenExpireDate: number;
}, {}> & {
    __methods?: unknown;
}>;
export interface User extends ItemTypeFromTypeSchemaFunction<typeof UserModule> {
}
export interface UserModel extends ModelTypeFromTypeSchemaFunction<User> {
}
declare const _default: ReplaceModelReturnType<typeof UserModule, UserModel>;
export default _default;
//# sourceMappingURL=user.d.ts.map
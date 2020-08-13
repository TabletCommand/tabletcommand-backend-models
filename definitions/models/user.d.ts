/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function UserModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    nick: string;
    email: string;
    name: string;
    uuid: string;
    departmentId: string;
    modified_date: string;
    when: string;
    agencyId: {
        type: never;
        ref: never;
        default: never;
    };
    managedAgencies: {
        type: never;
        ref: never;
        default: unknown[];
    };
    active: boolean;
    admin: boolean;
    superuser: boolean;
    isPro: boolean;
    outsider: boolean;
    remoteLoggingEnabled: boolean;
    shareLocationEnabled: boolean;
    beaconEnabled: boolean;
    userContributionEnabled: boolean;
    syncLoggingExpireDate: string;
    salt: string;
    pass: string;
    mapHidden: boolean;
    mapId: string;
    vehicle: import("../helpers").MongooseInterface<{
        radioName: {
            type: StringConstructor;
            default: string;
        };
        vehicleId: {
            type: StringConstructor;
            default: string;
        };
    }>;
    sessionCountiPhone: number;
    sessionCountiPad: number;
    rtsAuthKey: string;
    token: string;
    tokenExpireDate: number;
    shareLocationPhone: boolean;
    shareLocationTablet: boolean;
    notificationSounds: import("../helpers").MongooseInterface<{
        sound: {
            type: StringConstructor;
        };
        soundType: {
            type: StringConstructor;
        };
    }>[];
    offlineMapsEnabled: boolean;
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
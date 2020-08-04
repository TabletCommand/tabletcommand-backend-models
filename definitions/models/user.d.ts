/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function UserModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    nick: string;
    email: string;
    name: string;
    uuid: string;
    departmentId: string;
    modified_date: string;
    when: string;
    agency: {
        code: string;
        name: string;
        domain: string;
        personnelApiKey: string;
        agencyApiKey: string;
    };
    agencyId: {
        type: {
            prototype: {
                auto: {};
                checkRequired: {};
                default: any;
                get: {};
                index: import("mongoose").Schema.Types.ObjectId;
                required: {};
                select: {};
                set: {};
                sparse: {};
                text: {};
                unique: {};
                validate: {};
            };
            schemaName: never;
        };
        ref: never;
        default: never;
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
    vehicle: {
        radioName: string;
        vehicleId: string;
    };
    sessionCountiPhone: number;
    sessionCountiPad: number;
    rtsAuthKey: string;
    token: string;
    tokenExpireDate: number;
    shareLocationPhone: boolean;
    shareLocationTablet: boolean;
    notificationSounds: {
        sound: string;
        soundType: string;
    }[];
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
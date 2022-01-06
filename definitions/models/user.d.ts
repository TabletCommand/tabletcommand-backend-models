/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType, currentDate } from "../helpers";
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
    mobileAccess: boolean;
    webAccess: boolean;
    outsider: boolean;
    shareLocationEnabled: boolean;
    beaconEnabled: boolean;
    userContributionEnabled: boolean;
    syncLoggingExpireDate: string;
    beacons: string[];
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
    pubNubV2: import("../helpers").MongooseInterface<{
        token: {
            type: StringConstructor;
            default: string;
        };
        expireAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        runAt: {
            type: DateConstructor;
            default: string;
        };
    }>;
    pubNubV3: import("../helpers").MongooseInterface<{
        token: {
            type: StringConstructor;
            default: string;
        };
        expireAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        runAt: {
            type: DateConstructor;
            default: string;
        };
    }>;
    token: string;
    tokenExpireAt: string;
    shareLocationPhone: boolean;
    shareLocationTablet: boolean;
    offlineMapsEnabled: boolean;
    fireMapperProEnabled: boolean;
    arcGISAuth: import("../helpers").MongooseInterface<{
        username: {
            type: StringConstructor;
            default: string;
        };
        encrypted: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    iv: {
                        type: StringConstructor;
                        default: string;
                    };
                    encryptedData: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            };
            default: null;
        };
    }>;
    arcGISAuthError: import("../helpers").MongooseInterface<{
        code: {
            type: NumberConstructor;
            default: number;
        };
        error: {
            type: StringConstructor;
            default: string;
        };
        error_description: {
            type: StringConstructor;
            default: string;
        };
        message: {
            type: StringConstructor;
            default: string;
        };
    }>;
    offDutyEnabled: boolean;
    webMapSettings: {
        defaultZoomLevel: number;
        defaultCenter: number[];
        defaultMap: string;
    };
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
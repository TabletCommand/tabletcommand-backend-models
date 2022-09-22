/// <reference types="mongoose" />
import * as uuid from "uuid";
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType, currentDate } from "../helpers";
export declare function UserSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../helpers").MongooseInterface<{
        nick: {
            type: StringConstructor;
            default: string;
            index: true;
        };
        email: {
            type: StringConstructor;
            default: string;
            index: true;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        uuid: {
            type: StringConstructor;
            default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
        };
        departmentId: {
            type: StringConstructor;
            default: string;
            required: boolean;
            index: true;
        };
        modified_date: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        when: {
            type: DateConstructor;
        };
        agencyId: {
            type: import("mongoose").Types.ObjectIdConstructor;
            ref: string;
            default: null;
        };
        managedAgencies: {
            type: import("mongoose").Types.ObjectIdConstructor[];
            ref: string;
            default: never[];
        };
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        admin: {
            type: BooleanConstructor;
            default: boolean;
        };
        superuser: {
            type: BooleanConstructor;
            default: boolean;
        };
        isPro: {
            type: BooleanConstructor;
            default: boolean;
        };
        isIncidentManager: {
            type: BooleanConstructor;
            default: boolean;
        };
        mobileAccess: {
            type: BooleanConstructor;
            default: boolean;
        };
        webAccess: {
            type: BooleanConstructor;
            default: boolean;
        };
        outsider: {
            type: BooleanConstructor;
            default: boolean;
        };
        shareLocationEnabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        beaconEnabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        userContributionEnabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        syncLoggingExpireDate: {
            type: DateConstructor;
            default: null;
        };
        beacons: {
            type: StringConstructor[];
            default: never[];
        };
        salt: {
            type: StringConstructor;
            default: string;
            select: boolean;
        };
        pass: {
            type: StringConstructor;
            default: string;
            select: boolean;
        };
        mapHidden: {
            type: BooleanConstructor;
            default: boolean;
        };
        mapId: {
            type: StringConstructor;
            default: string;
        };
        vehicle: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    radioName: {
                        type: StringConstructor;
                        default: string;
                    };
                    vehicleId: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            };
            default: null;
        };
        sessionCountiPhone: {
            type: NumberConstructor;
            default: number;
        };
        sessionCountiPad: {
            type: NumberConstructor;
            default: number;
        };
        rtsAuthKey: {
            type: StringConstructor;
            default: string;
        };
        pubNubV2: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
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
                _methods: unknown;
            };
            default: null;
        };
        pubNubV3: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
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
                _methods: unknown;
            };
            default: null;
        };
        token: {
            type: StringConstructor;
            default: string;
        };
        tokenExpireAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        shareLocationPhone: {
            type: BooleanConstructor;
            default: boolean;
        };
        shareLocationTablet: {
            type: BooleanConstructor;
            default: boolean;
        };
        offlineMapsEnabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        fireMapperProEnabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        arcGISAuth: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
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
                _methods: unknown;
            };
            default: null;
        };
        arcGISAuthError: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
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
                _methods: unknown;
            };
            default: null;
        };
        offDutyEnabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        webMapSettings: {
            defaultZoomLevel: {
                type: NumberConstructor;
            };
            defaultCenter: {
                type: NumberConstructor[];
                default: never[];
            };
            defaultMap: {
                type: StringConstructor;
            };
        };
        locationToCAD: {
            type: BooleanConstructor;
            default: boolean;
        };
        logOffEnabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        restrictedCommentsEnabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>;
    _methods: unknown;
};
export declare function UserModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    nick: string;
    email: string;
    name: string;
    uuid: string;
    departmentId: string;
    modified_date: string;
    when: string;
    agencyId: import("bson").ObjectID;
    managedAgencies: {
        type: never;
        ref: never;
        default: unknown[];
    };
    active: boolean;
    admin: boolean;
    superuser: boolean;
    isPro: boolean;
    isIncidentManager: boolean;
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
    locationToCAD: boolean;
    logOffEnabled: boolean;
    restrictedCommentsEnabled: boolean;
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
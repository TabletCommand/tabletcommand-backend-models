/// <reference types="mongoose" />
import { MongooseModule, retrieveCurrentUnixTime, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function UserDeviceModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    userId: string;
    departmentId: string;
    devices: import("../helpers").MongooseInterface<{
        token: {
            type: StringConstructor;
            default: string;
        };
        env: {
            type: StringConstructor;
            default: string;
        };
        ver: {
            type: StringConstructor;
            default: string;
        };
        ua: {
            type: StringConstructor;
            default: string;
        };
        time: {
            type: NumberConstructor;
            default: typeof retrieveCurrentUnixTime;
        };
        drift: {
            type: NumberConstructor;
            default: number;
        };
        bundleIdentifier: {
            type: StringConstructor;
            default: string;
        };
        silentEnabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        richEnabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        session: {
            type: StringConstructor;
            default: string;
        };
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>[];
    notificationCount: number;
    notificationUnits: string[];
    notificationIncidentTypes: string[];
    notificationSounds: import("../helpers").MongooseInterface<{
        ios: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    sound: {
                        type: StringConstructor;
                    };
                    soundType: {
                        type: StringConstructor;
                    };
                    os: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            };
        };
        android: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    sound: {
                        type: StringConstructor;
                    };
                    soundType: {
                        type: StringConstructor;
                    };
                    os: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            };
        };
    }>;
}, {}> & {
    __methods?: unknown;
}>;
export interface UserDevice extends ItemTypeFromTypeSchemaFunction<typeof UserDeviceModule> {
}
export interface UserDeviceModel extends ModelTypeFromTypeSchemaFunction<UserDevice> {
}
declare const _default: ReplaceModelReturnType<typeof UserDeviceModule, UserDeviceModel>;
export default _default;
//# sourceMappingURL=user-device.d.ts.map
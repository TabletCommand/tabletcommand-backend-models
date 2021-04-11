import { currentDate, MongooseModule, retrieveCurrentUnixTime, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
import { Document, Model } from "mongoose";
export declare function UserDeviceModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: import("mongoose").Types.ObjectIdConstructor;
        auto: true;
    };
    userId: {
        type: StringConstructor;
    };
    departmentId: {
        type: StringConstructor;
    };
    devices: {
        type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
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
            t: {
                type: DateConstructor;
                default: typeof currentDate;
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
        }>, unknown>)[];
        default: never[];
    };
    notificationCount: {
        type: NumberConstructor;
        default: number;
    };
    notificationUnits: {
        type: StringConstructor[];
        default: never[];
    };
    notificationIncidentTypes: {
        type: StringConstructor[];
        default: never[];
    };
    notificationSounds: {
        type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            ios: {
                type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
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
                }>, unknown>;
            };
            android: {
                type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
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
                }>, unknown>;
            };
        }>, unknown>;
        default: {};
    };
    offDuty: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, unknown>>;
export interface UserDevice extends Document, ItemTypeFromTypeSchemaFunction<typeof UserDeviceModule> {
}
export interface UserDeviceModel extends Model<UserDevice> {
}
declare const _default: ReplaceModelReturnType<typeof UserDeviceModule, UserDeviceModel>;
export default _default;

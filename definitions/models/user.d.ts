import * as uuid from "uuid";
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType, currentDate, PrivateSchemaInfo, MongooseInterface } from "../helpers";
import { Document, Model } from "mongoose";
export declare function UserModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & PrivateSchemaInfo<MongooseInterface<{
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
        required: true;
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
        type: typeof import("mongoose").Schema.Types.ObjectId;
        ref: string;
        default: null;
    };
    managedAgencies: {
        type: typeof import("mongoose").Schema.Types.ObjectId[];
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
    remoteLoggingEnabled: {
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
    salt: {
        type: StringConstructor;
        default: string;
        select: false;
    };
    pass: {
        type: StringConstructor;
        default: string;
        select: false;
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
        type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & PrivateSchemaInfo<MongooseInterface<{
            radioName: {
                type: StringConstructor;
                default: string;
            };
            vehicleId: {
                type: StringConstructor;
                default: string;
            };
        }>, unknown>;
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
    token: {
        type: StringConstructor;
        default: string;
    };
    tokenExpireDate: {
        type: NumberConstructor;
        default: number;
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
}>, unknown>>;
export interface User extends Document, ItemTypeFromTypeSchemaFunction<typeof UserModule> {
}
export interface UserModel extends Model<User> {
}
declare const _default: ReplaceModelReturnType<typeof UserModule, UserModel>;
export default _default;

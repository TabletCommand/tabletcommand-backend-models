/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function UserDeviceModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    _id: import("bson").ObjectId;
    userId: string;
    departmentId: string;
    devices: {
        token: string;
        env: string;
        ver: string;
        ua: string;
        time: number;
        drift: number;
        bundleIdentifier: string;
        silentEnabled: boolean;
        richEnabled: boolean;
        session: string;
    }[];
    notificationCount: number;
    notificationUnits: string[];
    notificationIncidentTypes: string[];
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
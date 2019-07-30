/// <reference types="mongoose" />
import { ModelItemType } from "./helpers";
import { MongooseModule, UnboxPromise } from "./helpers";
export declare function UserDeviceModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    _id: import("bson").ObjectId;
    userId: string;
    departmentId: string;
    devices: {
        token: string;
        env: string;
        ua: string;
        time: number;
        bundleIdentifier: string;
        silentEnabled: boolean;
        richEnabled: boolean;
        session: string;
    }[];
    notificationCount: number;
    notificationUnits: string[];
    notificationIncidentTypes: string[];
}, {}>>;
export default UserDeviceModule;
export declare type UserDeviceModel = UnboxPromise<ReturnType<typeof UserDeviceModule>>;
export declare type UserDevice = ModelItemType<UserDeviceModel>;
//# sourceMappingURL=user-device.d.ts.map
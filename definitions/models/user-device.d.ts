/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model, Types } from "mongoose";
import { MongooseModule } from "../helpers";
interface UnitSettingType {
    radioName: string;
    notificationType: string;
    notificationMode: string;
}
interface IncidentSettingType {
    incidentType: string;
    notificationType: string;
    notificationMode: string;
}
interface DeviceSchemaType {
    token: string;
    env: string;
    ver: string;
    ua: string;
    time: number;
    t: Date;
    drift: number;
    channelId: string;
    bundleIdentifier: string;
    silentEnabled: boolean;
    criticalAlertsEnabled: boolean;
    session: string;
    active: boolean;
    offDuty: boolean;
}
interface SoundSchemaItemType {
    sound: string;
    soundType: string;
    os: string;
}
interface SoundSchemaType {
    ios: SoundSchemaItemType;
    android: SoundSchemaItemType;
}
export interface UserDevice {
    _id: Types.ObjectId;
    userId: string;
    departmentId: string;
    devices: DeviceSchemaType[];
    notificationCount: number;
    notificationUnitSettings: UnitSettingType[];
    notificationIncidentSettings: IncidentSettingType[];
    notificationSounds: SoundSchemaType;
    offDuty: boolean;
    criticalAlertsVolume: string;
    allowInStaging: boolean;
}
export default function UserDeviceModule(mongoose: MongooseModule): Promise<Model<UserDevice, {}, {}, {}, import("mongoose").Document<unknown, {}, UserDevice> & UserDevice & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface UserDeviceModel extends Model<UserDevice> {
}
export {};
//# sourceMappingURL=user-device.d.ts.map
import { Types } from "mongoose";
export interface DeviceMappingType {
    _id: Types.ObjectId;
    departmentId: string;
    userId: string;
    deviceType: string;
    mapId: string;
    deviceId: string;
    location: {
        longitude: number;
        latitude: number;
    };
    modified_unix_date: number;
    modified: Date;
    active: boolean;
    remoteAddress: string;
    uuid: string;
    note: string;
    mapHidden: boolean;
}
//# sourceMappingURL=device-mapping.d.ts.map
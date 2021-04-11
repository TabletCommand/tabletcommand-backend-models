import * as uuid from "uuid";
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
import { Document, Model } from "mongoose";
export declare function DeviceMappingModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: import("mongoose").Types.ObjectIdConstructor;
        auto: true;
    };
    departmentId: {
        type: StringConstructor;
        default: string;
    };
    userId: {
        type: StringConstructor;
        default: string;
    };
    deviceType: {
        type: StringConstructor;
        default: string;
    };
    mapId: {
        type: StringConstructor;
        default: string;
    };
    deviceId: {
        type: StringConstructor;
        default: string;
    };
    location: {
        longitude: {
            type: NumberConstructor;
        };
        latitude: {
            type: NumberConstructor;
        };
    };
    modified_unix_date: {
        type: NumberConstructor;
        default: number;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    remoteAddress: {
        type: StringConstructor;
        default: string;
    };
    uuid: {
        type: StringConstructor;
        default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
    };
    note: {
        type: StringConstructor;
        default: string;
    };
    mapHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, unknown>>;
export interface DeviceMapping extends Document, ItemTypeFromTypeSchemaFunction<typeof DeviceMappingModule> {
}
export interface DeviceMappingModel extends Model<DeviceMapping> {
}
declare const _default: ReplaceModelReturnType<typeof DeviceMappingModule, DeviceMappingModel>;
export default _default;

import * as uuid from "uuid";
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType, retrieveCurrentUnixTime } from "../helpers";
import { Document, Model } from "mongoose";
export declare function GSTMappingModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: import("mongoose").Types.ObjectIdConstructor;
        auto: true;
    };
    departmentId: {
        type: StringConstructor;
        default: string;
    };
    gstAgency: {
        type: StringConstructor;
        default: string;
    };
    deviceType: {
        type: StringConstructor;
        default: string;
    };
    unitId: {
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
        default: typeof retrieveCurrentUnixTime;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    mapHidden: {
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
}>, unknown>>;
export interface GSTMapping extends Document, ItemTypeFromTypeSchemaFunction<typeof GSTMappingModule> {
}
export interface GSTMappingModel extends Model<GSTMapping> {
}
declare const _default: ReplaceModelReturnType<typeof GSTMappingModule, GSTMappingModel>;
export default _default;

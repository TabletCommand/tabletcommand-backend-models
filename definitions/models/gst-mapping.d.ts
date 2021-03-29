/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function GSTMappingModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any, {}> & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    departmentId: string;
    gstAgency: string;
    deviceType: string;
    unitId: string;
    location: {
        longitude: number;
        latitude: number;
    };
    modified_unix_date: number;
    modified: string;
    active: boolean;
    mapHidden: boolean;
    remoteAddress: string;
    uuid: string;
    note: string;
}, {}> & {
    __methods?: unknown;
}>;
export interface GSTMapping extends ItemTypeFromTypeSchemaFunction<typeof GSTMappingModule> {
}
export interface GSTMappingModel extends ModelTypeFromTypeSchemaFunction<GSTMapping> {
}
declare const _default: ReplaceModelReturnType<typeof GSTMappingModule, GSTMappingModel>;
export default _default;
//# sourceMappingURL=gst-mapping.d.ts.map
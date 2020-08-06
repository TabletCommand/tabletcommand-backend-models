/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function EsriModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    modified_unix_date: number;
    departmentId: {
        type: never;
        ref: never;
        required: never;
    };
}, {}> & {
    __methods?: unknown;
}>;
export interface Esri extends ItemTypeFromTypeSchemaFunction<typeof EsriModule> {
}
export interface EsriModel extends ModelTypeFromTypeSchemaFunction<Esri> {
}
declare const _default: ReplaceModelReturnType<typeof EsriModule, EsriModel>;
export default _default;
//# sourceMappingURL=esri.d.ts.map
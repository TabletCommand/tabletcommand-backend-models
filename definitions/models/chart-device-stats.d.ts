/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function ChartDeviceStatsModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("mongoose").Types.ObjectId;
    dateAt: string;
    departmentId: string;
    items: import("../helpers").MongooseInterface<{
        email: {
            type: StringConstructor;
            default: string;
        };
        dateAt: {
            type: DateConstructor;
            default: Date;
        };
        os: {
            type: StringConstructor;
            default: string;
        };
        osSemVer: {
            type: StringConstructor;
            default: string;
        };
        app: {
            type: StringConstructor;
            default: string;
        };
        appSemVer: {
            type: StringConstructor;
            default: string;
        };
    }>[];
}, {}> & {
    __methods?: unknown;
}>;
export interface ChartDeviceStats extends ItemTypeFromTypeSchemaFunction<typeof ChartDeviceStatsModule> {
}
export interface ChartDeviceStatsModel extends ModelTypeFromTypeSchemaFunction<ChartDeviceStats> {
}
declare const _default: ReplaceModelReturnType<typeof ChartDeviceStatsModule, ChartDeviceStatsModel>;
export default _default;
//# sourceMappingURL=chart-device-stats.d.ts.map
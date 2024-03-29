/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function ChartIncidentModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("mongoose").Types.ObjectId;
    dateAt: string;
    departmentId: string;
    count: number;
    items: import("../helpers").MongooseInterface<{
        item: {
            type: StringConstructor;
            default: string;
        };
        dateAt: {
            type: DateConstructor;
            default: Date;
        };
    }>[];
}, {}> & {
    __methods?: unknown;
}>;
export interface ChartIncident extends ItemTypeFromTypeSchemaFunction<typeof ChartIncidentModule> {
}
export interface ChartIncidentModel extends ModelTypeFromTypeSchemaFunction<ChartIncident> {
}
declare const _default: ReplaceModelReturnType<typeof ChartIncidentModule, ChartIncidentModel>;
export default _default;
//# sourceMappingURL=chart-incident.d.ts.map
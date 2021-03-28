/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function ChartManagedIncidentModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any, {}> & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    date: number;
    departmentId: string;
    count: number;
    items: import("../helpers").MongooseInterface<{
        item: {
            type: StringConstructor;
            default: string;
        };
        date: {
            type: NumberConstructor;
            default: number;
        };
    }>[];
}, {}> & {
    __methods?: unknown;
}>;
export interface ChartManagedIncident extends ItemTypeFromTypeSchemaFunction<typeof ChartManagedIncidentModule> {
}
export interface ChartManagedIncidentModel extends ModelTypeFromTypeSchemaFunction<ChartManagedIncident> {
}
declare const _default: ReplaceModelReturnType<typeof ChartManagedIncidentModule, ChartManagedIncidentModel>;
export default _default;
//# sourceMappingURL=chart-managed-incident.d.ts.map
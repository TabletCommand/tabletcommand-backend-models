/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function ChartManagedIncidentModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("mongoose").Types.ObjectId;
    dateAt: string;
    departmentId: string;
    userId: string;
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
export interface ChartManagedIncident extends ItemTypeFromTypeSchemaFunction<typeof ChartManagedIncidentModule> {
}
export interface ChartManagedIncidentModel extends ModelTypeFromTypeSchemaFunction<ChartManagedIncident> {
}
declare const _default: ReplaceModelReturnType<typeof ChartManagedIncidentModule, ChartManagedIncidentModel>;
export default _default;
//# sourceMappingURL=chart-managed-incident.d.ts.map
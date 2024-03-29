/// <reference types="mongoose" />
import { currentDate, MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function IncidentNotifiedModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("mongoose").Types.ObjectId;
    departmentId: string;
    IncidentNumber: string;
    incidentTypes: string[];
    units: string[];
    unitsByDispatch: import("../helpers").MongooseInterface<{
        UnitID: {
            type: StringConstructor;
            default: string;
        };
        UnitDispatchNumber: {
            type: StringConstructor;
            default: string;
        };
    }>[];
    sent: import("../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
            default: string;
        };
        type: {
            type: StringConstructor;
            default: string;
        };
        date: {
            type: DateConstructor;
            default: typeof currentDate;
        };
    }>[];
    updated: string;
}, {}> & {
    __methods?: unknown;
}>;
export interface IncidentNotified extends ItemTypeFromTypeSchemaFunction<typeof IncidentNotifiedModule> {
}
export interface IncidentNotifiedModel extends ModelTypeFromTypeSchemaFunction<IncidentNotified> {
}
declare const _default: ReplaceModelReturnType<typeof IncidentNotifiedModule, IncidentNotifiedModel>;
export default _default;
//# sourceMappingURL=incident-notified.d.ts.map
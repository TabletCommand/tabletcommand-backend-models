/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function IncidentNotifiedModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any, {}> & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    departmentId: string;
    IncidentNumber: string;
    incidentTypes: string[];
    units: string[];
    date: number;
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
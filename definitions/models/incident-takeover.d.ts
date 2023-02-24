/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function IncidentTakeoverModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("mongoose").Types.ObjectId;
    departmentId: string;
    uuid: string;
    incident_id: string;
    incident_name: string;
    incident_number: string;
    old_owner: string;
    new_owner: string;
    owner: string;
    status: string;
    request_time: number;
    last_response_time: number;
    response_time: number;
}, {}> & {
    __methods?: unknown;
}>;
export interface IncidentTakeover extends ItemTypeFromTypeSchemaFunction<typeof IncidentTakeoverModule> {
}
export interface IncidentTakeoverModel extends ModelTypeFromTypeSchemaFunction<IncidentTakeover> {
}
declare const _default: ReplaceModelReturnType<typeof IncidentTakeoverModule, IncidentTakeoverModel>;
export default _default;
//# sourceMappingURL=incident-takeover.d.ts.map
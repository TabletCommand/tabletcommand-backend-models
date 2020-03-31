/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function ManagedIncidentModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    _id: import("bson").ObjectId;
    departmentId: string;
    userId: string;
    uuid: string;
    start_unix_time: number;
    end_unix_time: number;
    par_unix_time: number;
    watch_unix_start_time: number;
    watch_unix_pause_time: number;
    modified_unix_date: number;
    channel_owner: string;
    channel: string;
    location: string;
    last_view: string;
    preference_location: string;
    address: string;
    name: string;
    cross_streets: string;
    api_incident_number: string;
    CommonPlaceName: string;
    TacticalChannel: string;
    TacticalAltChannel: string;
    active: boolean;
    slave_map_changed: boolean;
    managed: boolean;
    is_closed: boolean;
    source: string;
    CallerNumber: string;
    CommandChannel: string;
    extended: boolean;
    notes: {
        message: string;
        entity_type: number;
        time: number;
        entity_id: number;
    }[];
    history: {
        message: string;
        entity_type: number;
        time: number;
        entity_id: number;
    }[];
}, {}> & {
    __methods?: unknown;
}>;
export interface ManagedIncident extends ItemTypeFromTypeSchemaFunction<typeof ManagedIncidentModule> {
}
export interface ManagedIncidentModel extends ModelTypeFromTypeSchemaFunction<ManagedIncident> {
}
declare const _default: ReplaceModelReturnType<typeof ManagedIncidentModule, ManagedIncidentModel>;
export default _default;
//# sourceMappingURL=managed-incident.d.ts.map
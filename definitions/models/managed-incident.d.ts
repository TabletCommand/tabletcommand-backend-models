/// <reference types="mongoose" />
import { ModelItemType, MongooseModule, UnboxPromise } from "../helpers";
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
}, {}>>;
export default ManagedIncidentModule;
export declare type ManagedIncidentModel = UnboxPromise<ReturnType<typeof ManagedIncidentModule>>;
export declare type ManagedIncident = ModelItemType<ManagedIncidentModel>;
//# sourceMappingURL=managed-incident.d.ts.map
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { MongooseModule } from "../helpers";
import { CADPersonSchemaType, RadioChannelSchemaType, RecordSchemaType, ReportNumberSchemaType, SharedSourceSchemaType, SharedToSchemaType } from "./schema/shared-incident";
import { Model, Types } from "mongoose";
interface HistoryItemType extends Record<string, unknown> {
    message: string;
    entity_type: number;
    time: number;
    entity_id: string;
    user: string;
}
interface AssignmentItemType {
    name: string;
    uuid: string;
    modified_date: string;
    modified_unix_date: number;
    built_in: boolean;
    isMandatory: boolean;
    description: string;
    active: boolean;
    position: number;
}
interface IncidentUnitType extends Record<string, unknown> {
    UnitID: string;
    active: boolean;
    air_time: string;
    assignment: AssignmentItemType;
    AlarmAtDispatch: number;
    api_unit_dispatch_number: string;
    checked: boolean;
    column_position: number;
    group_position: number;
    incident_position: number;
    isSupervisor: boolean;
    is_part_of_group: boolean;
    location_on_map: string;
    modified_date: string;
    modified_unix_date: number;
    note: string;
    personnelOnScene: number;
    Personnel: CADPersonSchemaType[];
    status: string;
    status_unix_date: number;
    time: string;
    warning: number;
    uuid: string;
    parent_uuid: string;
    local_id: string;
}
interface IncidentGroupType {
    location_on_map: string;
    name: string;
    note: string;
    position: number;
    type: number;
    type_text: string;
    units: IncidentUnitType[];
    uuid: string;
    incident_id: string;
}
interface IncidentHazardType {
    location_on_scene: string;
    name: string;
    radius: number;
    time: number;
    uuid: string;
    active: boolean;
    incident_id: string;
    local_id: string;
    note: string;
}
interface IncidentChecklistItemType {
    active: boolean;
    checked: boolean;
    isMandatory: boolean;
    modified_date: string;
    name: string;
    position: number;
    uuid: string;
    checklist_uuid: string;
    description: string;
    id: string;
}
interface IncidentChecklistType {
    active: boolean;
    built_in: boolean;
    isMandatory: boolean;
    items: IncidentChecklistItemType[];
    modified_date: string;
    name: string;
    position: number;
    uuid: string;
    local_id: string;
    id: string;
}
export interface ManagedIncident extends Record<string, unknown> {
    _id: Types.ObjectId;
    id: string;
    departmentId: string;
    userId: string;
    uuid: string;
    start_unix_time: number;
    end_unix_time: number;
    par_unix_time: number;
    watch_unix_start_time: number;
    watch_unix_pause_time: number;
    start_time: string;
    end_time: string;
    modified_date: string;
    modified_unix_date: number;
    modified: Date;
    channel_owner: string;
    channel: string;
    active: boolean;
    address: string;
    api_incident_number: string;
    CallerNumber: string;
    CommandChannel: string;
    CommonPlaceName: string;
    cross_streets: string;
    deviceTime: string;
    extended: boolean;
    FireMap: string;
    is_closed: boolean;
    last_view: string;
    location: string;
    MapPages: string;
    managed: number;
    name: string;
    preference_location: string;
    serverTime: string;
    slave_map_changed: boolean;
    source: string;
    TacticalAltChannel: string;
    TacticalChannel: string;
    checklists: IncidentChecklistType[];
    groups: IncidentGroupType[];
    hazards: IncidentHazardType[];
    history: HistoryItemType[];
    notes: HistoryItemType[];
    units: IncidentUnitType[];
    simulation: boolean;
    rts: boolean;
    local_id: string;
    AgencyID: string;
    isMandatory: boolean;
    radioChannels: RadioChannelSchemaType[];
    record: RecordSchemaType;
    ReportNumber: ReportNumberSchemaType[];
    sharedTo: SharedToSchemaType[];
    sharedSource: SharedSourceSchemaType;
}
export default function ManagedIncidentModule(mongoose: MongooseModule): Promise<Model<ManagedIncident, {}, {}, {}, import("mongoose").Document<unknown, {}, ManagedIncident> & ManagedIncident & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface ManagedIncidentModel extends Model<ManagedIncident> {
}
export {};
//# sourceMappingURL=managed-incident.d.ts.map
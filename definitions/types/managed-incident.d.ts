import { Types } from "mongoose";
import { CADPersonSchemaType, RadioChannelSchemaType, RecordSchemaType, ReportNumberSchemaType, SharedSourceSchemaType, SharedToSchemaType } from "./shared-incident";
export interface HistoryItemType extends Record<string, unknown> {
    entity_id: string;
    entity_type: number;
    message: string;
    time: number;
    user: string;
}
export interface AssignmentItemType {
    active: boolean;
    built_in: boolean;
    description: string;
    isMandatory: boolean;
    modified_date: string;
    modified_unix_date: number;
    name: string;
    position: number;
    uuid: string;
}
export interface IncidentUnitType extends Record<string, unknown> {
    AlarmAtDispatch: number;
    Personnel: CADPersonSchemaType[];
    UnitID: string;
    active: boolean;
    air_time: string;
    api_unit_dispatch_number: string;
    assignment: AssignmentItemType;
    checked: boolean;
    column_position: number;
    group_position: number;
    incident_position: number;
    isSupervisor: boolean;
    is_part_of_group: boolean;
    local_id: string;
    location_on_map: string;
    modified_date: string;
    modified_unix_date: number;
    note: string;
    parent_uuid: string;
    personnelOnScene: number;
    status: string;
    status_unix_date: number;
    time: string;
    uuid: string;
    warning: number;
}
export interface IncidentGroupType {
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
export interface IncidentHazardType {
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
export interface IncidentChecklistItemType {
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
export interface IncidentChecklistType {
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
export interface ManagedIncidentType {
    _id: Types.ObjectId;
    id?: string;
    AgencyID: string;
    CallerNumber: string;
    CommandChannel: string;
    CommonPlaceName: string;
    FireMap: string;
    MapPages: string;
    ReportNumber: ReportNumberSchemaType[];
    TacticalAltChannel: string;
    TacticalChannel: string;
    active: boolean;
    address: string;
    api_incident_number: string;
    channel: string;
    channel_owner: string;
    checklists: IncidentChecklistType[];
    cross_streets: string;
    departmentId: string;
    deviceTime: string;
    end_time: string;
    end_unix_time: number;
    extended: boolean;
    groups: IncidentGroupType[];
    hazards: IncidentHazardType[];
    history: HistoryItemType[];
    isMandatory: boolean;
    is_closed: boolean;
    last_view: string;
    local_id: string;
    location: string;
    managed: number;
    modified: Date;
    modified_date: string;
    modified_unix_date: number;
    name: string;
    notes: HistoryItemType[];
    par_unix_time: number;
    preference_location: string;
    radioChannels: RadioChannelSchemaType[];
    record: RecordSchemaType;
    rts: boolean;
    serverTime: string;
    sharedSource: SharedSourceSchemaType;
    sharedTo: SharedToSchemaType[];
    simulation: boolean;
    slave_map_changed: boolean;
    source: string;
    start_time: string;
    start_unix_time: number;
    units: IncidentUnitType[];
    userId: string;
    uuid: string;
    watch_unix_pause_time: number;
    watch_unix_start_time: number;
}
//# sourceMappingURL=managed-incident.d.ts.map
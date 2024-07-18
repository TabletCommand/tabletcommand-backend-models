import { Types } from "mongoose";
export interface EventUserType {
    username: string;
    email: string;
    radioName: string;
    userId: string;
}
export interface IncidentEventType {
    _id: Types.ObjectId;
    id?: string;
    departmentId: string;
    IncidentNumber: string;
    modified_unix_date: number;
    modified: Date;
    message: string;
    location: {
        longitude: number;
        latitude: number;
    };
    type: string;
    user: EventUserType;
    serverTime: number;
    userTime: number;
    uuid: string;
    ref_uuid: string;
    opts: object;
    archived: boolean;
}
export interface SentItemType {
    name: string;
    type: string;
    date: Date;
}
export interface UnitType {
    UnitID: string;
    UnitDispatchNumber: string;
}
export interface IncidentNotifiedType {
    _id: Types.ObjectId;
    departmentId: string;
    IncidentNumber: string;
    incidentTypes: string[];
    units: string[];
    unitsByDispatch: UnitType[];
    sent: SentItemType[];
    updated: Date;
}
export interface IncidentTakeoverType {
    _id: Types.ObjectId;
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
}
//# sourceMappingURL=incident-events.d.ts.map
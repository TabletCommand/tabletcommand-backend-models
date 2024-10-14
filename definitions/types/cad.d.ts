import { Types } from "mongoose";
import { ColorSchemaType } from "./color";
import { ReportNumberSchemaType } from "./shared-incident";
export interface StationType {
    code: string;
    name: string;
}
export interface CADVehicleType {
    uuid: string;
    departmentId: string;
    modifiedDate: number;
    modified: Date;
    vehicleId: string;
    radioName: string;
    station: StationType;
    capability: string;
    mapHidden: boolean;
    locationToCAD: boolean;
    backupDate: Date;
}
export interface DestinationType {
    address: string;
    name: string;
}
export interface CADVehicleStatusType {
    assignableByUser: boolean;
    backupDate: Date;
    capability: string;
    changedAt: Date;
    departmentId: string;
    destination: DestinationType;
    incidentNumber: string;
    locationCurrent: string;
    locationDestination: string;
    modified: Date;
    modifiedDate: number;
    options: CADStatusOptionSelectedSchemaType[];
    owner: string;
    ownerId: string;
    radioName: string;
    requestStatus: number;
    requestTime: number;
    responseTime: number;
    status: string;
    statusCode: string;
    uuid: string;
    vehicleId: string;
}
export interface CADVehicleStatusHistoryType {
    departmentId: string;
    e: string;
    incidentNumber: string;
    locationCurrent: string;
    locationDestination: string;
    options: CADStatusOptionSelectedSchemaType[];
    radioName: string;
    requestDelay: number;
    requested: Date;
    requestedAt: number;
    requestedBy: string;
    status: string;
    statusCode: string;
    vehicleId: string;
}
export interface StatusOptionValueType extends Record<string, unknown> {
    favorite: boolean;
    isDefault: boolean;
    latitude: number;
    longitude: number;
    name: string;
    position: number;
    time: number;
    type: string;
    value: string;
    visible: boolean;
}
export interface StatusOptionType {
    name: string;
    position: number;
    visible: boolean;
    cadKey: string;
    cadValues: StatusOptionValueType[];
}
export interface CADStatusType {
    backupDate: Date;
    code: string;
    codeDisplay: string;
    color: ColorSchemaType;
    departmentId: string;
    modified: Date;
    modifiedDate: number;
    name: string;
    normalized: string;
    options: StatusOptionType[];
    roaming: boolean;
    selfAssignable: boolean;
    status: string;
    statusId: number;
    uuid: string;
}
export interface CADStatusOptionSelectedSchemaType {
    name: string;
    type: string;
    value: string;
    key: string;
}
export interface ToStatusIdType {
    statusId: number;
    userEnabled: boolean;
    position: number;
}
export interface CADStatusMapType {
    departmentId: string;
    modifiedDate: number;
    modified: Date;
    fromStatusId: number;
    toStatusIds: ToStatusIdType[];
    backupDate: Date;
}
export interface SimPriorCommentType {
    Comment?: string;
    CommentSource?: string;
    CommentDateTime?: string;
}
export interface SimPriorIncidentType {
    IncidentNumber: string;
    IncidentDateTime: string;
    Problem: string;
    Address: string;
    Suite: string;
    Comment: SimPriorCommentType[];
}
export interface SimRadioChannelType {
    name: string;
    channel: string;
}
export interface SimCommentType {
    comment: string;
    source: string;
}
export interface SimUnitType {
    alarmLevelAtDispatch: string;
    units: string[];
}
export interface SequenceType {
    _id: Types.ObjectId;
    alarm: string;
    comments: SimCommentType[];
    sequenceId: number;
    title: string;
    unitsConfig: SimUnitType;
}
export interface CADSimulationType {
    CrossStreet1: string;
    active: boolean;
    city: string;
    closeDelay: number;
    commandChannel: string;
    departmentId: string;
    firemap: string;
    friendlyId: string;
    incidentType: string;
    lat: string;
    locationComment: string;
    lon: string;
    mapPages: string;
    modified: Date;
    modifiedDate: number;
    notes: string;
    notify: boolean;
    priorIncidents: SimPriorIncidentType[];
    radioChannels: SimRadioChannelType[];
    randomPriorIncidents: boolean;
    randomStaffing: boolean;
    rts: boolean;
    sendStatus: boolean;
    sequences: SequenceType[];
    simulation: boolean;
    sortId: number;
    state: string;
    streetName: string;
    suite: string;
    tacticalChannel: string;
    tags: string[];
    title: string;
    uuid: string;
}
export interface CADIncidentStreamType {
    _id: Types.ObjectId;
    createdAt: Date;
    departmentId: string;
    incidentNumber: string;
    payload: object;
    tag: string;
    uuid: string;
}
export interface CADIncidentBlockType {
    _id: Types.ObjectId;
    AgencyIncidentCallTypeDescription: string;
    ClosedDateTime: string;
    EntryDateTime: string;
    IncidentNumber: string;
    ReportNumber: ReportNumberSchemaType[];
    departmentId: string;
    source: string;
}
//# sourceMappingURL=cad.d.ts.map
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
    uuid: string;
    departmentId: string;
    vehicleId: string;
    radioName: string;
    requestTime: number;
    responseTime: number;
    changedAt: Date;
    status: string;
    statusCode: string;
    modifiedDate: number;
    modified: Date;
    requestStatus: number;
    owner: string;
    ownerId: string;
    incidentNumber: string;
    options: CADStatusOptionSelectedSchemaType[];
    capability: string;
    locationCurrent: string;
    locationDestination: string;
    destination: DestinationType;
    assignableByUser: boolean;
    backupDate: Date;
}
export interface CADVehicleStatusHistoryType {
    departmentId: string;
    vehicleId: string;
    radioName: string;
    status: string;
    statusCode: string;
    requestedAt: number;
    requested: Date;
    requestDelay: number;
    requestedBy: string;
    incidentNumber: string;
    options: CADStatusOptionSelectedSchemaType[];
    e: string;
    locationCurrent: string;
    locationDestination: string;
}
export interface StatusOptionValueType {
    name: string;
    type: string;
    visible: boolean;
    value: string;
    favorite: boolean;
    position: number;
    isDefault: boolean;
    latitude: number;
    longitude: number;
    time: number;
}
export interface StatusOptionType {
    name: string;
    position: number;
    visible: boolean;
    cadKey: string;
    cadValues: StatusOptionValueType[];
}
export interface CADStatusType {
    uuid: string;
    departmentId: string;
    modifiedDate: number;
    modified: Date;
    statusId: number;
    code: string;
    codeDisplay: string;
    status: string;
    name: string;
    normalized: string;
    selfAssignable: boolean;
    roaming: boolean;
    options: StatusOptionValueType;
    color: ColorSchemaType;
    backupDate: Date;
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
    title: string;
    alarm: string;
    sequenceId: number;
    unitsConfig: SimUnitType;
    comments: SimCommentType[];
}
export interface CADSimulationType {
    uuid: string;
    departmentId: string;
    modifiedDate: number;
    modified: Date;
    active: boolean;
    friendlyId: string;
    title: string;
    notes: string;
    simulation: boolean;
    notify: boolean;
    rts: boolean;
    tags: string[];
    incidentType: string;
    streetName: string;
    locationComment: string;
    suite: string;
    CrossStreet1: string;
    city: string;
    state: string;
    lat: string;
    lon: string;
    firemap: string;
    mapPages: string;
    tacticalChannel: string;
    commandChannel: string;
    radioChannels: SimRadioChannelType[];
    closeDelay: number;
    priorIncidents: SimPriorIncidentType[];
    randomPriorIncidents: boolean;
    randomStaffing: boolean;
    sequences: SequenceType[];
    sortId: number;
    sendStatus: boolean;
}
export interface CADIncidentStreamType {
    _id: Types.ObjectId;
    id?: string;
    uuid: string;
    tag: string;
    departmentId: string;
    incidentNumber: string;
    createdAt: Date;
    payload: object;
}
export interface CADIncidentBlockType {
    _id: Types.ObjectId;
    id?: string;
    departmentId: string;
    source: string;
    IncidentNumber: string;
    AgencyIncidentCallTypeDescription: string;
    EntryDateTime: string;
    ClosedDateTime: string;
    ReportNumber: ReportNumberSchemaType[];
}
//# sourceMappingURL=cad.d.ts.map
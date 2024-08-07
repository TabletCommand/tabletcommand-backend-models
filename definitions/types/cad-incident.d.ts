import { Types } from "mongoose";
import { IncidentEventType } from "./incident-events";
import { CADPersonSchemaType, ReportNumberSchemaType, RadioChannelSchemaType, SharedToSchemaType, SharedSourceSchemaType, RecordSchemaType } from "./shared-incident";
export interface CADCommentOptsTypes {
    type: string;
    item: string;
}
export interface CADCommentType extends Record<string, unknown> {
    Comment: string;
    CommentSource: string;
    CommentDateTime: string;
    CommentConfidential: boolean;
    CommentOpts: CADCommentOptsTypes;
}
export interface CADUnitType extends Record<string, unknown> {
    UnitID: string;
    UnitDispatchNumber: string;
    AlarmAtDispatch: string;
    TimeDispatched: string;
    TimeEnroute: string;
    TimeArrived: string;
    TimeStaged: string;
    TimeCleared: string;
    TimeAtHospital: string;
    TimePatient: string;
    TimeTransport: string;
    TimeTransporting: string;
    PersonnelCount: number;
    Personnel: CADPersonSchemaType[];
    uuid: string;
}
export interface APNNotificationTypeType {
    name: string;
    value: string;
}
export interface CADPriorIncidentType {
    Address: string;
    Comment: CADCommentType[];
    IncidentDateTime: string;
    IncidentNumber: string;
    Jurisdiction: string;
    Problem: string;
    Suite: string;
}
export interface CADIncidentSchemaType {
    _id: Types.ObjectId;
    id?: string;
    uuid: string;
    departmentId: string;
    AgencyID: string;
    IncidentNumber: string;
    TransactionID: string;
    AgencyIncidentCallTypeDescription: string;
    AgencyIncidentCallType: string;
    AgencyIncidentCallSubTypeDescription: string;
    AgencyIncidentCallSubType: string;
    AgencyIncidentPriorityDescription: string;
    PulsePointIncidentCallType: string;
    PulsePointDeterminantCode: string;
    AlarmLevel: string;
    CommandName: string;
    FireMap: string;
    TBMap: string;
    MapPages: string;
    TacticalChannel: string;
    TacticalAltChannel: string;
    CommandChannel: string;
    EntryDateTime: string;
    ClosedDateTime: string;
    CallReceivedDateTime: string;
    DispatchDateTime: string;
    IncidentLastUpdate: string;
    EnrouteDateTime: string;
    OnSceneDateTime: string;
    modified_date: string;
    modified_unix_date: number;
    modified: Date;
    start_unix_date: number;
    closed_unix_date: number;
    queued_at: number;
    scheduled_at: number;
    ignored: boolean;
    expiration_date: Date;
    StreetName: string;
    StreetSuffix: string;
    Predirectional: string;
    Postdirectional: string;
    CityOrLocality: string;
    StateOrProvince: string;
    StateOfProvince: string;
    CommonPlaceName: string;
    CrossStreet1: string;
    CrossStreet2: string;
    StreetNumber: string;
    Building: string;
    Floor: string;
    Suite: string;
    City: string;
    County: string;
    PostalCode: string;
    CrossStreetName: string;
    LocationComment: string;
    full_address: string;
    address: string;
    cross_streets: string;
    PriorIncidentChanged: boolean;
    PriorIncident: CADPriorIncidentType[];
    CallerNumber: string;
    ReportNumber: ReportNumberSchemaType[];
    radioChannels: RadioChannelSchemaType[];
    Latitude: number;
    Longitude: number;
    Comment: CADCommentType[];
    units: CADUnitType[];
    events: IncidentEventType[];
    preference_location: string;
    simulation: boolean;
    simulationId: string;
    simulationSequences: number[];
    notify: boolean;
    rts: boolean;
    notificationType: APNNotificationTypeType[];
    sharedTo: SharedToSchemaType[];
    sharedSource: SharedSourceSchemaType;
    record: RecordSchemaType;
}
//# sourceMappingURL=cad-incident.d.ts.map
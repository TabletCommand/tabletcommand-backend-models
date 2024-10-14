import { Types } from "mongoose";
import { IncidentEventType } from "./incident-events";
import { CADPersonSchemaType, RadioChannelSchemaType, RecordSchemaType, ReportNumberSchemaType, SharedSourceSchemaType, SharedToSchemaType } from "./shared-incident";
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
    AgencyID: string;
    AgencyIncidentCallSubType: string;
    AgencyIncidentCallSubTypeDescription: string;
    AgencyIncidentCallType: string;
    AgencyIncidentCallTypeDescription: string;
    AgencyIncidentPriorityDescription: string;
    AlarmLevel: string;
    Building: string;
    CallReceivedDateTime: string;
    CallerNumber: string;
    City: string;
    CityOrLocality: string;
    ClosedDateTime: string;
    CommandChannel: string;
    CommandName: string;
    Comment: CADCommentType[];
    CommonPlaceName: string;
    County: string;
    CrossStreet1: string;
    CrossStreet2: string;
    CrossStreetName: string;
    DispatchDateTime: string;
    EnrouteDateTime: string;
    EntryDateTime: string;
    FireMap: string;
    Floor: string;
    IncidentLastUpdate: string;
    IncidentNumber: string;
    Latitude: number;
    LocationComment: string;
    Longitude: number;
    MapPages: string;
    OnSceneDateTime: string;
    PostalCode: string;
    Postdirectional: string;
    Predirectional: string;
    PriorIncident: CADPriorIncidentType[];
    PriorIncidentChanged: boolean;
    PulsePointDeterminantCode: string;
    PulsePointIncidentCallType: string;
    ReportNumber: ReportNumberSchemaType[];
    StateOfProvince: string;
    StateOrProvince: string;
    StreetName: string;
    StreetNumber: string;
    StreetSuffix: string;
    Suite: string;
    TBMap: string;
    TacticalAltChannel: string;
    TacticalChannel: string;
    TransactionID?: string;
    address: string;
    closed_unix_date: number;
    cross_streets: string;
    departmentId: string;
    events: IncidentEventType[];
    expiration_date: Date;
    full_address: string;
    ignored: boolean;
    modified: Date;
    modified_date: string;
    modified_unix_date: number;
    notificationType: APNNotificationTypeType[];
    notify: boolean;
    preference_location: string;
    queued_at: number;
    radioChannels: RadioChannelSchemaType[];
    record: RecordSchemaType;
    rts: boolean;
    scheduled_at: number;
    sharedSource: SharedSourceSchemaType;
    sharedTo: SharedToSchemaType[];
    simulation: boolean;
    simulationId: string;
    simulationSequences: number[];
    start_unix_date: number;
    units: CADUnitType[];
    uuid: string;
}
//# sourceMappingURL=cad-incident.d.ts.map
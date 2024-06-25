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
import { MongooseModule } from "../../helpers";
import { IncidentEvent } from "../incident-event";
import { CADPersonSchemaType, RadioChannelSchemaType, RecordSchemaType, ReportNumberSchemaType, SharedSourceSchemaType, SharedToSchemaType } from "./shared-incident";
import { Types } from "mongoose";
interface CADCommentOptsTypes {
    type: string;
    item: string;
}
interface CADCommentType extends Record<string, unknown> {
    Comment: string;
    CommentSource: string;
    CommentDateTime: string;
    CommentConfidential: boolean;
    CommentOpts: CADCommentOptsTypes;
}
interface CADUnitType extends Record<string, unknown> {
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
interface APNNotificationTypeType {
    name: string;
    value: string;
}
interface CADPriorIncidentType {
    Address: string;
    Comment: CADCommentType[];
    IncidentDateTime: string;
    IncidentNumber: string;
    Jurisdiction: string;
    Problem: string;
    Suite: string;
}
export interface CADIncidentSchemaType extends Record<string, unknown> {
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
    events: IncidentEvent[];
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
export declare function CADIncidentSchema(mongoose: MongooseModule): import("mongoose").Schema<CADIncidentSchemaType, import("mongoose").Model<CADIncidentSchemaType, any, any, any, import("mongoose").Document<unknown, any, CADIncidentSchemaType> & CADIncidentSchemaType & Required<{
    _id: Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CADIncidentSchemaType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<CADIncidentSchemaType>> & import("mongoose").FlatRecord<CADIncidentSchemaType> & Required<{
    _id: Types.ObjectId;
}>>;
export {};
//# sourceMappingURL=cad-incident.d.ts.map
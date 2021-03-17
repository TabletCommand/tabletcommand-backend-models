/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function CADIncidentModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectId;
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
    modified: string;
    start_unix_date: number;
    closed_unix_date: number;
    queued_at: number;
    scheduled_at: number;
    blacklisted: boolean;
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
    PriorIncident: import("../helpers").MongooseInterface<{
        Address: {
            type: StringConstructor;
        };
        Comment: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    Comment: {
                        type: StringConstructor;
                    };
                    CommentSource: {
                        type: StringConstructor;
                    };
                    CommentDateTime: {
                        type: StringConstructor;
                    };
                    CommentConfidential: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>;
                _methods: unknown;
            })[];
        };
        IncidentDateTime: {
            type: StringConstructor;
        };
        IncidentNumber: {
            type: StringConstructor;
        };
        Jurisdiction: {
            type: StringConstructor;
        };
        Problem: {
            type: StringConstructor;
        };
        Suite: {
            type: StringConstructor;
        };
    }>[];
    CallerNumber: string;
    tag: string;
    Latitude: string;
    Longitude: string;
    Comment: import("../helpers").MongooseInterface<{
        Comment: {
            type: StringConstructor;
        };
        CommentSource: {
            type: StringConstructor;
        };
        CommentDateTime: {
            type: StringConstructor;
        };
        CommentConfidential: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>[];
    units: import("../helpers").MongooseInterface<{
        UnitID: {
            type: StringConstructor;
            required: boolean;
        };
        UnitDispatchNumber: {
            type: StringConstructor;
            required: boolean;
        };
        AlarmAtDispatch: {
            type: StringConstructor;
        };
        TimeDispatched: {
            type: StringConstructor;
        };
        TimeEnroute: {
            type: StringConstructor;
        };
        TimeArrived: {
            type: StringConstructor;
        };
        TimeStaged: {
            type: StringConstructor;
        };
        TimeCleared: {
            type: StringConstructor;
        };
        TimeAtHospital: {
            type: StringConstructor;
        };
        TimePatient: {
            type: StringConstructor;
        };
        TimeTransport: {
            type: StringConstructor;
        };
        TimeTransporting: {
            type: StringConstructor;
        };
        PersonnelCount: {
            type: NumberConstructor;
        };
        Personnel: (import("mongoose").Schema<any> & {
            _interface: import("../helpers").MongooseInterface<{
                PersonnelID: {
                    type: StringConstructor;
                };
                PersonnelName: {
                    type: StringConstructor;
                };
                PersonnelRank: {
                    type: StringConstructor;
                };
                PersonnelWorkCode: {
                    type: StringConstructor;
                };
                PersonnelNote: {
                    type: StringConstructor;
                };
            }>;
            _methods: unknown;
        })[];
    }>[];
    preference_location: string;
    simulation: boolean;
    notify: boolean;
    rts: boolean;
    admin_note: string;
    Interface: string;
    InterfaceVersion: string;
    CADSimulator: string;
    notificationType: import("../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
        };
        value: {
            type: StringConstructor;
        };
    }>[];
    notifiedUnits: string[];
    AgencyDeterminantCode: string;
    AgencyIncidentCategory: string;
    CFMap: string;
    CallSource: string;
    CaseNumber: string;
    CrossRefDataOwnerAgyID1: string;
    CrossRefDataSubmitterAgyID1: string;
    CrossRefEventCategory1: string;
    CrossRefEventNum1: string;
    EventLevel: string;
    EventNumber: string;
    FirstDueStation: string;
    MedicalAgencyIncidentType: string;
    MedicalEventCode: string;
    PopulationDensity: string;
    Priority: string;
    WorkstationID: string;
    LatitudeDegree: string;
    LatitudeMinute: string;
    LatitudeSecond: string;
    LongitudeDegree: string;
    LongitudeMinute: string;
    LongitudeSecond: string;
    Location: string;
    LocationType: string;
    OrigLocation: string;
    Jurisdiction: string;
}, {}> & {
    __methods?: unknown;
}>;
export interface CADIncident extends ItemTypeFromTypeSchemaFunction<typeof CADIncidentModule> {
}
export interface CADIncidentModel extends ModelTypeFromTypeSchemaFunction<CADIncident> {
}
declare const _default: ReplaceModelReturnType<typeof CADIncidentModule, CADIncidentModel>;
export default _default;
//# sourceMappingURL=cad-incident.d.ts.map
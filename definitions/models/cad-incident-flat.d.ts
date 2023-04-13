/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function CADIncidentFlatModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("mongoose").Types.ObjectId;
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
    ignored: boolean;
    expiration_date: string;
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
    ReportNumber: import("../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
            default: string;
        };
        number: {
            type: StringConstructor;
            default: string;
        };
    }>[];
    radioChannels: import("../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
            default: string;
        };
        channel: {
            type: StringConstructor;
            default: string;
        };
    }>[];
    Latitude: number;
    Longitude: number;
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
        uuid: {
            type: StringConstructor;
            default: (<T extends ArrayLike<number>>(options: import("uuid").V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: import("uuid").V4Options | undefined) => string);
        };
    }>[];
    events: import("../helpers").MongooseInterface<{
        _id: {
            type: import("mongoose").Types.ObjectIdConstructor;
            auto: boolean;
        };
        departmentId: {
            type: StringConstructor;
            default: string;
            required: boolean;
            index: true;
        };
        IncidentNumber: {
            type: StringConstructor;
            default: string;
            required: boolean;
            index: true;
        };
        modified_unix_date: {
            type: NumberConstructor;
            default: typeof import("../helpers").retrieveCurrentUnixTime;
        };
        modified: {
            type: DateConstructor;
            default: typeof import("../helpers").currentDate;
        };
        message: {
            type: StringConstructor;
            default: string;
        };
        location: {
            longitude: {
                type: NumberConstructor;
                default: number;
            };
            latitude: {
                type: NumberConstructor;
                default: number;
            };
        };
        type: {
            type: StringConstructor;
            default: string;
        };
        user: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    username: {
                        type: StringConstructor;
                        default: string;
                    };
                    email: {
                        type: StringConstructor;
                        default: string;
                    };
                    radioName: {
                        type: StringConstructor;
                        default: string;
                    };
                    userId: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            };
            default: {};
        };
        serverTime: {
            type: NumberConstructor;
            default: typeof import("../helpers").retrieveCurrentUnixTime;
            min: number;
        };
        userTime: {
            type: NumberConstructor;
            required: boolean;
            default: number;
            min: number;
        };
        uuid: {
            type: StringConstructor;
            require: boolean;
        };
        ref_uuid: {
            type: StringConstructor;
            default: string;
        };
        opts: {
            type: ObjectConstructor;
            default: {};
        };
        archived: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>[];
    preference_location: string;
    simulation: boolean;
    notify: boolean;
    rts: boolean;
    notificationType: import("../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
        };
        value: {
            type: StringConstructor;
        };
    }>[];
    sharedTo: import("../helpers").MongooseInterface<{
        departmentId: {
            type: StringConstructor;
            default: string;
        };
        startAt: {
            type: DateConstructor;
            default: typeof import("../helpers").currentDate;
        };
        expireAt: {
            type: DateConstructor;
            default: typeof import("../helpers").currentDate;
        };
        reasons: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    name: {
                        type: StringConstructor;
                        default: string;
                    };
                    date: {
                        type: DateConstructor;
                        default: typeof import("../helpers").currentDate;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
    }>[];
    record: import("../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
            default: string;
        };
        value: {
            type: StringConstructor;
            default: string;
        };
    }>;
}, {}> & {
    __methods?: unknown;
}>;
export interface CADIncidentFlat extends ItemTypeFromTypeSchemaFunction<typeof CADIncidentFlatModule> {
}
export interface CADIncidentFlatModel extends ModelTypeFromTypeSchemaFunction<CADIncidentFlat> {
}
declare const _default: ReplaceModelReturnType<typeof CADIncidentFlatModule, CADIncidentFlatModel>;
export default _default;
//# sourceMappingURL=cad-incident-flat.d.ts.map
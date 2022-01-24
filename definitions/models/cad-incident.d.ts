/// <reference types="mongoose" />
import { currentDate, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
import * as uuid from "uuid";
export declare function CADIncidentSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../helpers").MongooseInterface<{
        _id: {
            type: import("mongoose").Types.ObjectIdConstructor;
            auto: boolean;
        };
        uuid: {
            type: StringConstructor;
            default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
        };
        departmentId: {
            type: StringConstructor;
            default: string;
            required: boolean;
            index: true;
        };
        AgencyID: {
            type: StringConstructor;
            required: boolean;
        };
        IncidentNumber: {
            type: StringConstructor;
            required: boolean;
        };
        TransactionID: {
            type: StringConstructor;
            required: boolean;
        };
        AgencyIncidentCallTypeDescription: {
            type: StringConstructor;
        };
        AgencyIncidentCallType: {
            type: StringConstructor;
        };
        AgencyIncidentCallSubTypeDescription: {
            type: StringConstructor;
        };
        AgencyIncidentCallSubType: {
            type: StringConstructor;
        };
        AgencyIncidentPriorityDescription: {
            type: StringConstructor;
        };
        PulsePointIncidentCallType: {
            type: StringConstructor;
        };
        PulsePointDeterminantCode: {
            type: StringConstructor;
        };
        AlarmLevel: {
            type: StringConstructor;
        };
        CommandName: {
            type: StringConstructor;
        };
        FireMap: {
            type: StringConstructor;
        };
        TBMap: {
            type: StringConstructor;
        };
        MapPages: {
            type: StringConstructor;
        };
        TacticalChannel: {
            type: StringConstructor;
        };
        TacticalAltChannel: {
            type: StringConstructor;
        };
        CommandChannel: {
            type: StringConstructor;
        };
        EntryDateTime: {
            type: StringConstructor;
        };
        ClosedDateTime: {
            type: StringConstructor;
        };
        CallReceivedDateTime: {
            type: StringConstructor;
        };
        DispatchDateTime: {
            type: StringConstructor;
        };
        IncidentLastUpdate: {
            type: StringConstructor;
        };
        EnrouteDateTime: {
            type: StringConstructor;
        };
        OnSceneDateTime: {
            type: StringConstructor;
        };
        modified_date: {
            type: StringConstructor;
        };
        modified_unix_date: {
            type: NumberConstructor;
        };
        modified: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        start_unix_date: {
            type: NumberConstructor;
        };
        closed_unix_date: {
            type: NumberConstructor;
        };
        queued_at: {
            type: NumberConstructor;
        };
        scheduled_at: {
            type: NumberConstructor;
        };
        blacklisted: {
            type: BooleanConstructor;
            default: boolean;
        };
        expiration_date: {
            type: DateConstructor;
            default: null;
        };
        StreetName: {
            type: StringConstructor;
        };
        StreetSuffix: {
            type: StringConstructor;
        };
        Predirectional: {
            type: StringConstructor;
        };
        Postdirectional: {
            type: StringConstructor;
        };
        CityOrLocality: {
            type: StringConstructor;
        };
        StateOrProvince: {
            type: StringConstructor;
        };
        StateOfProvince: {
            type: StringConstructor;
        };
        CommonPlaceName: {
            type: StringConstructor;
        };
        CrossStreet1: {
            type: StringConstructor;
        };
        CrossStreet2: {
            type: StringConstructor;
        };
        StreetNumber: {
            type: StringConstructor;
        };
        Building: {
            type: StringConstructor;
        };
        Floor: {
            type: StringConstructor;
        };
        Suite: {
            type: StringConstructor;
        };
        City: {
            type: StringConstructor;
        };
        County: {
            type: StringConstructor;
        };
        PostalCode: {
            type: StringConstructor;
        };
        CrossStreetName: {
            type: StringConstructor;
        };
        LocationComment: {
            type: StringConstructor;
        };
        full_address: {
            type: StringConstructor;
        };
        address: {
            type: StringConstructor;
        };
        cross_streets: {
            type: StringConstructor;
        };
        PriorIncidentChanged: {
            type: BooleanConstructor;
        };
        PriorIncident: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
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
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        CallerNumber: {
            type: StringConstructor;
            default: string;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
        Latitude: {
            type: StringConstructor;
        };
        Longitude: {
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
            default: never[];
        };
        units: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
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
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        events: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
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
                        default: typeof currentDate;
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
                    opts: {
                        type: ObjectConstructor;
                        default: {};
                    };
                    archived: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        preference_location: {
            type: StringConstructor;
        };
        simulation: {
            type: BooleanConstructor;
            default: boolean;
        };
        notify: {
            type: BooleanConstructor;
            default: boolean;
        };
        rts: {
            type: BooleanConstructor;
            default: boolean;
        };
        CADSimulator: {
            type: StringConstructor;
        };
        notificationType: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    name: {
                        type: StringConstructor;
                    };
                    value: {
                        type: StringConstructor;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        notifiedUnits: {
            type: StringConstructor[];
            default: never[];
        };
    }>;
    _methods: unknown;
};
export declare function CADIncidentModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectID;
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
            default: typeof currentDate;
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
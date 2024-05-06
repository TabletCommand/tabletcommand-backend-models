/// <reference types="mongoose" />
import { currentDate, MongooseModule } from "../../helpers";
import * as uuid from "uuid";
export declare function CADIncidentSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../../helpers").MongooseInterface<{
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
            default: string;
        };
        IncidentNumber: {
            type: StringConstructor;
            required: boolean;
        };
        TransactionID: {
            type: StringConstructor;
            default: string;
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
        ignored: {
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
                _interface: import("../../helpers").MongooseInterface<{
                    Address: {
                        type: StringConstructor;
                    };
                    Comment: {
                        type: (import("mongoose").Schema<any> & {
                            _interface: import("../../helpers").MongooseInterface<{
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
                                CommentOpts: {
                                    type: import("mongoose").Schema<any> & {
                                        _interface: import("../../helpers").MongooseInterface<{
                                            type: {
                                                type: StringConstructor;
                                            };
                                            item: {
                                                type: StringConstructor;
                                            };
                                        }>;
                                        _methods: unknown;
                                    };
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
        ReportNumber: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../../helpers").MongooseInterface<{
                    name: {
                        type: StringConstructor;
                        default: string;
                    };
                    number: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        radioChannels: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../../helpers").MongooseInterface<{
                    name: {
                        type: StringConstructor;
                        default: string;
                    };
                    channel: {
                        type: StringConstructor;
                        default: string;
                    };
                    url: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        Latitude: {
            type: NumberConstructor;
        };
        Longitude: {
            type: NumberConstructor;
        };
        Comment: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../../helpers").MongooseInterface<{
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
                    CommentOpts: {
                        type: import("mongoose").Schema<any> & {
                            _interface: import("../../helpers").MongooseInterface<{
                                type: {
                                    type: StringConstructor;
                                };
                                item: {
                                    type: StringConstructor;
                                };
                            }>;
                            _methods: unknown;
                        };
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        units: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../../helpers").MongooseInterface<{
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
                        _interface: import("../../helpers").MongooseInterface<{
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
                        default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        events: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../../helpers").MongooseInterface<{
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
                        default: typeof import("../../helpers").retrieveCurrentUnixTime;
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
                            _interface: import("../../helpers").MongooseInterface<{
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
                        default: typeof import("../../helpers").retrieveCurrentUnixTime;
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
        simulationId: {
            type: StringConstructor;
            default: string;
        };
        simulationSequences: {
            type: NumberConstructor[];
            default: never[];
        };
        notify: {
            type: BooleanConstructor;
            default: boolean;
        };
        rts: {
            type: BooleanConstructor;
            default: boolean;
        };
        notificationType: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../../helpers").MongooseInterface<{
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
        sharedTo: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../../helpers").MongooseInterface<{
                    departmentId: {
                        type: StringConstructor;
                        default: string;
                    };
                    name: {
                        type: StringConstructor;
                        default: string;
                    };
                    startAt: {
                        type: DateConstructor;
                        default: typeof currentDate;
                    };
                    expireAt: {
                        type: DateConstructor;
                        default: typeof currentDate;
                    };
                    active: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    reasons: {
                        type: (import("mongoose").Schema<any> & {
                            _interface: import("../../helpers").MongooseInterface<{
                                name: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                date: {
                                    type: DateConstructor;
                                    default: typeof currentDate;
                                };
                            }>;
                            _methods: unknown;
                        })[];
                        default: never[];
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        sharedSource: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../../helpers").MongooseInterface<{
                    name: {
                        type: StringConstructor;
                        default: string;
                    };
                    isExternal: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    startAt: {
                        type: DateConstructor;
                    };
                    expireAt: {
                        type: DateConstructor;
                    };
                    reasons: {
                        type: (import("mongoose").Schema<any> & {
                            _interface: import("../../helpers").MongooseInterface<{
                                name: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                date: {
                                    type: DateConstructor;
                                    default: typeof currentDate;
                                };
                            }>;
                            _methods: unknown;
                        })[];
                        default: never[];
                    };
                }>;
                _methods: unknown;
            };
        };
        record: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../../helpers").MongooseInterface<{
                    name: {
                        type: StringConstructor;
                        default: string;
                    };
                    value: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            };
        };
    }>;
    _methods: unknown;
};
//# sourceMappingURL=cad-incident.d.ts.map
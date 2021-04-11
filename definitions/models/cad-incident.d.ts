import { MongooseModule, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
import { Document, Model } from "mongoose";
import * as uuid from "uuid";
export declare function CADIncidentModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: import("mongoose").Types.ObjectIdConstructor;
        auto: true;
    };
    uuid: {
        type: StringConstructor;
        default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
    };
    departmentId: {
        type: StringConstructor;
        default: string;
        required: true;
        index: true;
    };
    AgencyID: {
        type: StringConstructor;
        required: true;
    };
    IncidentNumber: {
        type: StringConstructor;
        required: true;
    };
    TransactionID: {
        type: StringConstructor;
        required: true;
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
        type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            Address: {
                type: StringConstructor;
            };
            Comment: {
                type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
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
                }>, unknown>)[];
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
        }>, unknown>)[];
    };
    CallerNumber: {
        type: StringConstructor;
    };
    tag: {
        type: StringConstructor;
    };
    Latitude: {
        type: StringConstructor;
    };
    Longitude: {
        type: StringConstructor;
    };
    Comment: {
        type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
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
        }>, unknown>)[];
    };
    units: {
        type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            UnitID: {
                type: StringConstructor;
                required: true;
            };
            UnitDispatchNumber: {
                type: StringConstructor;
                required: true;
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
            Personnel: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
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
            }>, unknown>)[];
        }>, unknown>)[];
    };
    preference_location: {
        type: StringConstructor;
    };
    admin_note: {
        type: StringConstructor;
    };
    Interface: {
        type: StringConstructor;
    };
    InterfaceVersion: {
        type: StringConstructor;
    };
    CADSimulator: {
        type: StringConstructor;
    };
    notificationType: {
        type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            name: {
                type: StringConstructor;
            };
            value: {
                type: StringConstructor;
            };
        }>, unknown>)[];
    };
    notifiedUnits: {
        type: StringConstructor[];
    };
    ReportNumber: {
        type: StringConstructor[];
    };
    AgencyDeterminantCode: {
        type: StringConstructor;
    };
    AgencyIncidentCategory: {
        type: StringConstructor;
    };
    CFMap: {
        type: StringConstructor;
    };
    CallSource: {
        type: StringConstructor;
    };
    CaseNumber: {
        type: StringConstructor;
    };
    CrossRefDataOwnerAgyID1: {
        type: StringConstructor;
    };
    CrossRefDataSubmitterAgyID1: {
        type: StringConstructor;
    };
    CrossRefEventCategory1: {
        type: StringConstructor;
    };
    CrossRefEventNum1: {
        type: StringConstructor;
    };
    EventLevel: {
        type: StringConstructor;
    };
    EventNumber: {
        type: StringConstructor;
    };
    FirstDueStation: {
        type: StringConstructor;
    };
    MedicalAgencyIncidentType: {
        type: StringConstructor;
    };
    MedicalEventCode: {
        type: StringConstructor;
    };
    PopulationDensity: {
        type: StringConstructor;
    };
    Priority: {
        type: StringConstructor;
    };
    WorkstationID: {
        type: StringConstructor;
    };
    LatitudeDegree: {
        type: StringConstructor;
    };
    LatitudeMinute: {
        type: StringConstructor;
    };
    LatitudeSecond: {
        type: StringConstructor;
    };
    LongitudeDegree: {
        type: StringConstructor;
    };
    LongitudeMinute: {
        type: StringConstructor;
    };
    LongitudeSecond: {
        type: StringConstructor;
    };
    Location: {
        type: StringConstructor;
    };
    LocationType: {
        type: StringConstructor;
    };
    OrigLocation: {
        type: StringConstructor;
    };
    Jurisdiction: {
        type: StringConstructor;
    };
}>, unknown>>;
export interface CADIncident extends Document, ItemTypeFromTypeSchemaFunction<typeof CADIncidentModule> {
}
export interface CADIncidentModel extends Model<CADIncident> {
}
declare const _default: ReplaceModelReturnType<typeof CADIncidentModule, CADIncidentModel>;
export default _default;

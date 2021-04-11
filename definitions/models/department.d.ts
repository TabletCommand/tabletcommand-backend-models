import * as uuid from "uuid";
import { MongooseModule, retrieveCurrentUnixTime, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
import { Document, Model } from "mongoose";
export declare function DepartmentModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: import("mongoose").Types.ObjectIdConstructor;
        auto: true;
    };
    uuid: {
        type: StringConstructor;
        default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
    };
    department: {
        type: StringConstructor;
        default: string;
    };
    fdid: {
        type: StringConstructor;
        default: string;
    };
    city: {
        type: StringConstructor;
        default: string;
    };
    state: {
        type: StringConstructor;
        default: string;
    };
    contact_name: {
        type: StringConstructor;
        default: string;
    };
    contact_phone: {
        type: StringConstructor;
        default: string;
    };
    contact_email: {
        type: StringConstructor;
        default: string;
    };
    modified_unix_date: {
        type: NumberConstructor;
        default: typeof retrieveCurrentUnixTime;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    apikey: {
        type: StringConstructor;
        default: string;
    };
    cadEmailUsername: {
        type: StringConstructor;
        default: string;
    };
    cadBidirectionalEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    cadOneWayVehiclesEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    connectivity: {
        incident: {
            enabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            staleMinutes: {
                type: NumberConstructor;
                default: number;
            };
            heartbeatMinutes: {
                type: NumberConstructor;
                default: number;
            };
        };
        location: {
            enabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            staleMinutes: {
                type: NumberConstructor;
                default: number;
            };
            heartbeatMinutes: {
                type: NumberConstructor;
                default: number;
            };
        };
        status: {
            enabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            staleMinutes: {
                type: NumberConstructor;
                default: number;
            };
            heartbeatMinutes: {
                type: NumberConstructor;
                default: number;
            };
            ackUnitsCount: {
                type: NumberConstructor;
                default: number;
            };
        };
    };
    selfAssignmentEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    userContributionEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    vehicleSwapEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    personnelStaffingEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultMapPosition: {
        longitude: {
            type: NumberConstructor;
            default: number;
        };
        latitude: {
            type: NumberConstructor;
            default: number;
        };
    };
    fireMapPDFReader: {
        type: StringConstructor;
        default: string;
    };
    locationStaleMinutes: {
        type: NumberConstructor;
        default: number;
    };
    beaconEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    fireMapperEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    fireMapperRefreshInterval: {
        type: NumberConstructor;
        default: number;
    };
    beansAIEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    mowsEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    rtsEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    rtsChannelPrefix: {
        type: StringConstructor;
        default: string;
    };
    rtsAuthKey: {
        type: StringConstructor;
        default: string;
    };
    esriGeoJSONFilename: {
        type: StringConstructor;
        default: string;
    };
    customWebUrl: {
        type: StringConstructor;
        default: string;
    };
    customWebName: {
        type: StringConstructor;
        default: string;
    };
    incidentTypes: {
        type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            name: {
                type: StringConstructor;
                default: string;
            };
            value: {
                type: StringConstructor;
                default: string;
            };
        }>, unknown>)[];
        default: never[];
    };
    agencyIds: {
        type: typeof import("mongoose").Schema.Types.ObjectId;
        ref: string;
        default: never[];
    }[];
    signupKey: {
        type: StringConstructor;
        default: string;
    };
    signupDomains: {
        type: StringConstructor[];
        default: never[];
    };
    safetyPriorityKeywords: {
        type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            priority: {
                type: NumberConstructor;
                default: number;
            };
            keywords: {
                type: StringConstructor[];
                default: never[];
            };
            hexColor: {
                type: StringConstructor;
            };
        }>, unknown>)[];
        default: {
            keywords: never[];
            priority: number;
            hexColor: string;
        }[];
    };
    shareLocationPhones: {
        type: BooleanConstructor;
        default: boolean;
    };
    shareLocationTablets: {
        type: BooleanConstructor;
        default: boolean;
    };
    shareAVL: {
        enabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        opAreaName: {
            type: StringConstructor;
            default: string;
        };
        opAreaCode: {
            type: StringConstructor;
            default: string;
        };
    };
    accountType: {
        type: StringConstructor;
        default: string;
    };
    timeZone: {
        type: StringConstructor;
        default: string;
    };
}>, unknown>>;
export interface Department extends Document, ItemTypeFromTypeSchemaFunction<typeof DepartmentModule> {
}
export interface DepartmentModel extends Model<Department> {
}
declare const _default: ReplaceModelReturnType<typeof DepartmentModule, DepartmentModel>;
export default _default;

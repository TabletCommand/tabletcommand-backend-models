import { ItemTypeFromTypeSchemaFunction, MongooseDocument, MongooseModule, ReplaceModelReturnType, retrieveCurrentUnixTime } from "../helpers";
import { Document, Model } from "mongoose";
export declare function LocationModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: import("mongoose").Types.ObjectIdConstructor;
        auto: true;
    };
    departmentId: {
        type: StringConstructor;
        default: string;
        required: true;
        index: true;
    };
    userId: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    uuid: {
        type: StringConstructor;
        default: () => string;
    };
    username: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    device_type: {
        type: StringConstructor;
        required: true;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    modified_unix_date: {
        type: NumberConstructor;
        default: typeof retrieveCurrentUnixTime;
    };
    version: {
        type: NumberConstructor;
        default: number;
    };
    session: {
        type: StringConstructor;
        default: string;
    };
    heading: {
        type: NumberConstructor;
        default: number;
    };
    esriId: {
        type: NumberConstructor;
        default: number;
    };
    location: {
        longitude: {
            type: NumberConstructor;
            required: true;
            default: number;
        };
        latitude: {
            type: NumberConstructor;
            required: true;
            default: number;
        };
    };
    locationGeoJSON: {
        type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            type: {
                type: StringConstructor;
                required: true;
                enum: string[];
                default: string;
            };
            coordinates: {
                type: NumberConstructor[];
                required: true;
                default: never[];
            };
        }>, unknown>;
        default: null;
    };
    opAreaCode: {
        type: StringConstructor;
        default: string;
    };
    opAreaName: {
        type: StringConstructor;
        default: string;
    };
    shared: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: StringConstructor;
        default: string;
    };
}>, {
    propagateToObject<T>(this: import("../helpers").MongooseInterface<{
        _id: {
            type: import("mongoose").Types.ObjectIdConstructor;
            auto: true;
        };
        departmentId: {
            type: StringConstructor;
            default: string;
            required: true;
            index: true;
        };
        userId: {
            type: StringConstructor;
            default: string;
            required: true;
        };
        uuid: {
            type: StringConstructor;
            default: () => string;
        };
        username: {
            type: StringConstructor;
            default: string;
            required: true;
        };
        device_type: {
            type: StringConstructor;
            required: true;
        };
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        modified_unix_date: {
            type: NumberConstructor;
            default: typeof retrieveCurrentUnixTime;
        };
        version: {
            type: NumberConstructor;
            default: number;
        };
        session: {
            type: StringConstructor;
            default: string;
        };
        heading: {
            type: NumberConstructor;
            default: number;
        };
        esriId: {
            type: NumberConstructor;
            default: number;
        };
        location: {
            longitude: {
                type: NumberConstructor;
                required: true;
                default: number;
            };
            latitude: {
                type: NumberConstructor;
                required: true;
                default: number;
            };
        };
        locationGeoJSON: {
            type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
                type: {
                    type: StringConstructor;
                    required: true;
                    enum: string[];
                    default: string;
                };
                coordinates: {
                    type: NumberConstructor[];
                    required: true;
                    default: never[];
                };
            }>, unknown>;
            default: null;
        };
        opAreaCode: {
            type: StringConstructor;
            default: string;
        };
        opAreaName: {
            type: StringConstructor;
            default: string;
        };
        shared: {
            type: BooleanConstructor;
            default: boolean;
        };
        state: {
            type: StringConstructor;
            default: string;
        };
    }> & MongooseDocument & {
        schema: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & {
            __interface: import("../helpers").MongooseInterface<{
                _id: {
                    type: import("mongoose").Types.ObjectIdConstructor;
                    auto: true;
                };
                departmentId: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                    index: true;
                };
                userId: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                };
                uuid: {
                    type: StringConstructor;
                    default: () => string;
                };
                username: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                };
                device_type: {
                    type: StringConstructor;
                    required: true;
                };
                active: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                modified_unix_date: {
                    type: NumberConstructor;
                    default: typeof retrieveCurrentUnixTime;
                };
                version: {
                    type: NumberConstructor;
                    default: number;
                };
                session: {
                    type: StringConstructor;
                    default: string;
                };
                heading: {
                    type: NumberConstructor;
                    default: number;
                };
                esriId: {
                    type: NumberConstructor;
                    default: number;
                };
                location: {
                    longitude: {
                        type: NumberConstructor;
                        required: true;
                        default: number;
                    };
                    latitude: {
                        type: NumberConstructor;
                        required: true;
                        default: number;
                    };
                };
                locationGeoJSON: {
                    type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
                        type: {
                            type: StringConstructor;
                            required: true;
                            enum: string[];
                            default: string;
                        };
                        coordinates: {
                            type: NumberConstructor[];
                            required: true;
                            default: never[];
                        };
                    }>, unknown>;
                    default: null;
                };
                opAreaCode: {
                    type: StringConstructor;
                    default: string;
                };
                opAreaName: {
                    type: StringConstructor;
                    default: string;
                };
                shared: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                state: {
                    type: StringConstructor;
                    default: string;
                };
            }>;
        };
    }, dbItem: import("../helpers").MongooseInterface<{
        _id: {
            type: import("mongoose").Types.ObjectIdConstructor;
            auto: true;
        };
        departmentId: {
            type: StringConstructor;
            default: string;
            required: true;
            index: true;
        };
        userId: {
            type: StringConstructor;
            default: string;
            required: true;
        };
        uuid: {
            type: StringConstructor;
            default: () => string;
        };
        username: {
            type: StringConstructor;
            default: string;
            required: true;
        };
        device_type: {
            type: StringConstructor;
            required: true;
        };
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        modified_unix_date: {
            type: NumberConstructor;
            default: typeof retrieveCurrentUnixTime;
        };
        version: {
            type: NumberConstructor;
            default: number;
        };
        session: {
            type: StringConstructor;
            default: string;
        };
        heading: {
            type: NumberConstructor;
            default: number;
        };
        esriId: {
            type: NumberConstructor;
            default: number;
        };
        location: {
            longitude: {
                type: NumberConstructor;
                required: true;
                default: number;
            };
            latitude: {
                type: NumberConstructor;
                required: true;
                default: number;
            };
        };
        locationGeoJSON: {
            type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
                type: {
                    type: StringConstructor;
                    required: true;
                    enum: string[];
                    default: string;
                };
                coordinates: {
                    type: NumberConstructor[];
                    required: true;
                    default: never[];
                };
            }>, unknown>;
            default: null;
        };
        opAreaCode: {
            type: StringConstructor;
            default: string;
        };
        opAreaName: {
            type: StringConstructor;
            default: string;
        };
        shared: {
            type: BooleanConstructor;
            default: boolean;
        };
        state: {
            type: StringConstructor;
            default: string;
        };
    }> & MongooseDocument & {
        schema: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & {
            __interface: import("../helpers").MongooseInterface<{
                _id: {
                    type: import("mongoose").Types.ObjectIdConstructor;
                    auto: true;
                };
                departmentId: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                    index: true;
                };
                userId: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                };
                uuid: {
                    type: StringConstructor;
                    default: () => string;
                };
                username: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                };
                device_type: {
                    type: StringConstructor;
                    required: true;
                };
                active: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                modified_unix_date: {
                    type: NumberConstructor;
                    default: typeof retrieveCurrentUnixTime;
                };
                version: {
                    type: NumberConstructor;
                    default: number;
                };
                session: {
                    type: StringConstructor;
                    default: string;
                };
                heading: {
                    type: NumberConstructor;
                    default: number;
                };
                esriId: {
                    type: NumberConstructor;
                    default: number;
                };
                location: {
                    longitude: {
                        type: NumberConstructor;
                        required: true;
                        default: number;
                    };
                    latitude: {
                        type: NumberConstructor;
                        required: true;
                        default: number;
                    };
                };
                locationGeoJSON: {
                    type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
                        type: {
                            type: StringConstructor;
                            required: true;
                            enum: string[];
                            default: string;
                        };
                        coordinates: {
                            type: NumberConstructor[];
                            required: true;
                            default: never[];
                        };
                    }>, unknown>;
                    default: null;
                };
                opAreaCode: {
                    type: StringConstructor;
                    default: string;
                };
                opAreaName: {
                    type: StringConstructor;
                    default: string;
                };
                shared: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                state: {
                    type: StringConstructor;
                    default: string;
                };
            }>;
        };
    }, callback: (_doc: import("../helpers").MongooseInterface<{
        _id: {
            type: import("mongoose").Types.ObjectIdConstructor;
            auto: true;
        };
        departmentId: {
            type: StringConstructor;
            default: string;
            required: true;
            index: true;
        };
        userId: {
            type: StringConstructor;
            default: string;
            required: true;
        };
        uuid: {
            type: StringConstructor;
            default: () => string;
        };
        username: {
            type: StringConstructor;
            default: string;
            required: true;
        };
        device_type: {
            type: StringConstructor;
            required: true;
        };
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        modified_unix_date: {
            type: NumberConstructor;
            default: typeof retrieveCurrentUnixTime;
        };
        version: {
            type: NumberConstructor;
            default: number;
        };
        session: {
            type: StringConstructor;
            default: string;
        };
        heading: {
            type: NumberConstructor;
            default: number;
        };
        esriId: {
            type: NumberConstructor;
            default: number;
        };
        location: {
            longitude: {
                type: NumberConstructor;
                required: true;
                default: number;
            };
            latitude: {
                type: NumberConstructor;
                required: true;
                default: number;
            };
        };
        locationGeoJSON: {
            type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
                type: {
                    type: StringConstructor;
                    required: true;
                    enum: string[];
                    default: string;
                };
                coordinates: {
                    type: NumberConstructor[];
                    required: true;
                    default: never[];
                };
            }>, unknown>;
            default: null;
        };
        opAreaCode: {
            type: StringConstructor;
            default: string;
        };
        opAreaName: {
            type: StringConstructor;
            default: string;
        };
        shared: {
            type: BooleanConstructor;
            default: boolean;
        };
        state: {
            type: StringConstructor;
            default: string;
        };
    }> & MongooseDocument & {
        schema: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & {
            __interface: import("../helpers").MongooseInterface<{
                _id: {
                    type: import("mongoose").Types.ObjectIdConstructor;
                    auto: true;
                };
                departmentId: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                    index: true;
                };
                userId: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                };
                uuid: {
                    type: StringConstructor;
                    default: () => string;
                };
                username: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                };
                device_type: {
                    type: StringConstructor;
                    required: true;
                };
                active: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                modified_unix_date: {
                    type: NumberConstructor;
                    default: typeof retrieveCurrentUnixTime;
                };
                version: {
                    type: NumberConstructor;
                    default: number;
                };
                session: {
                    type: StringConstructor;
                    default: string;
                };
                heading: {
                    type: NumberConstructor;
                    default: number;
                };
                esriId: {
                    type: NumberConstructor;
                    default: number;
                };
                location: {
                    longitude: {
                        type: NumberConstructor;
                        required: true;
                        default: number;
                    };
                    latitude: {
                        type: NumberConstructor;
                        required: true;
                        default: number;
                    };
                };
                locationGeoJSON: {
                    type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
                        type: {
                            type: StringConstructor;
                            required: true;
                            enum: string[];
                            default: string;
                        };
                        coordinates: {
                            type: NumberConstructor[];
                            required: true;
                            default: never[];
                        };
                    }>, unknown>;
                    default: null;
                };
                opAreaCode: {
                    type: StringConstructor;
                    default: string;
                };
                opAreaName: {
                    type: StringConstructor;
                    default: string;
                };
                shared: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                state: {
                    type: StringConstructor;
                    default: string;
                };
            }>;
        };
    }) => T): T;
}>>;
export interface Location extends Document, ItemTypeFromTypeSchemaFunction<typeof LocationModule> {
}
export interface LocationModel extends Model<Location> {
}
declare const _default: ReplaceModelReturnType<typeof LocationModule, LocationModel>;
export default _default;

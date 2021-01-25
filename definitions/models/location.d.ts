/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType, retrieveCurrentUnixTime } from "../helpers";
export declare function LocationModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any> & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    departmentId: string;
    userId: string;
    uuid: string;
    username: string;
    device_type: string;
    active: boolean;
    modified_unix_date: number;
    version: number;
    session: string;
    heading: number;
    esriId: number;
    location: {
        longitude: number;
        latitude: number;
    };
    locationGeoJSON: import("../helpers").MongooseInterface<{
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
    }>;
    opAreaCode: string;
    opAreaName: string;
    shared: boolean;
    state: string;
} & {
    propagateToObject<T>(this: Record<string, unknown> & {
        _id: import("bson").ObjectId;
        departmentId: string;
        userId: string;
        uuid: string;
        username: string;
        device_type: string;
        active: boolean;
        modified_unix_date: number;
        version: number;
        session: string;
        heading: number;
        esriId: number;
        location: {
            longitude: number;
            latitude: number;
        };
        locationGeoJSON: import("../helpers").MongooseInterface<{
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
        }>;
        opAreaCode: string;
        opAreaName: string;
        shared: boolean;
        state: string;
    } & Pick<import("mongoose").Document<any>, "update" | "get" | "set" | "delete" | "invalidate" | "populate" | "__v" | "$ignore" | "$isDefault" | "$isDeleted" | "$isEmpty" | "$isValid" | "$locals" | "$markValid" | "$op" | "$session" | "$set" | "$where" | "baseModelName" | "collection" | "db" | "deleteOne" | "depopulate" | "directModifiedPaths" | "equals" | "errors" | "execPopulate" | "getChanges" | "id" | "increment" | "init" | "isDirectModified" | "isDirectSelected" | "isInit" | "isModified" | "isNew" | "isSelected" | "markModified" | "modifiedPaths" | "model" | "modelName" | "overwrite" | "populated" | "remove" | "replaceOne" | "save" | "schema" | "toJSON" | "toObject" | "unmarkModified" | "updateOne" | "validate" | "validateSync"> & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
            _interface: import("../helpers").MongooseInterface<{
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
                    type: import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
                        _interface: import("../helpers").MongooseInterface<{
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
                        }>;
                        _methods: unknown;
                    };
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
    }, dbItem: Record<string, unknown> & {
        _id: import("bson").ObjectId;
        departmentId: string;
        userId: string;
        uuid: string;
        username: string;
        device_type: string;
        active: boolean;
        modified_unix_date: number;
        version: number;
        session: string;
        heading: number;
        esriId: number;
        location: {
            longitude: number;
            latitude: number;
        };
        locationGeoJSON: import("../helpers").MongooseInterface<{
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
        }>;
        opAreaCode: string;
        opAreaName: string;
        shared: boolean;
        state: string;
    } & Pick<import("mongoose").Document<any>, "update" | "get" | "set" | "delete" | "invalidate" | "populate" | "__v" | "$ignore" | "$isDefault" | "$isDeleted" | "$isEmpty" | "$isValid" | "$locals" | "$markValid" | "$op" | "$session" | "$set" | "$where" | "baseModelName" | "collection" | "db" | "deleteOne" | "depopulate" | "directModifiedPaths" | "equals" | "errors" | "execPopulate" | "getChanges" | "id" | "increment" | "init" | "isDirectModified" | "isDirectSelected" | "isInit" | "isModified" | "isNew" | "isSelected" | "markModified" | "modifiedPaths" | "model" | "modelName" | "overwrite" | "populated" | "remove" | "replaceOne" | "save" | "schema" | "toJSON" | "toObject" | "unmarkModified" | "updateOne" | "validate" | "validateSync"> & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
            _interface: import("../helpers").MongooseInterface<{
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
                    type: import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
                        _interface: import("../helpers").MongooseInterface<{
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
                        }>;
                        _methods: unknown;
                    };
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
    }, callback: (_doc: Record<string, unknown> & {
        _id: import("bson").ObjectId;
        departmentId: string;
        userId: string;
        uuid: string;
        username: string;
        device_type: string;
        active: boolean;
        modified_unix_date: number;
        version: number;
        session: string;
        heading: number;
        esriId: number;
        location: {
            longitude: number;
            latitude: number;
        };
        locationGeoJSON: import("../helpers").MongooseInterface<{
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
        }>;
        opAreaCode: string;
        opAreaName: string;
        shared: boolean;
        state: string;
    } & Pick<import("mongoose").Document<any>, "update" | "get" | "set" | "delete" | "invalidate" | "populate" | "__v" | "$ignore" | "$isDefault" | "$isDeleted" | "$isEmpty" | "$isValid" | "$locals" | "$markValid" | "$op" | "$session" | "$set" | "$where" | "baseModelName" | "collection" | "db" | "deleteOne" | "depopulate" | "directModifiedPaths" | "equals" | "errors" | "execPopulate" | "getChanges" | "id" | "increment" | "init" | "isDirectModified" | "isDirectSelected" | "isInit" | "isModified" | "isNew" | "isSelected" | "markModified" | "modifiedPaths" | "model" | "modelName" | "overwrite" | "populated" | "remove" | "replaceOne" | "save" | "schema" | "toJSON" | "toObject" | "unmarkModified" | "updateOne" | "validate" | "validateSync"> & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
            _interface: import("../helpers").MongooseInterface<{
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
                    type: import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
                        _interface: import("../helpers").MongooseInterface<{
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
                        }>;
                        _methods: unknown;
                    };
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
}> & {
    __methods?: {
        propagateToObject<T>(this: Record<string, unknown> & {
            _id: import("bson").ObjectId;
            departmentId: string;
            userId: string;
            uuid: string;
            username: string;
            device_type: string;
            active: boolean;
            modified_unix_date: number;
            version: number;
            session: string;
            heading: number;
            esriId: number;
            location: {
                longitude: number;
                latitude: number;
            };
            locationGeoJSON: import("../helpers").MongooseInterface<{
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
            }>;
            opAreaCode: string;
            opAreaName: string;
            shared: boolean;
            state: string;
        } & Pick<import("mongoose").Document<any>, "update" | "get" | "set" | "delete" | "invalidate" | "populate" | "__v" | "$ignore" | "$isDefault" | "$isDeleted" | "$isEmpty" | "$isValid" | "$locals" | "$markValid" | "$op" | "$session" | "$set" | "$where" | "baseModelName" | "collection" | "db" | "deleteOne" | "depopulate" | "directModifiedPaths" | "equals" | "errors" | "execPopulate" | "getChanges" | "id" | "increment" | "init" | "isDirectModified" | "isDirectSelected" | "isInit" | "isModified" | "isNew" | "isSelected" | "markModified" | "modifiedPaths" | "model" | "modelName" | "overwrite" | "populated" | "remove" | "replaceOne" | "save" | "schema" | "toJSON" | "toObject" | "unmarkModified" | "updateOne" | "validate" | "validateSync"> & {
            _id: import("bson").ObjectId;
        } & {
            schema: import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
                _interface: import("../helpers").MongooseInterface<{
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
                        type: import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
                            _interface: import("../helpers").MongooseInterface<{
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
                            }>;
                            _methods: unknown;
                        };
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
        }, dbItem: Record<string, unknown> & {
            _id: import("bson").ObjectId;
            departmentId: string;
            userId: string;
            uuid: string;
            username: string;
            device_type: string;
            active: boolean;
            modified_unix_date: number;
            version: number;
            session: string;
            heading: number;
            esriId: number;
            location: {
                longitude: number;
                latitude: number;
            };
            locationGeoJSON: import("../helpers").MongooseInterface<{
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
            }>;
            opAreaCode: string;
            opAreaName: string;
            shared: boolean;
            state: string;
        } & Pick<import("mongoose").Document<any>, "update" | "get" | "set" | "delete" | "invalidate" | "populate" | "__v" | "$ignore" | "$isDefault" | "$isDeleted" | "$isEmpty" | "$isValid" | "$locals" | "$markValid" | "$op" | "$session" | "$set" | "$where" | "baseModelName" | "collection" | "db" | "deleteOne" | "depopulate" | "directModifiedPaths" | "equals" | "errors" | "execPopulate" | "getChanges" | "id" | "increment" | "init" | "isDirectModified" | "isDirectSelected" | "isInit" | "isModified" | "isNew" | "isSelected" | "markModified" | "modifiedPaths" | "model" | "modelName" | "overwrite" | "populated" | "remove" | "replaceOne" | "save" | "schema" | "toJSON" | "toObject" | "unmarkModified" | "updateOne" | "validate" | "validateSync"> & {
            _id: import("bson").ObjectId;
        } & {
            schema: import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
                _interface: import("../helpers").MongooseInterface<{
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
                        type: import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
                            _interface: import("../helpers").MongooseInterface<{
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
                            }>;
                            _methods: unknown;
                        };
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
        }, callback: (_doc: Record<string, unknown> & {
            _id: import("bson").ObjectId;
            departmentId: string;
            userId: string;
            uuid: string;
            username: string;
            device_type: string;
            active: boolean;
            modified_unix_date: number;
            version: number;
            session: string;
            heading: number;
            esriId: number;
            location: {
                longitude: number;
                latitude: number;
            };
            locationGeoJSON: import("../helpers").MongooseInterface<{
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
            }>;
            opAreaCode: string;
            opAreaName: string;
            shared: boolean;
            state: string;
        } & Pick<import("mongoose").Document<any>, "update" | "get" | "set" | "delete" | "invalidate" | "populate" | "__v" | "$ignore" | "$isDefault" | "$isDeleted" | "$isEmpty" | "$isValid" | "$locals" | "$markValid" | "$op" | "$session" | "$set" | "$where" | "baseModelName" | "collection" | "db" | "deleteOne" | "depopulate" | "directModifiedPaths" | "equals" | "errors" | "execPopulate" | "getChanges" | "id" | "increment" | "init" | "isDirectModified" | "isDirectSelected" | "isInit" | "isModified" | "isNew" | "isSelected" | "markModified" | "modifiedPaths" | "model" | "modelName" | "overwrite" | "populated" | "remove" | "replaceOne" | "save" | "schema" | "toJSON" | "toObject" | "unmarkModified" | "updateOne" | "validate" | "validateSync"> & {
            _id: import("bson").ObjectId;
        } & {
            schema: import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
                _interface: import("../helpers").MongooseInterface<{
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
                        type: import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
                            _interface: import("../helpers").MongooseInterface<{
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
                            }>;
                            _methods: unknown;
                        };
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
    } | undefined;
}>;
export interface Location extends ItemTypeFromTypeSchemaFunction<typeof LocationModule> {
}
export interface LocationModel extends ModelTypeFromTypeSchemaFunction<Location> {
}
declare const _default: ReplaceModelReturnType<typeof LocationModule, LocationModel>;
export default _default;
//# sourceMappingURL=location.d.ts.map
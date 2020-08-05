/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function CADVehicleStatusModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    uuid: string;
    departmentId: string;
    vehicleId: string;
    radioName: string;
    requestTime: number;
    responseTime: number;
    status: string;
    statusCode: string;
    modifiedDate: number;
    requestStatus: number;
    owner: string;
    incidentNumber: string;
    options: import("../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
            default: string;
        };
        type: {
            type: StringConstructor;
            default: string;
        };
        value: {
            type: StringConstructor;
            default: string;
        };
        key: {
            type: StringConstructor;
            default: string;
        };
    }>[];
    capability: string;
} & {
    propagateToObject<T>(dbItem: Record<string, unknown> & {
        uuid: string;
        departmentId: string;
        vehicleId: string;
        radioName: string;
        requestTime: number;
        responseTime: number;
        status: string;
        statusCode: string;
        modifiedDate: number;
        requestStatus: number;
        owner: string;
        incidentNumber: string;
        options: import("../helpers").MongooseInterface<{
            name: {
                type: StringConstructor;
                default: string;
            };
            type: {
                type: StringConstructor;
                default: string;
            };
            value: {
                type: StringConstructor;
                default: string;
            };
            key: {
                type: StringConstructor;
                default: string;
            };
        }>[];
        capability: string;
    } & Pick<import("mongoose").Document, "toString" | "update" | "get" | "set" | "removeListener" | "off" | "invalidate" | "increment" | "model" | "$isDeleted" | "remove" | "deleteOne" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "unmarkModified" | "replaceOne" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "addListener" | "on" | "once" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "collection" | "db"> & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<any> & {
            _interface: import("../helpers").MongooseInterface<{
                uuid: {
                    type: StringConstructor;
                    index: true;
                    default: import("uuid/interfaces").v4;
                };
                departmentId: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                    index: true;
                };
                vehicleId: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                    minlength: number;
                };
                radioName: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                    minlength: number;
                };
                requestTime: {
                    type: NumberConstructor;
                    default: number;
                };
                responseTime: {
                    type: NumberConstructor;
                    default: number;
                };
                status: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                    minlength: number;
                };
                statusCode: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                    minlength: number;
                };
                modifiedDate: {
                    type: NumberConstructor;
                    default: number;
                    min: number;
                };
                requestStatus: {
                    type: NumberConstructor;
                    default: number;
                };
                owner: {
                    type: StringConstructor;
                    default: string;
                };
                incidentNumber: {
                    type: StringConstructor;
                    default: string;
                };
                options: {
                    type: (import("mongoose").Schema<any> & {
                        _interface: import("../helpers").MongooseInterface<{
                            name: {
                                type: StringConstructor;
                                default: string;
                            };
                            type: {
                                type: StringConstructor;
                                default: string;
                            };
                            value: {
                                type: StringConstructor;
                                default: string;
                            };
                            key: {
                                type: StringConstructor;
                                default: string;
                            };
                        }>;
                        _methods: unknown;
                    })[];
                    default: never[];
                };
                capability: {
                    type: StringConstructor;
                    default: string;
                };
            }>;
        };
    }, callback: (o: Record<string, unknown> & {
        uuid: string;
        departmentId: string;
        vehicleId: string;
        radioName: string;
        requestTime: number;
        responseTime: number;
        status: string;
        statusCode: string;
        modifiedDate: number;
        requestStatus: number;
        owner: string;
        incidentNumber: string;
        options: import("../helpers").MongooseInterface<{
            name: {
                type: StringConstructor;
                default: string;
            };
            type: {
                type: StringConstructor;
                default: string;
            };
            value: {
                type: StringConstructor;
                default: string;
            };
            key: {
                type: StringConstructor;
                default: string;
            };
        }>[];
        capability: string;
    } & Pick<import("mongoose").Document, "toString" | "update" | "get" | "set" | "removeListener" | "off" | "invalidate" | "increment" | "model" | "$isDeleted" | "remove" | "deleteOne" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "unmarkModified" | "replaceOne" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "addListener" | "on" | "once" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "collection" | "db"> & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<any> & {
            _interface: import("../helpers").MongooseInterface<{
                uuid: {
                    type: StringConstructor;
                    index: true;
                    default: import("uuid/interfaces").v4;
                };
                departmentId: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                    index: true;
                };
                vehicleId: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                    minlength: number;
                };
                radioName: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                    minlength: number;
                };
                requestTime: {
                    type: NumberConstructor;
                    default: number;
                };
                responseTime: {
                    type: NumberConstructor;
                    default: number;
                };
                status: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                    minlength: number;
                };
                statusCode: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                    minlength: number;
                };
                modifiedDate: {
                    type: NumberConstructor;
                    default: number;
                    min: number;
                };
                requestStatus: {
                    type: NumberConstructor;
                    default: number;
                };
                owner: {
                    type: StringConstructor;
                    default: string;
                };
                incidentNumber: {
                    type: StringConstructor;
                    default: string;
                };
                options: {
                    type: (import("mongoose").Schema<any> & {
                        _interface: import("../helpers").MongooseInterface<{
                            name: {
                                type: StringConstructor;
                                default: string;
                            };
                            type: {
                                type: StringConstructor;
                                default: string;
                            };
                            value: {
                                type: StringConstructor;
                                default: string;
                            };
                            key: {
                                type: StringConstructor;
                                default: string;
                            };
                        }>;
                        _methods: unknown;
                    })[];
                    default: never[];
                };
                capability: {
                    type: StringConstructor;
                    default: string;
                };
            }>;
        };
    }) => T): T;
}, {}> & {
    __methods?: {
        propagateToObject<T>(dbItem: Record<string, unknown> & {
            uuid: string;
            departmentId: string;
            vehicleId: string;
            radioName: string;
            requestTime: number;
            responseTime: number;
            status: string;
            statusCode: string;
            modifiedDate: number;
            requestStatus: number;
            owner: string;
            incidentNumber: string;
            options: import("../helpers").MongooseInterface<{
                name: {
                    type: StringConstructor;
                    default: string;
                };
                type: {
                    type: StringConstructor;
                    default: string;
                };
                value: {
                    type: StringConstructor;
                    default: string;
                };
                key: {
                    type: StringConstructor;
                    default: string;
                };
            }>[];
            capability: string;
        } & Pick<import("mongoose").Document, "toString" | "update" | "get" | "set" | "removeListener" | "off" | "invalidate" | "increment" | "model" | "$isDeleted" | "remove" | "deleteOne" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "unmarkModified" | "replaceOne" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "addListener" | "on" | "once" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "collection" | "db"> & {
            _id: import("bson").ObjectId;
        } & {
            schema: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    uuid: {
                        type: StringConstructor;
                        index: true;
                        default: import("uuid/interfaces").v4;
                    };
                    departmentId: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                        index: true;
                    };
                    vehicleId: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                        minlength: number;
                    };
                    radioName: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                        minlength: number;
                    };
                    requestTime: {
                        type: NumberConstructor;
                        default: number;
                    };
                    responseTime: {
                        type: NumberConstructor;
                        default: number;
                    };
                    status: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                        minlength: number;
                    };
                    statusCode: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                        minlength: number;
                    };
                    modifiedDate: {
                        type: NumberConstructor;
                        default: number;
                        min: number;
                    };
                    requestStatus: {
                        type: NumberConstructor;
                        default: number;
                    };
                    owner: {
                        type: StringConstructor;
                        default: string;
                    };
                    incidentNumber: {
                        type: StringConstructor;
                        default: string;
                    };
                    options: {
                        type: (import("mongoose").Schema<any> & {
                            _interface: import("../helpers").MongooseInterface<{
                                name: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                type: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                value: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                key: {
                                    type: StringConstructor;
                                    default: string;
                                };
                            }>;
                            _methods: unknown;
                        })[];
                        default: never[];
                    };
                    capability: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
            };
        }, callback: (o: Record<string, unknown> & {
            uuid: string;
            departmentId: string;
            vehicleId: string;
            radioName: string;
            requestTime: number;
            responseTime: number;
            status: string;
            statusCode: string;
            modifiedDate: number;
            requestStatus: number;
            owner: string;
            incidentNumber: string;
            options: import("../helpers").MongooseInterface<{
                name: {
                    type: StringConstructor;
                    default: string;
                };
                type: {
                    type: StringConstructor;
                    default: string;
                };
                value: {
                    type: StringConstructor;
                    default: string;
                };
                key: {
                    type: StringConstructor;
                    default: string;
                };
            }>[];
            capability: string;
        } & Pick<import("mongoose").Document, "toString" | "update" | "get" | "set" | "removeListener" | "off" | "invalidate" | "increment" | "model" | "$isDeleted" | "remove" | "deleteOne" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "unmarkModified" | "replaceOne" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "addListener" | "on" | "once" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "collection" | "db"> & {
            _id: import("bson").ObjectId;
        } & {
            schema: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    uuid: {
                        type: StringConstructor;
                        index: true;
                        default: import("uuid/interfaces").v4;
                    };
                    departmentId: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                        index: true;
                    };
                    vehicleId: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                        minlength: number;
                    };
                    radioName: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                        minlength: number;
                    };
                    requestTime: {
                        type: NumberConstructor;
                        default: number;
                    };
                    responseTime: {
                        type: NumberConstructor;
                        default: number;
                    };
                    status: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                        minlength: number;
                    };
                    statusCode: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                        minlength: number;
                    };
                    modifiedDate: {
                        type: NumberConstructor;
                        default: number;
                        min: number;
                    };
                    requestStatus: {
                        type: NumberConstructor;
                        default: number;
                    };
                    owner: {
                        type: StringConstructor;
                        default: string;
                    };
                    incidentNumber: {
                        type: StringConstructor;
                        default: string;
                    };
                    options: {
                        type: (import("mongoose").Schema<any> & {
                            _interface: import("../helpers").MongooseInterface<{
                                name: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                type: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                value: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                key: {
                                    type: StringConstructor;
                                    default: string;
                                };
                            }>;
                            _methods: unknown;
                        })[];
                        default: never[];
                    };
                    capability: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
            };
        }) => T): T;
    } | undefined;
}>;
export interface CADVehicleStatus extends ItemTypeFromTypeSchemaFunction<typeof CADVehicleStatusModule> {
}
export interface CADVehicleStatusModel extends ModelTypeFromTypeSchemaFunction<CADVehicleStatus> {
}
declare const _default: ReplaceModelReturnType<typeof CADVehicleStatusModule, CADVehicleStatusModel>;
export default _default;
//# sourceMappingURL=cad-vehicle-status.d.ts.map
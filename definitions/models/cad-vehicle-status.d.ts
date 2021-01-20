/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function CADVehicleStatusModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any> & Record<string, unknown> & {
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
    } & Pick<import("mongoose").Document<any>, "get" | "set" | "delete" | "update" | "invalidate" | "populate" | "__v" | "$ignore" | "$isDefault" | "$isDeleted" | "$isEmpty" | "$isValid" | "$locals" | "$markValid" | "$op" | "$session" | "$set" | "$where" | "baseModelName" | "collection" | "db" | "deleteOne" | "depopulate" | "directModifiedPaths" | "equals" | "errors" | "execPopulate" | "getChanges" | "id" | "increment" | "init" | "isDirectModified" | "isDirectSelected" | "isInit" | "isModified" | "isNew" | "isSelected" | "markModified" | "modifiedPaths" | "model" | "modelName" | "overwrite" | "populated" | "remove" | "replaceOne" | "save" | "schema" | "toJSON" | "toObject" | "unmarkModified" | "updateOne" | "validate" | "validateSync"> & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
            _interface: import("../helpers").MongooseInterface<{
                uuid: {
                    type: StringConstructor;
                    index: true;
                    default: () => string;
                };
                departmentId: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                    index: true;
                };
                vehicleId: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                    minlength: number;
                };
                radioName: {
                    type: StringConstructor;
                    default: string;
                    required: true;
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
                    required: true;
                    minlength: number;
                };
                statusCode: {
                    type: StringConstructor;
                    default: string;
                    required: true;
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
                    type: (import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
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
    } & Pick<import("mongoose").Document<any>, "get" | "set" | "delete" | "update" | "invalidate" | "populate" | "__v" | "$ignore" | "$isDefault" | "$isDeleted" | "$isEmpty" | "$isValid" | "$locals" | "$markValid" | "$op" | "$session" | "$set" | "$where" | "baseModelName" | "collection" | "db" | "deleteOne" | "depopulate" | "directModifiedPaths" | "equals" | "errors" | "execPopulate" | "getChanges" | "id" | "increment" | "init" | "isDirectModified" | "isDirectSelected" | "isInit" | "isModified" | "isNew" | "isSelected" | "markModified" | "modifiedPaths" | "model" | "modelName" | "overwrite" | "populated" | "remove" | "replaceOne" | "save" | "schema" | "toJSON" | "toObject" | "unmarkModified" | "updateOne" | "validate" | "validateSync"> & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
            _interface: import("../helpers").MongooseInterface<{
                uuid: {
                    type: StringConstructor;
                    index: true;
                    default: () => string;
                };
                departmentId: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                    index: true;
                };
                vehicleId: {
                    type: StringConstructor;
                    default: string;
                    required: true;
                    minlength: number;
                };
                radioName: {
                    type: StringConstructor;
                    default: string;
                    required: true;
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
                    required: true;
                    minlength: number;
                };
                statusCode: {
                    type: StringConstructor;
                    default: string;
                    required: true;
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
                    type: (import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
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
}> & {
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
        } & Pick<import("mongoose").Document<any>, "get" | "set" | "delete" | "update" | "invalidate" | "populate" | "__v" | "$ignore" | "$isDefault" | "$isDeleted" | "$isEmpty" | "$isValid" | "$locals" | "$markValid" | "$op" | "$session" | "$set" | "$where" | "baseModelName" | "collection" | "db" | "deleteOne" | "depopulate" | "directModifiedPaths" | "equals" | "errors" | "execPopulate" | "getChanges" | "id" | "increment" | "init" | "isDirectModified" | "isDirectSelected" | "isInit" | "isModified" | "isNew" | "isSelected" | "markModified" | "modifiedPaths" | "model" | "modelName" | "overwrite" | "populated" | "remove" | "replaceOne" | "save" | "schema" | "toJSON" | "toObject" | "unmarkModified" | "updateOne" | "validate" | "validateSync"> & {
            _id: import("bson").ObjectId;
        } & {
            schema: import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
                _interface: import("../helpers").MongooseInterface<{
                    uuid: {
                        type: StringConstructor;
                        index: true;
                        default: () => string;
                    };
                    departmentId: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                        index: true;
                    };
                    vehicleId: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                        minlength: number;
                    };
                    radioName: {
                        type: StringConstructor;
                        default: string;
                        required: true;
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
                        required: true;
                        minlength: number;
                    };
                    statusCode: {
                        type: StringConstructor;
                        default: string;
                        required: true;
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
                        type: (import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
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
        } & Pick<import("mongoose").Document<any>, "get" | "set" | "delete" | "update" | "invalidate" | "populate" | "__v" | "$ignore" | "$isDefault" | "$isDeleted" | "$isEmpty" | "$isValid" | "$locals" | "$markValid" | "$op" | "$session" | "$set" | "$where" | "baseModelName" | "collection" | "db" | "deleteOne" | "depopulate" | "directModifiedPaths" | "equals" | "errors" | "execPopulate" | "getChanges" | "id" | "increment" | "init" | "isDirectModified" | "isDirectSelected" | "isInit" | "isModified" | "isNew" | "isSelected" | "markModified" | "modifiedPaths" | "model" | "modelName" | "overwrite" | "populated" | "remove" | "replaceOne" | "save" | "schema" | "toJSON" | "toObject" | "unmarkModified" | "updateOne" | "validate" | "validateSync"> & {
            _id: import("bson").ObjectId;
        } & {
            schema: import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
                _interface: import("../helpers").MongooseInterface<{
                    uuid: {
                        type: StringConstructor;
                        index: true;
                        default: () => string;
                    };
                    departmentId: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                        index: true;
                    };
                    vehicleId: {
                        type: StringConstructor;
                        default: string;
                        required: true;
                        minlength: number;
                    };
                    radioName: {
                        type: StringConstructor;
                        default: string;
                        required: true;
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
                        required: true;
                        minlength: number;
                    };
                    statusCode: {
                        type: StringConstructor;
                        default: string;
                        required: true;
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
                        type: (import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
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
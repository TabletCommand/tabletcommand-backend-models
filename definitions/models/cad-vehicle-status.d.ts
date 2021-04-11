import { MongooseModule, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
import { Document, Model } from "mongoose";
export declare function CADVehicleStatusModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
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
        type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
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
        }>, unknown>)[];
        default: never[];
    };
    capability: {
        type: StringConstructor;
        default: string;
    };
}>, {
    propagateToObject<T>(dbItem: import("../helpers").MongooseInterface<{
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
            type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
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
            }>, unknown>)[];
            default: never[];
        };
        capability: {
            type: StringConstructor;
            default: string;
        };
    }> & import("../helpers").MongooseDocument & {
        schema: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & {
            __interface: import("../helpers").MongooseInterface<{
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
                    type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
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
                    }>, unknown>)[];
                    default: never[];
                };
                capability: {
                    type: StringConstructor;
                    default: string;
                };
            }>;
        };
    }, callback: (o: import("../helpers").MongooseInterface<{
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
            type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
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
            }>, unknown>)[];
            default: never[];
        };
        capability: {
            type: StringConstructor;
            default: string;
        };
    }> & import("../helpers").MongooseDocument & {
        schema: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & {
            __interface: import("../helpers").MongooseInterface<{
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
                    type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
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
                    }>, unknown>)[];
                    default: never[];
                };
                capability: {
                    type: StringConstructor;
                    default: string;
                };
            }>;
        };
    }) => T): T;
}>>;
export interface CADVehicleStatus extends Document, ItemTypeFromTypeSchemaFunction<typeof CADVehicleStatusModule> {
}
export interface CADVehicleStatusModel extends Model<CADVehicleStatus> {
}
declare const _default: ReplaceModelReturnType<typeof CADVehicleStatusModule, CADVehicleStatusModel>;
export default _default;

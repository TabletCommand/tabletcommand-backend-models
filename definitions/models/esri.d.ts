import { ItemTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType, retrieveCurrentUnixTime } from "../helpers";
import { Document, Model } from "mongoose";
export declare function EsriModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: import("mongoose").Types.ObjectIdConstructor;
        auto: true;
    };
    modified_unix_date: {
        type: NumberConstructor;
        default: typeof retrieveCurrentUnixTime;
    };
    departmentId: {
        type: import("mongoose").Types.ObjectIdConstructor;
        ref: string;
        required: true;
    };
    tokenDateExpiry: {
        type: NumberConstructor;
        default: number;
    };
    token: {
        type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            access_token: {
                type: StringConstructor;
                default: string;
            };
            refresh_token: {
                type: StringConstructor;
                default: string;
            };
            username: {
                type: StringConstructor;
                default: string;
            };
            ssl: {
                type: BooleanConstructor;
                default: boolean;
            };
            expires_in: {
                type: NumberConstructor;
                default: number;
            };
        }>, unknown>;
        default: null;
    };
    tokenError: {
        type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            code: {
                type: NumberConstructor;
                default: number;
            };
            error: {
                type: StringConstructor;
                default: string;
            };
            error_description: {
                type: StringConstructor;
                default: string;
            };
            message: {
                type: StringConstructor;
                default: string;
            };
        }>, unknown>;
        default: null;
    };
    auth: {
        type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            username: {
                type: StringConstructor;
                default: string;
            };
            encrypted: {
                type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
                    iv: {
                        type: StringConstructor;
                        default: string;
                    };
                    encryptedData: {
                        type: StringConstructor;
                        default: string;
                    };
                }>, unknown>;
                default: null;
            };
        }>, unknown>;
        default: null;
    };
    authError: {
        type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            code: {
                type: NumberConstructor;
                default: number;
            };
            error: {
                type: StringConstructor;
                default: string;
            };
            error_description: {
                type: StringConstructor;
                default: string;
            };
            message: {
                type: StringConstructor;
                default: string;
            };
        }>, unknown>;
        default: null;
    };
    fireMapperAuth: {
        type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            username: {
                type: StringConstructor;
                default: string;
            };
            encrypted: {
                type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
                    iv: {
                        type: StringConstructor;
                        default: string;
                    };
                    encryptedData: {
                        type: StringConstructor;
                        default: string;
                    };
                }>, unknown>;
                default: null;
            };
            encryptedAccessCode: {
                type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
                    iv: {
                        type: StringConstructor;
                        default: string;
                    };
                    encryptedData: {
                        type: StringConstructor;
                        default: string;
                    };
                }>, unknown>;
                default: null;
            };
        }>, unknown>;
        default: null;
    };
    maps: {
        type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            mapLayers: {
                type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
                    layerId: {
                        type: StringConstructor;
                        default: string;
                    };
                    itemId: {
                        type: StringConstructor;
                        default: string;
                    };
                    title: {
                        type: StringConstructor;
                        default: string;
                    };
                    layerType: {
                        type: StringConstructor;
                        default: string;
                    };
                    url: {
                        type: StringConstructor;
                        default: string;
                    };
                    visibility: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    opacity: {
                        type: NumberConstructor;
                        default: number;
                    };
                }>, unknown>)[];
                default: never[];
            };
            baseMap: {
                type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
                    baseMapLayers: {
                        type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
                            layerId: {
                                type: StringConstructor;
                                default: string;
                            };
                            itemId: {
                                type: StringConstructor;
                                default: string;
                            };
                            title: {
                                type: StringConstructor;
                                default: string;
                            };
                            layerType: {
                                type: StringConstructor;
                                default: string;
                            };
                            url: {
                                type: StringConstructor;
                                default: string;
                            };
                            visibility: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            opacity: {
                                type: NumberConstructor;
                                default: number;
                            };
                        }>, unknown>)[];
                        default: never[];
                    };
                    title: {
                        type: StringConstructor;
                        default: string;
                    };
                }>, unknown>;
            };
            offline: {
                type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
                    status: {
                        type: StringConstructor;
                        default: string;
                    };
                    itemId: {
                        type: StringConstructor;
                        default: string;
                    };
                    title: {
                        type: StringConstructor;
                        default: string;
                    };
                    url: {
                        type: StringConstructor;
                        default: string;
                    };
                    access: {
                        type: StringConstructor;
                        default: string;
                    };
                    owner: {
                        type: StringConstructor;
                        default: string;
                    };
                    type: {
                        type: StringConstructor;
                        default: string;
                    };
                    modified: {
                        type: NumberConstructor;
                        default: number;
                    };
                }>, unknown>)[];
                default: never[];
            };
            tags: {
                type: StringConstructor[];
                default: never[];
            };
            development: {
                type: BooleanConstructor;
                default: boolean;
            };
            itemId: {
                type: StringConstructor;
                default: string;
            };
            title: {
                type: StringConstructor;
                default: string;
            };
            url: {
                type: StringConstructor;
                default: string;
            };
            access: {
                type: StringConstructor;
                default: string;
            };
            owner: {
                type: StringConstructor;
                default: string;
            };
            type: {
                type: StringConstructor;
                default: string;
            };
            modified: {
                type: NumberConstructor;
                default: number;
            };
        }>, unknown>)[];
        default: never[];
    };
    mapsProperties: {
        type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            itemId: {
                type: StringConstructor;
                default: string;
            };
            download: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, unknown>)[];
        default: never[];
    };
}>, unknown>>;
export interface Esri extends Document, ItemTypeFromTypeSchemaFunction<typeof EsriModule> {
}
export interface EsriModel extends Model<Esri> {
}
declare const _default: ReplaceModelReturnType<typeof EsriModule, EsriModel>;
export default _default;

/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function EsriModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    modified_unix_date: number;
    departmentId: import("bson").ObjectId;
    tokenDateExpiry: number;
    token: import("../helpers").MongooseInterface<{
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
    }>;
    tokenError: import("../helpers").MongooseInterface<{
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
    }>;
    auth: import("../helpers").MongooseInterface<{
        username: {
            type: StringConstructor;
            default: string;
        };
        encrypted: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    iv: {
                        type: StringConstructor;
                        default: string;
                    };
                    encryptedData: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            };
            default: null;
        };
    }>;
    authError: import("../helpers").MongooseInterface<{
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
    }>;
    fireMapperAuth: import("../helpers").MongooseInterface<{
        username: {
            type: StringConstructor;
            default: string;
        };
        encrypted: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    iv: {
                        type: StringConstructor;
                        default: string;
                    };
                    encryptedData: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            };
            default: null;
        };
    }>;
    maps: import("../helpers").MongooseInterface<{
        mapLayers: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
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
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        baseMap: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    baseMapLayers: {
                        type: (import("mongoose").Schema<any> & {
                            _interface: import("../helpers").MongooseInterface<{
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
                            }>;
                            _methods: unknown;
                        })[];
                        default: never[];
                    };
                    title: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            };
        };
        offline: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    download: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    id: {
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
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        tags: {
            type: StringConstructor[];
            default: never[];
        };
        id: {
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
    }>[];
}, {}> & {
    __methods?: unknown;
}>;
export interface Esri extends ItemTypeFromTypeSchemaFunction<typeof EsriModule> {
}
export interface EsriModel extends ModelTypeFromTypeSchemaFunction<Esri> {
}
declare const _default: ReplaceModelReturnType<typeof EsriModule, EsriModel>;
export default _default;
//# sourceMappingURL=esri.d.ts.map
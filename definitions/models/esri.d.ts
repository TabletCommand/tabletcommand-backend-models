/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function EsriSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../helpers").MongooseInterface<{
        _id: {
            type: import("mongoose").Types.ObjectIdConstructor;
            auto: boolean;
        };
        runAt: {
            type: DateConstructor;
            default: Date;
        };
        departmentId: {
            type: import("mongoose").Types.ObjectIdConstructor;
            ref: string;
            required: boolean;
        };
        auth: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
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
                _methods: unknown;
            };
            default: null;
        };
        authError: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
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
                _methods: unknown;
            };
            default: null;
        };
        fireMapperAuth: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
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
                    encryptedAccessCode: {
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
                _methods: unknown;
            };
            default: null;
        };
        arcGISGroupIds: {
            type: StringConstructor[];
            default: never[];
        };
        arcGISAuth: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
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
                _methods: unknown;
            };
            default: null;
        };
        arcGISMigrated: {
            type: BooleanConstructor;
            default: boolean;
        };
        review: {
            type: ObjectConstructor;
            default: null;
        };
        reviewRunAt: {
            type: DateConstructor;
            default: null;
        };
        maps: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
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
                                access: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                owner: {
                                    type: StringConstructor;
                                    default: string;
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
                                            access: {
                                                type: StringConstructor;
                                                default: string;
                                            };
                                            owner: {
                                                type: StringConstructor;
                                                default: string;
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
                                modifiedAt: {
                                    type: DateConstructor;
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
                    development: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    size: {
                        type: NumberConstructor;
                        default: number;
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
                    modifiedAt: {
                        type: DateConstructor;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        mapsProperties: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    itemId: {
                        type: StringConstructor;
                        default: string;
                    };
                    download: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        mapLastUpdated: {
            type: DateConstructor;
            default: Date;
        };
    }>;
    _methods: unknown;
};
export declare function EsriModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectID;
    runAt: string;
    departmentId: import("bson").ObjectID;
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
        encryptedAccessCode: {
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
    arcGISGroupIds: string[];
    arcGISAuth: import("../helpers").MongooseInterface<{
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
    arcGISMigrated: boolean;
    review: any;
    reviewRunAt: string;
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
                    access: {
                        type: StringConstructor;
                        default: string;
                    };
                    owner: {
                        type: StringConstructor;
                        default: string;
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
                                access: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                owner: {
                                    type: StringConstructor;
                                    default: string;
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
                    modifiedAt: {
                        type: DateConstructor;
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
        development: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: NumberConstructor;
            default: number;
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
        modifiedAt: {
            type: DateConstructor;
        };
    }>[];
    mapsProperties: import("../helpers").MongooseInterface<{
        itemId: {
            type: StringConstructor;
            default: string;
        };
        download: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>[];
    mapLastUpdated: string;
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
/// <reference types="mongoose" />
import { MongooseModule } from "../../helpers";
export default function EsriMapSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../../helpers").MongooseInterface<{
        mapLayers: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../../helpers").MongooseInterface<{
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
                _interface: import("../../helpers").MongooseInterface<{
                    baseMapLayers: {
                        type: (import("mongoose").Schema<any> & {
                            _interface: import("../../helpers").MongooseInterface<{
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
                _interface: import("../../helpers").MongooseInterface<{
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
                    size: {
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
        modifiedAt: {
            type: DateConstructor;
        };
        size: {
            type: NumberConstructor;
            default: number;
        };
    }>;
    _methods: unknown;
};
//# sourceMappingURL=esri-map.d.ts.map
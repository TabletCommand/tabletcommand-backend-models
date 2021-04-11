/// <reference types="mongoose" />
import { MongooseModule } from "../../helpers";
export default function EsriMapModule(mongoose: MongooseModule): import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & import("../../helpers").PrivateSchemaInfo<import("../../helpers").MongooseInterface<{
    mapLayers: {
        type: (import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & import("../../helpers").PrivateSchemaInfo<import("../../helpers").MongooseInterface<{
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
        type: import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & import("../../helpers").PrivateSchemaInfo<import("../../helpers").MongooseInterface<{
            baseMapLayers: {
                type: (import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & import("../../helpers").PrivateSchemaInfo<import("../../helpers").MongooseInterface<{
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
        type: (import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & import("../../helpers").PrivateSchemaInfo<import("../../helpers").MongooseInterface<{
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
}>, unknown>;

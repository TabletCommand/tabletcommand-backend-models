"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function EsriMapSchema(mongoose) {
    const { Schema } = mongoose;
    const MapLayer = new Schema({
        layerId: {
            type: String,
            default: "",
        },
        itemId: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        layerType: {
            type: String,
            default: "",
        },
        url: {
            type: String,
            default: "",
        },
        visibility: {
            type: Boolean,
            default: false,
        },
        opacity: {
            type: Number,
            default: 1,
        },
        access: {
            type: String,
            default: "",
        },
        owner: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    const BaseMap = new Schema({
        baseMapLayers: {
            type: [MapLayer],
            default: [],
        },
        title: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    // Use a simpler set for Offline Maps
    const SimpleMapSchema = {
        itemId: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        url: {
            type: String,
            default: "",
        },
        access: {
            type: String,
            default: "",
        },
        owner: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "",
        },
        modified: {
            type: Number,
            default: 0,
        },
        modifiedAt: {
            type: Date,
        },
    };
    const OfflineMap = new Schema(Object.assign(Object.assign({}, SimpleMapSchema), { status: {
            type: String,
            default: "",
        } }), {
        _id: false,
        id: false,
    });
    const Map = new Schema(Object.assign(Object.assign({}, SimpleMapSchema), { mapLayers: {
            type: [MapLayer],
            default: [],
        }, baseMap: {
            type: BaseMap
        }, offline: {
            type: [OfflineMap],
            default: [],
        }, tags: {
            type: [String],
            default: [],
        }, development: {
            type: Boolean,
            default: false,
        }, size: {
            type: Number,
            default: 0,
        } }), {
        _id: false,
        id: false,
    });
    return Map;
}
exports.default = EsriMapSchema;
//# sourceMappingURL=esri-map.js.map
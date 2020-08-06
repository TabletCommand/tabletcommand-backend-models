"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
function EsriMapModule(mongoose) {
    const { Schema } = mongoose;
    const MapLayer = helpers_1.createSchema(Schema, {
        id: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        type: {
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
        styleUrl: {
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
    }, {
        _id: false,
    });
    const BaseMap = helpers_1.createSchema(Schema, {
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
    });
    const Map = helpers_1.createSchema(Schema, {
        id: {
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
        tags: {
            type: [String],
            default: [],
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
        mapLayers: {
            type: [MapLayer],
            default: [],
        },
        baseMap: {
            type: BaseMap
        },
    }, {
        _id: false,
    });
    return Map;
}
exports.default = EsriMapModule;
//# sourceMappingURL=esri-map.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GeoJSONPointSchema(mongoose) {
    const { Schema } = mongoose;
    const GeoJSONPoint = new Schema({
        type: {
            type: String,
            required: true,
            enum: ["Point"],
            default: "Point",
        },
        coordinates: {
            type: [Number],
            required: true,
            default: [],
        },
    }, {
        _id: false,
        id: false,
    });
    return GeoJSONPoint;
}
exports.default = GeoJSONPointSchema;
//# sourceMappingURL=geojson-point.js.map
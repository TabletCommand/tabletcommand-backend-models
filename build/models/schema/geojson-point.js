"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
function GeoJSONPointModule(mongoose) {
    const { Schema } = mongoose;
    const GeoJSONPoint = helpers_1.createSchema(Schema, {
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
    });
    return GeoJSONPoint;
}
exports.default = GeoJSONPointModule;
//# sourceMappingURL=geojson-point.js.map
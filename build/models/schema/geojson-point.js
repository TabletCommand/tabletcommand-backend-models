"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
function GeoJSONPointModule(mongoose) {
    const { Schema } = mongoose;
    const GeoJSONPoint = helpers_1.createSchema(Schema, {
        type: {
            type: String,
            default: "Point",
        },
        coordinates: {
            type: [Number],
            default: [],
        },
    }, {
        _id: false,
    });
    return GeoJSONPoint;
}
exports.default = GeoJSONPointModule;
//# sourceMappingURL=geojson-point.js.map
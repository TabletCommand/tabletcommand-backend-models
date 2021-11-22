"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
function ColorSchema(mongoose) {
    const { Schema } = mongoose;
    const Color = (0, helpers_1.createSchema)(Schema, {
        background: {
            type: String,
            default: "#851414", // Red-like
        },
        text: {
            type: String,
            default: "#F8F8F8", // White-like
        },
    }, {
        _id: false,
        id: false,
    });
    return Color;
}
exports.default = ColorSchema;
//# sourceMappingURL=color.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
function ColorModule(mongoose) {
    const { Schema } = mongoose;
    const Color = helpers_1.createSchema(Schema, {
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
    });
    return Color;
}
exports.default = ColorModule;
//# sourceMappingURL=color.js.map
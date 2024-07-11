"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ColorSchema(mongoose) {
    const { Schema } = mongoose;
    const Color = new Schema({
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
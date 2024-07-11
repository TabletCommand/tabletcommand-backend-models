"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function EsriErrorSchema(mongoose) {
    const { Schema } = mongoose;
    const EsriError = new Schema({
        code: {
            type: Number,
            default: 1,
        },
        error: {
            type: String,
            default: "",
        },
        error_description: {
            type: String,
            default: "",
        },
        message: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    return EsriError;
}
exports.default = EsriErrorSchema;
//# sourceMappingURL=esri-error.js.map
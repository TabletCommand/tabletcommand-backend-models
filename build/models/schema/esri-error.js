"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
function EsriErrorModule(mongoose) {
    const Schema = mongoose.Schema;
    const EsriError = helpers_1.createSchema(Schema, {
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
    });
    return EsriError;
}
exports.default = EsriErrorModule;
//# sourceMappingURL=esri-error.js.map
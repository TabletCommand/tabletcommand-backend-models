"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
function EsriTokenSchema(mongoose) {
    const Schema = mongoose.Schema;
    const EsriToken = (0, helpers_1.createSchema)(Schema, {
        access_token: {
            type: String,
            default: "",
        },
        refresh_token: {
            type: String,
            default: "",
        },
        username: {
            type: String,
            default: "",
        },
        ssl: {
            type: Boolean,
            default: true,
        },
        expires_in: {
            type: Number,
            default: 1800,
        },
    }, {
        _id: false,
        id: false,
    });
    return EsriToken;
}
exports.default = EsriTokenSchema;
//# sourceMappingURL=esri-token.js.map
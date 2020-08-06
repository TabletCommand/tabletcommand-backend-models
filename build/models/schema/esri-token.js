"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
function EsriTokenModule(mongoose) {
    const Schema = mongoose.Schema;
    const EsriToken = helpers_1.createSchema(Schema, {
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
    });
    return EsriToken;
}
exports.default = EsriTokenModule;
//# sourceMappingURL=esri-token.js.map
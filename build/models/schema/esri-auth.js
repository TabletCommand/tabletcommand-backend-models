"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
function EsriAuthSchema(mongoose) {
    const { Schema } = mongoose;
    const EsriAuthPassword = (0, helpers_1.createSchema)(Schema, {
        iv: {
            type: String,
            default: "",
        },
        encryptedData: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    const EsriAuth = (0, helpers_1.createSchema)(Schema, {
        username: {
            type: String,
            default: "",
        },
        encrypted: {
            type: EsriAuthPassword,
            default: null,
        },
    }, {
        _id: false,
        id: false,
    });
    return EsriAuth;
}
exports.default = EsriAuthSchema;
//# sourceMappingURL=esri-auth.js.map
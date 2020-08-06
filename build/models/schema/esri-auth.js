"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
function EsriAuthModule(mongoose) {
    const { Schema } = mongoose;
    const EsriAuthPassword = helpers_1.createSchema(Schema, {
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
    });
    const EsriAuth = helpers_1.createSchema(Schema, {
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
    });
    return EsriAuth;
}
exports.default = EsriAuthModule;
//# sourceMappingURL=esri-auth.js.map
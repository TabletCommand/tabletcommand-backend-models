"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function EsriAuthSchema(mongoose) {
    const { Schema } = mongoose;
    const EsriAuthPassword = new Schema({
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
    const EsriAuth = new Schema({
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
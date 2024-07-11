"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function FireMapperAuthSchema(mongoose) {
    const { Schema } = mongoose;
    const FireMapperEncrypted = new Schema({
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
    const FireMapperAuth = new Schema({
        username: {
            type: String,
            default: "",
        },
        encrypted: {
            type: FireMapperEncrypted,
            default: null,
        },
        encryptedAccessCode: {
            type: FireMapperEncrypted,
            default: null,
        },
    }, {
        _id: false,
        id: false,
    });
    return FireMapperAuth;
}
exports.default = FireMapperAuthSchema;
//# sourceMappingURL=firemapper-auth.js.map
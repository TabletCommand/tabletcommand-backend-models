"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
function FireMapperAuthSchema(mongoose) {
    const { Schema } = mongoose;
    const FireMapperEncrypted = (0, helpers_1.createSchema)(Schema, {
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
    const FireMapperAuth = (0, helpers_1.createSchema)(Schema, {
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
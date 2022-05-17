"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
function AgencyCronSchema(mongoose) {
    const { Schema } = mongoose;
    const EncryptedData = (0, helpers_1.createSchema)(Schema, {
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
    const AgencyCronConfig = (0, helpers_1.createSchema)(Schema, {
        enabled: {
            type: Boolean,
            default: false,
        },
        sourcePath: {
            type: EncryptedData,
            default: null,
        },
        processPath: {
            type: String,
            default: "",
        },
        completedPath: {
            type: String,
            default: "",
        },
        importType: {
            type: String,
            default: "",
        },
        sshPrivateKey: {
            type: EncryptedData,
            default: null,
        },
        sshPublicKey: {
            type: EncryptedData,
            default: null,
        },
        useSSHKey: {
            type: Boolean,
            default: false,
        },
        timezone: {
            type: String,
            default: ""
        },
        customApiPath: {
            type: String,
            default: "",
        }
    }, {
        _id: false,
        id: false,
    });
    return AgencyCronConfig;
}
exports.default = AgencyCronSchema;
//# sourceMappingURL=agency-cron-config.js.map
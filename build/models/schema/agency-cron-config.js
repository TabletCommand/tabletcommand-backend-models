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
    const CronConfigSource = (0, helpers_1.createSchema)(Schema, {
        protocol: {
            type: String,
            default: "",
        },
        username: {
            type: String,
            default: "",
        },
        hostname: {
            type: String,
            default: "",
        },
        filePath: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    const CronConfigSourceDefault = {
        protocol: "",
        username: "",
        hostname: "",
        filePath: "",
    };
    const CronConfigAuth = (0, helpers_1.createSchema)(Schema, {
        password: {
            type: EncryptedData,
            default: null,
        },
        sshPrivateKey: {
            type: EncryptedData,
            default: null,
        },
        // Possibly unused
        sshPublicKey: {
            type: EncryptedData,
            default: null,
        },
        useSSHKey: {
            type: Boolean,
            default: false,
        },
    }, {
        _id: false,
        id: false,
    });
    const CronConfigAuthDefault = {
        password: null,
        sshPrivateKey: null,
        sshPublicKey: null,
        useSSHKey: false,
    };
    const AgencyCronConfig = (0, helpers_1.createSchema)(Schema, {
        enabled: {
            type: Boolean,
            default: false,
        },
        // sftp://user@host:port/path/to/file.xml
        source: {
            type: CronConfigSource,
            default: CronConfigSourceDefault,
        },
        // password OR SSH private key (with flag useSSHKey = true)
        auth: {
            type: CronConfigAuth,
            default: CronConfigAuthDefault,
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
        timezone: {
            type: String,
            default: ""
        },
        customApiPath: {
            type: String,
            default: "",
        },
        alterChunkSize: {
            type: Boolean,
            default: false,
        },
    }, {
        _id: false,
        id: false,
    });
    return AgencyCronConfig;
}
exports.default = AgencyCronSchema;
//# sourceMappingURL=agency-cron-config.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteLogModule = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
async function RemoteLogModule(mongoose) {
    const { Schema, Types } = mongoose;
    const FileSchema = helpers_1.createSchema(Schema, {
        originalName: {
            type: String,
            default: "", // e.g database.sqlite
        },
        encoding: {
            type: String,
            default: "", // e.g utf8
        },
        mimeType: {
            type: String,
            default: "", // e.g application/text
        },
        localPath: {
            type: String,
            default: "", // e.g /tmp/some/path
        },
        remotePath: {
            type: String,
            default: "", // e.g https://google.com?
        },
        size: {
            type: Number,
            default: 0,
        },
        received: {
            type: Date,
            default: helpers_1.currentDate,
        },
    }, {
        _id: false,
    });
    const modelSchema = helpers_1.createSchema(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        departmentId: {
            type: String,
            default: "",
            required: true,
            index: true,
        },
        userId: {
            type: String,
            default: "",
        },
        session: {
            type: String,
            default: "",
        },
        active: {
            type: Boolean,
            default: false,
        },
        uuid: {
            type: String,
            default: uuid.v4,
        },
        requestId: {
            type: String,
            default: uuid.v4,
        },
        received: {
            type: Date,
            default: helpers_1.currentDate,
        },
        hostname: {
            type: String,
            default: "",
        },
        status: {
            type: String,
            default: "", // local, uploading, synced (uploaded to a remote storage) 
        },
        lastStatusChange: {
            type: Date,
            default: helpers_1.currentDate,
        },
        files: {
            type: [FileSchema],
            default: [],
        },
    }, {
        collection: "massive_remote_log",
    });
    modelSchema.set("autoIndex", false);
    return helpers_1.createModel(mongoose, "RemoteLog", modelSchema);
}
exports.RemoteLogModule = RemoteLogModule;
exports.default = RemoteLogModule;
//# sourceMappingURL=remote-log.js.map
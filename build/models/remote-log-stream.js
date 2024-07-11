"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const helpers_1 = require("../helpers");
async function RemoteLogStreamModule(mongoose) {
    const { Schema } = mongoose;
    const FileSchema = new Schema({
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
        fieldname: {
            type: String,
            default: "", // e.g "database" or "logs"
        },
        localPath: {
            type: String,
            default: "", // e.g /tmp/some/path
        },
        remotePath: {
            type: String,
            default: "", // e.g https://google.com?
        },
        hostname: {
            type: String,
            default: "", // e.g ip-10-6-56-205.ca-central-1.compute.internal
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
        id: false,
    });
    const modelSchema = new Schema({
        _id: {
            type: Schema.Types.ObjectId,
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
        isCADRequest: {
            type: Boolean,
            default: false,
        },
        session: {
            type: String,
            default: "",
        },
        requestId: {
            type: String,
            default: uuid.v4,
        },
        requested: {
            type: Date,
        },
        active: {
            type: Boolean,
            default: false,
        },
        uuid: {
            type: String,
            default: uuid.v4,
        },
        createdAt: {
            type: Date,
            default: helpers_1.currentDate,
        },
        updatedAt: {
            type: Date,
            default: helpers_1.currentDate,
        },
        status: {
            type: String,
            default: "", // local, uploading, synced (uploaded to a remote storage) 
        },
        // Formerly message.title
        message: {
            type: String,
            default: "",
        },
        // Formerly message.body
        manifest: {
            type: [String],
            default: [],
        },
        // Formerly message.type.typeOpts.userAgent
        userAgent: {
            type: String,
            default: "",
        },
        // Formerly message.type.typeOpts.appVersion
        appVersion: {
            type: String,
            default: "",
        },
        file: {
            type: FileSchema,
        },
    }, {
        autoIndex: false,
        timestamps: true,
    });
    return mongoose.model("RemoteLogStream", modelSchema, "massive_remote_log_stream", { overwriteModels: true });
}
exports.default = RemoteLogStreamModule;
//# sourceMappingURL=remote-log-stream.js.map
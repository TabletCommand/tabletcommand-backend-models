"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const helpers_1 = require("../helpers");
const remote_file_1 = require("./schema/remote-file");
async function RemoteLogModule(mongoose) {
    const { Schema } = mongoose;
    const RemoteFile = (0, remote_file_1.default)(mongoose);
    const modelSchema = new Schema({
        _id: {
            type: Schema.Types.ObjectId,
            auto: true,
        },
        departmentId: {
            type: String,
            default: "",
            required: true,
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
        active: {
            type: Boolean,
            default: false,
        },
        createdAt: {
            type: Date,
            default: helpers_1.currentDate,
        },
        updatedAt: {
            type: Date,
            default: helpers_1.currentDate,
        },
        notifiedAt: {
            type: Date,
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
        files: {
            type: [RemoteFile],
            default: [],
        },
        // Google Drive
        remoteFolderPath: {
            type: String,
            default: "", // e.g https://drive.google.com/drive/folders/1efgEFG
        },
        remoteFolderId: {
            type: String,
            default: "", // e.g 1efgEFG
        },
    }, {
        autoIndex: false,
        timestamps: true,
    });
    return mongoose.model("RemoteLog", modelSchema, "massive_remote_log", { overwriteModels: true });
}
exports.default = RemoteLogModule;
//# sourceMappingURL=remote-log.js.map
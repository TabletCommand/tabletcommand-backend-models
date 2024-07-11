"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
async function ReleaseNoteModule(mongoose) {
    const { Schema } = mongoose;
    const modelSchema = new Schema({
        _id: {
            type: Schema.Types.ObjectId,
            auto: true,
        },
        title: {
            type: String,
            default: "",
        },
        notes: {
            type: String,
            default: "",
        },
        version: {
            type: String,
            default: "",
        },
        releaseDate: {
            type: Date,
        },
        status: {
            type: String,
            default: "draft"
        },
        modified: {
            type: Date,
            default: helpers_1.currentDate,
        },
    }, { autoIndex: false });
    return mongoose.model("ReleaseNote", modelSchema, "massive_release_note", { overwriteModels: true });
}
exports.default = ReleaseNoteModule;
//# sourceMappingURL=release-note.js.map
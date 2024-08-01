"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseNoteModule = void 0;
const helpers_1 = require("../helpers");
async function ReleaseNoteModule(mongoose) {
    const { Schema, Types } = mongoose;
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        _id: {
            type: Types.ObjectId,
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
        devNotes: {
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
    }, {
        collection: "massive_release_note",
    });
    modelSchema.set("autoIndex", false);
    return (0, helpers_1.createModel)(mongoose, "ReleaseNote", modelSchema);
}
exports.ReleaseNoteModule = ReleaseNoteModule;
exports.default = ReleaseNoteModule;
//# sourceMappingURL=release-note.js.map
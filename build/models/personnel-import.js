"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonnelImportSchema = void 0;
const helpers_1 = require("../helpers");
function PersonnelImportSchema(mongoose) {
    const { Schema } = mongoose;
    const Radio = new Schema({
        radioName: {
            type: String,
        },
        active: {
            type: Boolean,
            default: true,
        },
        source: {
            type: String,
            default: "",
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
        PersonnelID: {
            type: String,
            required: true,
        },
        PersonnelName: {
            type: String,
            required: true,
        },
        PersonnelRank: {
            type: String,
            default: ""
        },
        PersonnelWorkCode: {
            type: String,
            default: ""
        },
        PersonnelNote: {
            type: String,
            default: ""
        },
        departmentId: {
            type: String,
        },
        radioNames: {
            type: [String],
            default: [],
        },
        radios: {
            type: [Radio],
            default: [],
        },
        shiftStartTime: {
            type: Number,
            default: 0,
        },
        shiftEndTime: {
            type: Number,
            default: 0,
        },
        shiftStart: {
            type: Date || String,
            default: "",
        },
        shiftEnd: {
            type: Date || String,
            default: "",
        },
        // Cases matches the other modified_unix_date
        modified_unix_date: {
            type: Number,
            default: helpers_1.retrieveCurrentUnixTime,
        },
        modified: {
            type: Date,
            default: helpers_1.currentDate,
        },
        active: {
            type: Boolean,
            default: false,
        },
        agencyName: {
            type: String,
            default: ""
        },
        agencyCode: {
            type: String,
            default: ""
        },
        agencyId: {
            type: Schema.Types.ObjectId,
            ref: "Agency",
            default: null,
        },
        importNotes: {
            type: String,
            default: "",
        },
    }, {
        collection: "massive_personnel_import",
    });
    modelSchema.set("autoIndex", false);
    return modelSchema;
}
exports.PersonnelImportSchema = PersonnelImportSchema;
async function PersonnelImportModule(mongoose) {
    const modelSchema = PersonnelImportSchema(mongoose);
    return mongoose.model("PersonnelImport", modelSchema);
}
exports.default = PersonnelImportModule;
//# sourceMappingURL=personnel-import.js.map
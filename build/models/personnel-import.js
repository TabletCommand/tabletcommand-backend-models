"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonnelImportModule = void 0;
const helpers_1 = require("../helpers");
async function PersonnelImportModule(mongoose) {
    const { Schema, Types } = mongoose;
    const modelSchema = helpers_1.createSchema(Schema, {
        _id: {
            type: Types.ObjectId,
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
        shiftStartTime: {
            type: Number,
            default: 0,
        },
        shiftEndTime: {
            type: Number,
            default: 0,
        },
        shiftStart: {
            type: Date,
            default: "",
        },
        shiftEnd: {
            type: Date,
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
            type: mongoose.Schema.Types.ObjectId,
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
    return helpers_1.createModel(mongoose, "PersonnelImport", modelSchema);
}
exports.PersonnelImportModule = PersonnelImportModule;
exports.default = PersonnelImportModule;
//# sourceMappingURL=personnel-import.js.map
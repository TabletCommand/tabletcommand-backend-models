"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
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
        },
        PersonnelWorkCode: {
            type: String,
        },
        PersonnelNote: {
            type: String,
        },
        departmentId: {
            type: String,
        },
        radioName: {
            type: String,
        },
        shiftStartTime: {
            type: Number,
        },
        shiftEndTime: {
            type: Number,
        },
        // Cases matches the other modified_unix_date
        modified_unix_date: {
            type: Number,
            default: new Date().valueOf() / 1000.0,
        },
    }, {
        collection: "massive_import_personnel",
    });
    modelSchema.set("autoIndex", false);
    return helpers_1.createModel(mongoose, "PersonnelImport", modelSchema);
}
exports.PersonnelImportModule = PersonnelImportModule;
exports.default = PersonnelImportModule;
//# sourceMappingURL=personnel-import.js.map
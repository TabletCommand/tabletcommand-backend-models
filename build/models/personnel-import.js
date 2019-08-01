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
        DepartmentId: {
            type: String,
        },
        UnitID: {
            type: String,
        },
        ShiftStartDateTime: {
            type: Number,
        },
        ShiftEndDateTime: {
            type: Number,
        },
        ImportedDateTime: {
            type: Number,
            default: new Date().valueOf() / 1000.0,
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
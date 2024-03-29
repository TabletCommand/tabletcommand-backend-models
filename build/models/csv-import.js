"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVImportModule = void 0;
const helpers_1 = require("../helpers");
async function CSVImportModule(mongoose) {
    const { Schema, Types } = mongoose;
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        batchId: {
            type: String,
            required: true,
        },
        importCreated: {
            type: Date,
            default: helpers_1.currentDate,
        },
        importEnded: {
            type: Date,
        },
        status: {
            type: String,
            default: "",
        },
        departmentId: {
            type: String
        },
        agencyId: {
            type: String,
        },
        importType: {
            type: String,
        },
        fileType: {
            type: String,
        },
        fileName: {
            type: String,
        },
        fileSize: {
            type: String,
        },
        fileLastModified: {
            type: Date,
            default: helpers_1.currentDate,
        },
        records: {
            type: [Object],
            default: [],
        },
        modifiedDate: {
            type: Date,
            default: helpers_1.currentDate,
        },
        userId: {
            type: String,
        },
        sendNotification: {
            type: Boolean,
            default: false
        },
    }, {
        collection: "massive_csv_import",
    });
    modelSchema.set("autoIndex", false);
    return (0, helpers_1.createModel)(mongoose, "CSVImport", modelSchema);
}
exports.CSVImportModule = CSVImportModule;
exports.default = CSVImportModule;
//# sourceMappingURL=csv-import.js.map
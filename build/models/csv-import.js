"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
async function CSVImportModule(mongoose) {
    const { Schema } = mongoose;
    const modelSchema = new Schema({
        _id: {
            type: Schema.Types.ObjectId,
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
    return mongoose.model("CSVImport", modelSchema);
}
exports.default = CSVImportModule;
//# sourceMappingURL=csv-import.js.map
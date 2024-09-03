"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationReportSchema = void 0;
const helpers_1 = require("../helpers");
const validation_error_item_1 = require("./schema/validation-error-item");
function ValidationReportSchema(mongoose) {
    const { Schema } = mongoose;
    const ValidationErrorItem = (0, validation_error_item_1.default)(mongoose);
    const modelSchema = new Schema({
        _id: {
            type: Schema.Types.ObjectId,
            auto: true,
        },
        departmentId: {
            type: Schema.Types.ObjectId,
            ref: "Department",
            required: true,
            unique: true,
        },
        location: {
            type: [ValidationErrorItem],
            default: [],
        },
        statusMap: {
            type: [ValidationErrorItem],
            default: [],
        },
        status: {
            type: [ValidationErrorItem],
            default: [],
        },
        vehicleStatus: {
            type: [ValidationErrorItem],
            default: [],
        },
        vehicle: {
            type: [ValidationErrorItem],
            default: [],
        },
        incident: {
            type: [ValidationErrorItem],
            default: [],
        },
        personnel: {
            type: [ValidationErrorItem],
            default: [],
        },
        modified: {
            type: Date,
            default: helpers_1.currentDate,
        },
    }, {
        autoIndex: false,
    });
    return modelSchema;
}
exports.ValidationReportSchema = ValidationReportSchema;
async function ValidationReportModule(mongoose) {
    const modelSchema = ValidationReportSchema(mongoose);
    return mongoose.model("ValidationReport", modelSchema, "massive_validation_report", { overwriteModels: true });
}
exports.default = ValidationReportModule;
//# sourceMappingURL=validation-report.js.map
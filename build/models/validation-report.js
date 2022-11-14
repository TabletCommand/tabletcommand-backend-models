"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationReportModule = exports.ValidationReportSchema = void 0;
const helpers_1 = require("../helpers");
const validation_error_item_1 = require("./schema/validation-error-item");
function ValidationReportSchema(mongoose) {
    const { Schema, Types } = mongoose;
    const ValidationErrorItem = (0, validation_error_item_1.default)(mongoose);
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        departmentId: {
            type: Types.ObjectId,
            ref: "Department",
            required: true
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
        collection: "massive_validation_report",
    });
    modelSchema.set("autoIndex", false);
    return modelSchema;
}
exports.ValidationReportSchema = ValidationReportSchema;
async function ValidationReportModule(mongoose) {
    const modelSchema = ValidationReportSchema(mongoose);
    return (0, helpers_1.createModel)(mongoose, "ValidationReport", modelSchema);
}
exports.ValidationReportModule = ValidationReportModule;
exports.default = ValidationReportModule;
//# sourceMappingURL=validation-report.js.map
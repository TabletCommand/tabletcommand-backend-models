"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
function ReportNumberModule(mongoose) {
    const { Schema } = mongoose;
    const ReportNumber = (0, helpers_1.createSchema)(Schema, {
        name: {
            type: String,
            default: "",
        },
        number: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
        toJSON: {
            versionKey: false,
        }
    });
    return ReportNumber;
}
exports.default = ReportNumberModule;
//# sourceMappingURL=report-number.js.map
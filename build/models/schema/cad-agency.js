"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
function CADAgency(mongoose) {
    const Schema = mongoose.Schema;
    const Agency = helpers_1.createSchema(Schema, {
        code: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
        domain: {
            type: String,
            default: "",
        },
        personnelApiKey: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
    });
    return Agency;
}
exports.CADAgency = CADAgency;
//# sourceMappingURL=cad-agency.js.map
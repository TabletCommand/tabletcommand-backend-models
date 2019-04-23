"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
function CADAgency(mongoose) {
    var Schema = mongoose.Schema;
    var Agency = helpers_1.createSchema(Schema, {
        code: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: ""
        },
        domain: {
            type: String,
            default: ""
        }
    }, {
        _id: false
    });
    return Agency;
}
exports.CADAgency = CADAgency;
;
//# sourceMappingURL=cad-agency.js.map
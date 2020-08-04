"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
function CADStatusColorModule(mongoose) {
    const { Schema } = mongoose;
    const CADStatusColor = helpers_1.createSchema(Schema, {
        background: {
            type: String,
            default: "#851414",
        },
        text: {
            type: String,
            default: "#F8F8F8",
        },
    }, {
        _id: false,
    });
    return CADStatusColor;
}
exports.default = CADStatusColorModule;
//# sourceMappingURL=cad-status-color.js.map
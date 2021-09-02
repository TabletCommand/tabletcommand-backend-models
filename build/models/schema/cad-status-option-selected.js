"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
function CADStatusOptionSelectedSchema(mongoose) {
    const { Schema } = mongoose;
    const Item = (0, helpers_1.createSchema)(Schema, {
        name: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "string", // integer, bool
        },
        value: {
            type: String,
            default: "",
        },
        key: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
    });
    return Item;
}
exports.default = CADStatusOptionSelectedSchema;
//# sourceMappingURL=cad-status-option-selected.js.map
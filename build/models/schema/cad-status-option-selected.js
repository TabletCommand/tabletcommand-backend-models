"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CADStatusOptionSelectedSchema(mongoose) {
    const { Schema } = mongoose;
    const Item = new Schema({
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
        id: false,
    });
    return Item;
}
exports.default = CADStatusOptionSelectedSchema;
//# sourceMappingURL=cad-status-option-selected.js.map
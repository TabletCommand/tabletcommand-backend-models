"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
function ValidationErrorItemSchema(mongoose) {
    const { Schema } = mongoose;
    const Item = (0, helpers_1.createSchema)(Schema, {
        message: {
            type: String,
            default: "",
        },
        firstSeenAt: {
            type: Date,
            default: helpers_1.currentDate,
        },
        lastSeenAt: {
            type: Date,
            default: helpers_1.currentDate,
        },
        clearedAt: {
            type: Date,
            default: undefined,
        },
        // Req Body
        payload: {
            type: Object,
            default: {}
        },
    }, {
        _id: false,
        id: false,
    });
    return Item;
}
exports.default = ValidationErrorItemSchema;
//# sourceMappingURL=validation-error-item.js.map
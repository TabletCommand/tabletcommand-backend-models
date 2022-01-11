"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
function PubNubTokenSchema(mongoose) {
    const { Schema } = mongoose;
    const Item = (0, helpers_1.createSchema)(Schema, {
        token: {
            type: String,
            default: "",
        },
        expireAt: {
            type: Date,
            default: helpers_1.currentDate,
        },
        runAt: {
            type: Date,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    return Item;
}
exports.default = PubNubTokenSchema;
//# sourceMappingURL=pubnub-token.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
function OAuthSchema(mongoose) {
    const { Schema } = mongoose;
    const Item = (0, helpers_1.createSchema)(Schema, {
        accessToken: {
            type: String,
            default: "",
        },
        refreshToken: {
            type: String,
            default: "",
        },
        expireAt: {
            type: Date,
            default: new Date("2022-10-10T10:10:10Z"), //  Some Expired Date, in the past
        },
    }, {
        _id: false,
        id: false,
    });
    return Item;
}
exports.default = OAuthSchema;
//# sourceMappingURL=oauth.js.map
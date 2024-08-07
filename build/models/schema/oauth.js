"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function OAuthSchema(mongoose) {
    const { Schema } = mongoose;
    const Item = new Schema({
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
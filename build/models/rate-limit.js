"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimitModule = void 0;
const helpers_1 = require("../helpers");
async function RateLimitModule(mongoose) {
    const { Schema, Types } = mongoose;
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        username: String,
        modified_unix_date: {
            type: Number,
            default: 0,
        },
        modified: {
            type: Date,
            default: helpers_1.currentDate,
        },
        count: {
            type: Number,
            default: 0,
        },
    }, {
        collection: "massive_rate_limit",
    });
    modelSchema.set("autoIndex", false);
    return (0, helpers_1.createModel)(mongoose, "RateLimit", modelSchema);
}
exports.RateLimitModule = RateLimitModule;
exports.default = RateLimitModule;
//# sourceMappingURL=rate-limit.js.map
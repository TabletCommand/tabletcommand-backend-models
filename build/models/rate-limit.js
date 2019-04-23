"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
async function RateLimitModule(mongoose) {
    const { Schema, Types } = mongoose;
    var modelSchema = helpers_1.createSchema(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true
        },
        username: String,
        modified_unix_date: {
            type: Number,
            default: 0
        },
        count: {
            type: Number,
            default: 0
        }
    }, {
        collection: "massive_rate_limit"
    });
    modelSchema.set("autoIndex", false);
    return helpers_1.createModel(mongoose, "RateLimit", modelSchema);
}
exports.RateLimitModule = RateLimitModule;
;
exports.default = RateLimitModule;
//# sourceMappingURL=rate-limit.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
async function RateLimitModule(mongoose) {
    const { Schema } = mongoose;
    const modelSchema = new Schema({
        _id: {
            type: Schema.Types.ObjectId,
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
        remoteAddress: {
            type: String,
            default: "",
        },
    }, {
        collection: "massive_rate_limit",
    });
    modelSchema.set("autoIndex", false);
    return mongoose.model("RateLimit", modelSchema);
}
exports.default = RateLimitModule;
//# sourceMappingURL=rate-limit.js.map
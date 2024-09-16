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
        autoIndex: false,
    });
    modelSchema.index({
        username: 1,
        modified_unix_date: 1
    }, {
        name: "username_1_modified_unix_date_1",
    });
    return mongoose.model("RateLimit", modelSchema, "massive_rate_limit", { overwriteModels: true });
}
exports.default = RateLimitModule;
//# sourceMappingURL=rate-limit.js.map
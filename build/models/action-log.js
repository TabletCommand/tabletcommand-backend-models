"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
async function ActionLogModule(mongoose) {
    const { Schema } = mongoose;
    const modelSchema = new Schema({
        _id: {
            type: Schema.Types.ObjectId,
            auto: true,
        },
        departmentId: {
            type: String,
            default: "",
        },
        email: {
            type: String,
            default: "",
        },
        userId: {
            type: String,
            default: "",
        },
        action: {
            type: String,
            default: "",
        },
        object: {
            type: Object,
            default: {},
        },
        before: {
            type: Object,
            default: {},
        },
        after: {
            type: Object,
            default: {},
        },
        delta: {
            type: Object,
            default: {},
        },
        message: {
            type: String,
            default: "",
        },
        createdAt: {
            type: Date,
            default: helpers_1.currentDate,
        },
        modified_unix_date: {
            type: Number,
            default: helpers_1.retrieveCurrentUnixTime,
        },
    }, {
        autoIndex: false
    });
    return mongoose.model("ActionLog", modelSchema, "massive_action_log", { overwriteModels: true });
}
exports.default = ActionLogModule;
//# sourceMappingURL=action-log.js.map
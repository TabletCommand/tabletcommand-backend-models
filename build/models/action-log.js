"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionLogModule = void 0;
const helpers_1 = require("../helpers");
async function ActionLogModule(mongoose) {
    const { Schema, Types } = mongoose;
    const modelSchema = helpers_1.createSchema(Schema, {
        _id: {
            type: Types.ObjectId,
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
        modified_unix_date: {
            type: Number,
            default: helpers_1.retrieveCurrentUnixTime,
        },
    }, {
        collection: "massive_action_log",
    });
    modelSchema.set("autoIndex", false);
    return helpers_1.createModel(mongoose, "ActionLog", modelSchema);
}
exports.ActionLogModule = ActionLogModule;
exports.default = ActionLogModule;
//# sourceMappingURL=action-log.js.map
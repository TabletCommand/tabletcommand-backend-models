"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
async function MailLogModule(mongoose) {
    const { Schema } = mongoose;
    const modelSchema = new Schema({
        _id: {
            type: Schema.Types.ObjectId,
            auto: true,
        },
        mailId: {
            type: String,
            default: ""
        },
        event: {
            type: String,
            default: "",
        },
        timestamp: {
            type: Number,
        },
        recipient: {
            type: String,
            default: "",
        },
        recipientDomain: {
            type: String,
            default: "",
        },
        tags: {
            type: [String],
            default: [],
        },
        deliveryStatus: {
            type: Object,
            default: {},
        },
        message: {
            type: Object,
            default: {},
        },
        flags: {
            type: Object,
            default: {},
        },
        envelope: {
            type: Object,
            default: {},
        },
        logLevel: {
            type: String,
            default: ""
        },
        reason: {
            type: String,
            default: ""
        },
        severity: {
            type: String,
            default: ""
        },
        modified_unix_date: {
            type: Number,
            default: helpers_1.retrieveCurrentUnixTime,
        },
        modified: {
            type: Date,
            default: helpers_1.currentDate,
        },
    }, {
        autoIndex: false,
    });
    return mongoose.model("MailLog", modelSchema, "massive_mail_log", { overwriteModels: true });
}
exports.default = MailLogModule;
//# sourceMappingURL=mail-log.js.map
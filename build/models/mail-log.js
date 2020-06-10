"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailLogModule = void 0;
const helpers_1 = require("../helpers");
async function MailLogModule(mongoose) {
    const { Schema, Types } = mongoose;
    const modelSchema = helpers_1.createSchema(Schema, {
        _id: {
            type: Types.ObjectId,
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
    }, {
        collection: "massive_mail_log",
    });
    modelSchema.set("autoIndex", false);
    return helpers_1.createModel(mongoose, "MailLog", modelSchema);
}
exports.MailLogModule = MailLogModule;
exports.default = MailLogModule;
//# sourceMappingURL=mail-log.js.map
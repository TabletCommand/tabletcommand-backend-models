"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMTPUnhandledModule = void 0;
const helpers_1 = require("../helpers");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");
async function SMTPUnhandledModule(mongoose) {
    const { Schema, Types } = mongoose;
    const modelSchema = helpers_1.createSchema(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        email: {
            type: String,
            default: "",
            required: true,
        },
        message: {
            type: String,
            default: "",
            required: true,
        },
    }, {
        collection: "massive_smtp_unhandled",
    });
    modelSchema.set("toJSON", {
        virtuals: true,
        versionKey: false,
    });
    // eslint-disable-next-line no-unused-vars
    modelSchema.virtual("id").get(function () {
        return this._id.toHexString();
    });
    modelSchema.plugin(mongooseLeanVirtuals);
    modelSchema.set("autoIndex", false);
    return helpers_1.createModel(mongoose, "SMTPUnhandled", modelSchema);
}
exports.SMTPUnhandledModule = SMTPUnhandledModule;
exports.default = SMTPUnhandledModule;
//# sourceMappingURL=smtp-unhandled.js.map
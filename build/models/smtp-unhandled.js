"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");
async function SMTPUnhandledModule(mongoose) {
    const { Schema } = mongoose;
    const modelSchema = new Schema({
        _id: {
            type: Schema.Types.ObjectId,
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
    }, {});
    modelSchema.set("toJSON", {
        virtuals: true,
        versionKey: false,
    });
    modelSchema.virtual("id").get(function () {
        return this._id.toHexString();
    });
    modelSchema.plugin(mongooseLeanVirtuals);
    modelSchema.set("autoIndex", false);
    return mongoose.model("SMTPUnhandled", modelSchema, "massive_smtp_unhandled", { overwriteModels: true });
}
exports.default = SMTPUnhandledModule;
//# sourceMappingURL=smtp-unhandled.js.map
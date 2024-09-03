"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    }, {
        autoIndex: false,
        toJSON: {
            versionKey: false,
        }
    });
    return mongoose.model("SMTPUnhandled", modelSchema, "massive_smtp_unhandled", { overwriteModels: true });
}
exports.default = SMTPUnhandledModule;
//# sourceMappingURL=smtp-unhandled.js.map
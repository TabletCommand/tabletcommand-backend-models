"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const oauth_1 = require("./schema/oauth");
async function SessionModule(mongoose) {
    const Schema = mongoose.Schema;
    const OAuthToken = (0, oauth_1.default)(mongoose);
    function requiredButAllowEmptyString() {
        // Workaround to set required, and allow empty id
        return typeof this.departmentId === "string";
    }
    const modelSchema = new Schema({
        _id: {
            type: String,
            default: uuid.v4,
        },
        nick: String,
        email: String,
        user: String,
        active: {
            type: Boolean,
            default: false,
        },
        token: {
            type: String,
            default: uuid.v4,
        },
        source: {
            type: String,
            default: "", // Options: browser, ipad, iphone, android
        },
        departmentId: {
            type: String,
            default: "",
            required: requiredButAllowEmptyString,
            index: true,
        },
        why: {
            type: String,
            default: "password",
        },
        when: String,
        ended: String,
        userAgent: {
            type: String,
            default: "",
        },
        remoteAddress: {
            type: String,
            default: "",
        },
        deviceId: {
            type: String,
            default: "",
        },
        authSource: {
            type: String,
            default: "",
        },
        // Store the refresh token, in use only when authSource is o-google or o-microsoft
        oAuth: {
            type: OAuthToken,
            default: null,
        },
    }, {});
    modelSchema.set("autoIndex", false);
    modelSchema.pre("save", function (next) {
        this._id = this.get("token"); // Copy _id from token
        next();
    });
    modelSchema.virtual("id").get(function () {
        return this._id.toString();
    });
    modelSchema.set("toJSON", {
        virtuals: true,
        versionKey: false,
    });
    return mongoose.model("Session", modelSchema, "sys_login", { overwriteModels: true });
}
exports.default = SessionModule;
//# sourceMappingURL=session.js.map
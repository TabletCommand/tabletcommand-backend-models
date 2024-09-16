"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const oauth_1 = require("./schema/oauth");
async function SessionModule(mongoose) {
    const Schema = mongoose.Schema;
    const OAuthToken = (0, oauth_1.default)(mongoose);
    function requiredButAllowEmptyString(value) {
        // Workaround to set required, and allow empty id
        return typeof value === "string";
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
            validate: {
                validator: requiredButAllowEmptyString,
                message: "departmentId is required",
            },
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
    }, {
        autoIndex: false,
        toJSON: {
            virtuals: true,
            versionKey: false,
        }
    });
    modelSchema.pre("save", function (next) {
        this._id = this.get("token"); // Copy _id from token
        next();
    });
    modelSchema.index({
        departmentId: 1,
        when: -1
    }, {
        name: "departmentId_1_when_-1",
    });
    // TODO: Review if this should be unique
    modelSchema.index({
        nick: 1,
    }, {
        name: "nick_1",
        // unique: true,
    });
    modelSchema.index({
        token: 1,
        active: 1
    }, {
        name: "token_1_active_1",
    });
    modelSchema.index({
        token: 1,
    }, {
        name: "token_1_unique",
        unique: true,
    });
    modelSchema.index({
        user: 1,
        active: 1
    }, {
        name: "user_1_active_1",
    });
    modelSchema.index({
        user: 1,
        when: 1
    }, {
        name: "user_1_when_1",
    });
    modelSchema.index({
        when: 1,
    }, {
        name: "when_1",
    });
    return mongoose.model("Session", modelSchema, "sys_login", { overwriteModels: true });
}
exports.default = SessionModule;
//# sourceMappingURL=session.js.map
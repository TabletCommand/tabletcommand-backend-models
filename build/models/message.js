"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModule = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
const color_1 = require("./schema/color");
async function MessageModule(mongoose) {
    const { Schema, Types } = mongoose;
    const Color = (0, color_1.default)(mongoose);
    const TypeSchema = (0, helpers_1.createSchema)(Schema, {
        type: {
            type: String,
            default: "", // generic, support, requestLogs, upgradeApp, upgradeOS
        },
        typeOpts: {
            type: Object,
            default: {},
        },
    }, {
        _id: false,
    });
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        departmentId: {
            type: String,
            default: "",
            required: true,
            index: true,
        },
        userId: {
            type: String,
            default: "",
        },
        session: {
            type: String,
            default: "",
        },
        active: {
            type: Boolean,
            default: false,
        },
        uuid: {
            type: String,
            default: uuid.v4,
        },
        requestId: {
            type: String,
            default: uuid.v4,
        },
        title: {
            type: String,
            default: ""
        },
        body: {
            type: String,
            default: "",
        },
        actionTitle: {
            type: String,
            default: ""
        },
        created: {
            type: Date,
            default: helpers_1.currentDate,
        },
        updated: {
            type: Date,
            default: helpers_1.currentDate,
        },
        color: {
            type: Color,
            default: null,
        },
        url: {
            type: String,
            default: "",
        },
        priority: {
            type: Number,
            default: 10, // 1 highest, 10 lowest
        },
        type: {
            type: TypeSchema,
            default: {},
        },
    }, {
        collection: "massive_message",
    });
    modelSchema.set("autoIndex", false);
    return (0, helpers_1.createModel)(mongoose, "Message", modelSchema);
}
exports.MessageModule = MessageModule;
exports.default = MessageModule;
//# sourceMappingURL=message.js.map
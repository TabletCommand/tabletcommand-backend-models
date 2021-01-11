"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModule = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
const color_1 = require("./schema/color");
async function MessageModule(mongoose) {
    const { Schema, Types } = mongoose;
    const Color = color_1.default(mongoose);
    const modelSchema = helpers_1.createSchema(Schema, {
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
            required: true,
        },
        active: {
            type: Boolean,
            default: false,
        },
        uuid: {
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
        createdAt: {
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
            default: 10,
        },
        type: {
            type: String,
            default: "",
        },
        trigger: {
            type: Object,
            default: {},
        },
    }, {
        collection: "massive_message",
    });
    modelSchema.set("autoIndex", false);
    return helpers_1.createModel(mongoose, "Message", modelSchema);
}
exports.MessageModule = MessageModule;
exports.default = MessageModule;
//# sourceMappingURL=message.js.map
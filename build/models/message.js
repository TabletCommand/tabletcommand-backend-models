"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const helpers_1 = require("../helpers");
const color_1 = require("./schema/color");
async function MessageModule(mongoose) {
    const { Schema } = mongoose;
    const Color = (0, color_1.default)(mongoose);
    const TypeSchema = new Schema({
        type: {
            type: String,
            default: "", // generic, support, requestLogs, requestCADLogs, upgradeApp, upgradeOS
        },
        typeOpts: {
            type: Object,
            default: {},
        },
    }, {
        _id: false,
        id: false,
    });
    const modelSchema = new Schema({
        _id: {
            type: Schema.Types.ObjectId,
            auto: true,
        },
        departmentId: {
            type: String,
            default: "",
            required: true,
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
        autoIndex: false,
    });
    modelSchema.index({
        departmentId: 1,
        userId: 1,
        createdAt: 1
    }, {
        name: "departmentId_1_userId_1_createdAt_1",
    });
    modelSchema.index({
        "type.type": 1,
        created: 1
    }, {
        name: "type_type_created_1",
    });
    modelSchema.index({
        uuid: 1,
    }, {
        name: "uuid_1_unique",
        unique: true,
    });
    return mongoose.model("Message", modelSchema, "massive_message", { overwriteModels: true });
}
exports.default = MessageModule;
//# sourceMappingURL=message.js.map
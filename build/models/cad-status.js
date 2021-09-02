"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CADStatusModule = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
const color_1 = require("./schema/color");
async function CADStatusModule(mongoose) {
    const { Schema } = mongoose;
    const Color = (0, color_1.default)(mongoose);
    const StatusOptionValue = (0, helpers_1.createSchema)(Schema, {
        name: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "string", // int, bool
        },
        visible: {
            type: Boolean,
            default: true,
        },
        value: {
            type: String,
            default: "",
        },
        favorite: {
            type: Boolean,
            default: false,
        },
        position: {
            type: Number,
            default: 0,
        },
    }, {
        _id: false,
    });
    const StatusOption = (0, helpers_1.createSchema)(Schema, {
        name: {
            type: String,
            default: "",
        },
        position: {
            type: Number,
            default: 0,
        },
        visible: {
            type: Boolean,
            default: true,
        },
        cadKey: {
            type: String,
            default: "",
        },
        cadValues: {
            type: [StatusOptionValue],
            default: [],
        },
    }, {
        _id: false,
    });
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        uuid: {
            type: String,
            index: true,
            default: uuid.v4,
        },
        departmentId: {
            type: String,
            default: "",
            required: true,
            index: true,
        },
        modifiedDate: {
            type: Number,
            default: 0,
            min: 1,
        },
        modified: {
            type: Date,
            default: helpers_1.currentDate,
        },
        statusId: {
            type: Number,
            default: 0,
            required: true,
            min: 0,
        },
        code: {
            type: String,
            default: "",
            required: true,
            minlength: 1,
        },
        codeDisplay: {
            type: String,
            default: "",
        },
        status: {
            type: String,
            default: "",
            required: true,
            minlength: 1,
        },
        name: {
            type: String,
            default: "",
        },
        normalized: {
            type: String,
            default: "",
        },
        selfAssignable: {
            type: Boolean,
            default: false,
        },
        roaming: {
            type: Boolean,
            default: false,
        },
        options: {
            type: [StatusOption],
            default: [],
        },
        color: {
            type: Color,
            default: null,
        },
    }, {
        collection: "massive_cad_status",
    });
    modelSchema.set("autoIndex", false);
    return (0, helpers_1.createModel)(mongoose, "CADStatus", modelSchema);
}
exports.CADStatusModule = CADStatusModule;
exports.default = CADStatusModule;
//# sourceMappingURL=cad-status.js.map
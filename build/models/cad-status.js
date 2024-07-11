"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const helpers_1 = require("../helpers");
const color_1 = require("./schema/color");
async function CADStatusModule(mongoose) {
    const { Schema } = mongoose;
    const Color = (0, color_1.default)(mongoose);
    const StatusOptionValue = new Schema({
        name: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "string", // int, bool, hospital, interval
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
        // If set to true, iOS will automatically select it, so the user does not have to.
        // The user will be able to select another status option value.
        isDefault: {
            type: Boolean,
            default: false,
        },
        // Premise lat/lon
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
        },
        // OOS time duration (seconds)
        time: {
            type: Number,
        },
    }, {
        _id: false,
        id: false,
    });
    const StatusOption = new Schema({
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
        id: false,
    });
    const modelSchema = new Schema({
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
        backupDate: {
            type: Date,
        },
    }, {});
    modelSchema.set("autoIndex", false);
    return mongoose.model("CADStatus", modelSchema, "massive_cad_status", { overwriteModels: true });
}
exports.default = CADStatusModule;
//# sourceMappingURL=cad-status.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
async function CADStatusMapModule(mongoose) {
    const Schema = mongoose.Schema;
    const ToStatusIdSchema = new Schema({
        statusId: {
            type: Number,
            default: 0,
            required: true,
            min: 0,
        },
        userEnabled: {
            type: Boolean,
        },
        position: {
            type: Number,
            default: 0,
        },
    }, {
        _id: false,
        id: false,
    });
    // Update static items (keep in sync with the lib/cad-status-map/updateDocument!)
    const modelSchema = new Schema({
        departmentId: {
            type: String,
            default: "",
            required: true,
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
        fromStatusId: {
            type: Number,
            default: 0,
            required: true,
            min: 0,
        },
        toStatusIds: {
            type: [ToStatusIdSchema],
            required: true,
        },
        backupDate: {
            type: Date,
        },
    }, {
        autoIndex: false,
    });
    modelSchema.index({
        departmentId: 1
    }, {
        name: "departmentId_1",
    });
    return mongoose.model("CADStatusMap", modelSchema, "massive_cad_status_map", { overwriteModels: true });
}
exports.default = CADStatusMapModule;
//# sourceMappingURL=cad-status-map.js.map
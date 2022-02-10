"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CADStatusMapModule = void 0;
const helpers_1 = require("../helpers");
async function CADStatusMapModule(mongoose) {
    const Schema = mongoose.Schema;
    const ToStatusIdSchema = (0, helpers_1.createSchema)(Schema, {
        statusId: {
            type: Number,
            default: 0,
            required: true,
            min: 0,
        },
        userEnabled: {
            type: Boolean,
        },
    }, {
        _id: false,
        id: false,
    });
    // Update static items (keep in sync with the lib/cad-status-map/updateDocument!)
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
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
    }, {
        collection: "massive_cad_status_map",
    });
    modelSchema.set("autoIndex", false);
    return (0, helpers_1.createModel)(mongoose, "CADStatusMap", modelSchema);
}
exports.CADStatusMapModule = CADStatusMapModule;
exports.default = CADStatusMapModule;
//# sourceMappingURL=cad-status-map.js.map
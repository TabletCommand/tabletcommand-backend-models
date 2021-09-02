"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeaconLogModule = void 0;
const helpers_1 = require("../helpers");
async function BeaconLogModule(mongoose) {
    const { Schema, Types } = mongoose;
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        departmentId: {
            type: String,
            default: "",
            index: true,
        },
        userId: {
            type: String,
            default: "",
        },
        object: {
            type: Object,
        },
        createdAt: {
            type: Date,
            default: helpers_1.currentDate,
        },
        modified_unix_date: {
            type: Number,
            default: helpers_1.retrieveCurrentUnixTime,
        },
    }, {
        collection: "massive_beacon_log",
    });
    modelSchema.set("autoIndex", false);
    return (0, helpers_1.createModel)(mongoose, "BeaconLog", modelSchema);
}
exports.BeaconLogModule = BeaconLogModule;
exports.default = BeaconLogModule;
//# sourceMappingURL=beacon-log.js.map
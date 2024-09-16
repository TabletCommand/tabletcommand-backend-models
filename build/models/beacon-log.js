"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
async function BeaconLogModule(mongoose) {
    const { Schema } = mongoose;
    const modelSchema = new Schema({
        _id: {
            type: Schema.Types.ObjectId,
            auto: true,
        },
        departmentId: {
            type: String,
            default: "",
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
        autoIndex: false,
    });
    modelSchema.index({
        departmentId: 1,
    }, {
        name: "departmentId_1",
    });
    return mongoose.model("BeaconLog", modelSchema, "massive_beacon_log", { overwriteModels: true });
}
exports.default = BeaconLogModule;
//# sourceMappingURL=beacon-log.js.map
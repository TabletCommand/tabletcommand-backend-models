"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");
const defaultDate = new Date("2023-04-19T00:00:00.000Z"); // Chart fallback date, after the feature was implemented
async function ChartDeviceStatsModule(mongoose) {
    const { Schema } = mongoose;
    const ChartItem = new Schema({
        // used to keep track of current user, 
        // email + os + app would be a good unique key
        email: {
            type: String,
            default: "",
        },
        // Will match today but would not account for items added after this script was run
        // To account fro that, this date will be in the last 24 since this script as run
        dateAt: {
            type: Date,
            default: defaultDate,
        },
        // android or ios
        os: {
            type: String,
            default: "",
        },
        // 16.1.1 (ios) OR 33 (android)
        osSemVer: {
            type: String,
            default: "",
        },
        // TCMobile/TCMobile Beta/TC/TC Beta
        app: {
            type: String,
            default: "",
        },
        // 1.2 OR 1.2.3, no beta build numbers
        appSemVer: {
            type: String,
            default: "",
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
        dateAt: {
            type: Date,
            default: defaultDate,
        },
        departmentId: {
            type: String,
            default: "",
            required: true,
            index: true,
        },
        items: {
            type: [ChartItem],
            default: [],
        },
    }, {});
    modelSchema.set("autoIndex", false);
    modelSchema.set("toJSON", {
        virtuals: true,
        versionKey: false,
    });
    modelSchema.virtual("id").get(function () {
        // tslint:disable-next-line: no-unsafe-any
        return this._id.toString();
    });
    modelSchema.plugin(mongooseLeanVirtuals);
    return mongoose.model("ChartDeviceStat", modelSchema, "massive_chart_device_stat", { overwriteModels: true });
}
exports.default = ChartDeviceStatsModule;
//# sourceMappingURL=chart-device-stats.js.map
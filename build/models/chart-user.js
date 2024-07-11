"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");
const defaultDate = new Date("2013-01-01T00:26:40.000Z"); // Chart fallback date, before sync
async function ChartUserModule(mongoose) {
    const { Schema } = mongoose;
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
        count: {
            type: Number,
            default: 0,
        },
        items: {
            type: [String],
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
    return mongoose.model("ChartUser", modelSchema, "massive_chart_user", { overwriteModels: true });
}
exports.default = ChartUserModule;
//# sourceMappingURL=chart-user.js.map
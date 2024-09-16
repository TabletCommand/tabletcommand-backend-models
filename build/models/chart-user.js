"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        },
        count: {
            type: Number,
            default: 0,
        },
        items: {
            type: [String],
            default: [],
        },
    }, {
        autoIndex: false,
        toJSON: {
            versionKey: false,
        }
    });
    modelSchema.index({
        departmentId: 1,
        dateAt: -1,
    }, {
        name: "departmentId_1_dateAt_-1",
    });
    modelSchema.index({
        departmentId: 1,
        date: 1,
    }, {
        name: "departmentId_1_date_1",
    });
    return mongoose.model("ChartUser", modelSchema, "massive_chart_user", { overwriteModels: true });
}
exports.default = ChartUserModule;
//# sourceMappingURL=chart-user.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultDate = new Date("2013-01-01T00:26:40.000Z"); // Chart fallback date, before sync
async function ChartManagedIncidentModule(mongoose) {
    const { Schema } = mongoose;
    const ChartItem = new Schema({
        item: {
            type: String,
            default: "",
        },
        dateAt: {
            type: Date,
            default: defaultDate,
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
        userId: {
            type: String,
            default: "",
            required: true,
        },
        count: {
            type: Number,
            default: 0,
        },
        items: {
            type: [ChartItem],
            default: [],
        },
    }, {
        autoIndex: false,
        toJSON: {
            versionKey: false,
        }
    });
    return mongoose.model("ChartManagedIncident", modelSchema, "massive_chart_managed_incident", { overwriteModels: true });
}
exports.default = ChartManagedIncidentModule;
//# sourceMappingURL=chart-managed-incident.js.map
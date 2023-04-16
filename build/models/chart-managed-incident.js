"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartManagedIncidentModule = void 0;
const helpers_1 = require("../helpers");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");
const defaultDate = new Date("2013-01-01T00:26:40.000Z"); // Chart fallback date, before sync
async function ChartManagedIncidentModule(mongoose) {
    const { Schema, Types } = mongoose;
    const ChartItem = (0, helpers_1.createSchema)(Schema, {
        item: {
            type: String,
            default: "",
        },
        date: {
            type: Number,
            default: 0,
        },
        dateAt: {
            type: Date,
            default: defaultDate,
        },
    }, {
        _id: false,
        id: false,
    });
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        date: {
            type: Number,
            default: 0,
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
        collection: "massive_chart_managed_incident",
    });
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
    return (0, helpers_1.createModel)(mongoose, "ChartManagedIncident", modelSchema);
}
exports.ChartManagedIncidentModule = ChartManagedIncidentModule;
exports.default = ChartManagedIncidentModule;
//# sourceMappingURL=chart-managed-incident.js.map
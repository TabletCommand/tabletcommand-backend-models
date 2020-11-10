"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartUserModule = void 0;
const helpers_1 = require("../helpers");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");
async function ChartUserModule(mongoose) {
    const { Schema, Types } = mongoose;
    const modelSchema = helpers_1.createSchema(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        date: {
            type: Number,
            default: 0,
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
    }, {
        collection: "massive_chart_user",
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
    return helpers_1.createModel(mongoose, "ChartUser", modelSchema);
}
exports.ChartUserModule = ChartUserModule;
exports.default = ChartUserModule;
//# sourceMappingURL=chart-user.js.map
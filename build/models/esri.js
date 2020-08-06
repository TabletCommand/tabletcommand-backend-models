"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EsriModule = void 0;
// import * as uuid from "uuid";
const helpers_1 = require("../helpers");
async function EsriModule(mongoose) {
    const { Schema, Types } = mongoose;
    const modelSchema = helpers_1.createSchema(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        modified_unix_date: {
            type: Number,
            default: helpers_1.retrieveCurrentUnixTime,
        },
        departmentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Department",
            required: true
        },
    }, {
        collection: "massive_esri",
    });
    modelSchema.set("autoIndex", false);
    return helpers_1.createModel(mongoose, "Esri", modelSchema);
}
exports.EsriModule = EsriModule;
exports.default = EsriModule;
//# sourceMappingURL=esri.js.map
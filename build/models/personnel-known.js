"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonnelKnownSchema = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
function PersonnelKnownSchema(mongoose) {
    const { Schema } = mongoose;
    const Radio = new Schema({
        radioName: {
            type: String,
        },
        active: {
            type: Boolean,
            default: true,
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
        PersonnelID: {
            type: String,
            required: true,
        },
        PersonnelName: {
            type: String,
            required: true,
        },
        PersonnelRank: {
            type: String,
            default: ""
        },
        PersonnelWorkCode: {
            type: String,
            default: ""
        },
        modified: {
            type: Date,
            default: helpers_1.currentDate,
        },
        departmentId: {
            type: String,
        },
        uuid: {
            type: String,
            default: uuid.v4,
        },
        radios: {
            type: [Radio],
            default: [],
        },
        active: {
            type: Boolean,
            default: false,
        },
        // Clarify if we'd like to link personnel 
        // to TC agencies or external agencies
        jurisdiction: {
            type: String,
            default: ""
        },
        agencyId: {
            type: Schema.Types.ObjectId,
            ref: "Agency",
            default: null,
        },
        source: {
            type: String,
            default: ""
        },
    }, {
        timestamps: true,
        autoIndex: false,
    });
    modelSchema.index({
        departmentId: 1,
        PersonnelID: 1,
        active: 1
    }, {
        name: "departmentId_1_PersonnelID_1_active_1",
        unique: true,
    });
    return modelSchema;
}
exports.PersonnelKnownSchema = PersonnelKnownSchema;
async function PersonnelKnownModule(mongoose) {
    const modelSchema = PersonnelKnownSchema(mongoose);
    return mongoose.model("PersonnelKnown", modelSchema, "massive_personnel_known", { overwriteModels: true });
}
exports.default = PersonnelKnownModule;
//# sourceMappingURL=personnel-known.js.map
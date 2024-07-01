"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonnelKnownModule = exports.PersonnelKnownSchema = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
function PersonnelKnownSchema(mongoose) {
    const { Schema, Types } = mongoose;
    const Radio = (0, helpers_1.createSchema)(Schema, {
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
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        _id: {
            type: Types.ObjectId,
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
            type: Types.ObjectId,
            ref: "Agency",
            default: null,
        },
        source: {
            type: String,
            default: ""
        },
    }, {
        collection: "massive_personnel_known",
        timestamps: true,
        autoIndex: false,
    });
    return modelSchema;
}
exports.PersonnelKnownSchema = PersonnelKnownSchema;
async function PersonnelKnownModule(mongoose) {
    const modelSchema = PersonnelKnownSchema(mongoose);
    return (0, helpers_1.createModel)(mongoose, "PersonnelKnown", modelSchema);
}
exports.PersonnelKnownModule = PersonnelKnownModule;
exports.default = PersonnelKnownModule;
//# sourceMappingURL=personnel-known.js.map
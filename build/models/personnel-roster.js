"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonnelRosterSchema = void 0;
const helpers_1 = require("../helpers");
function PersonnelRosterSchema(mongoose) {
    const { Schema } = mongoose;
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
        PersonnelUUID: {
            type: String,
            default: ""
        },
        departmentId: {
            type: String,
        },
        modified: {
            type: Date,
            default: helpers_1.currentDate,
        },
        action: {
            type: String,
            default: "add", // The options are "add", "remove"
        },
        radioName: {
            type: String,
            default: "",
        },
        shiftStart: {
            type: Date,
            default: helpers_1.currentDate,
        },
        shiftEnd: {
            type: Date,
            default: helpers_1.currentDate,
        },
        active: {
            type: Boolean,
            default: false,
        },
    }, {
        autoIndex: false,
        timestamps: true,
    });
    return modelSchema;
}
exports.PersonnelRosterSchema = PersonnelRosterSchema;
async function PersonnelRosterModule(mongoose) {
    const modelSchema = PersonnelRosterSchema(mongoose);
    return mongoose.model("PersonnelRoster", modelSchema, "massive_personnel_roster", { overwriteModels: true });
}
exports.default = PersonnelRosterModule;
//# sourceMappingURL=personnel-roster.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
async function UserRegistrationModule(mongoose) {
    const Schema = mongoose.Schema;
    const modelSchema = new Schema({
        email: {
            type: String,
            default: "",
            required: true,
        },
        name: {
            type: String,
            default: "",
            required: true,
        },
        firstName: {
            type: String,
            default: "",
        },
        lastName: {
            type: String,
            default: "",
        },
        department: {
            type: String,
            default: "",
            required: true,
        },
        title: {
            type: String,
            default: "",
        },
        status: {
            type: String,
            default: "",
        },
        modifiedDate: {
            type: Number,
            required: true,
            default: 0,
            min: 1,
        },
        modified: {
            type: Date,
            default: helpers_1.currentDate,
        },
        presentedAt: {
            type: Number,
            default: 0,
        },
        managedIncidentsCount: {
            type: Number,
            default: 0,
        },
        checklistsCount: {
            type: Number,
            default: 0,
        },
        stage: {
            type: String,
            default: "",
        },
        firstIncidentUnixTime: {
            type: Number,
            default: 0,
        },
        lastIncidentLocation: {
            type: String,
            default: "",
        },
        lastIncidentUnixTime: {
            type: Number,
            default: 0,
        },
        syncedToHubSpot: {
            type: Boolean,
            default: false,
        },
    }, {
        autoIndex: false
    });
    modelSchema.index({
        email: 1,
    }, {
        name: "email_1",
    });
    return mongoose.model("UserRegistration", modelSchema, "massive_user_registration", { overwriteModels: true });
}
exports.default = UserRegistrationModule;
//# sourceMappingURL=user-registration.js.map
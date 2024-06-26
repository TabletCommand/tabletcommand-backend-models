"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegistrationModule = void 0;
const helpers_1 = require("../helpers");
async function UserRegistrationModule(mongoose) {
    const Schema = mongoose.Schema;
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        email: {
            type: String,
            default: "",
            required: true,
            index: true,
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
        collection: "massive_user_registration",
    });
    modelSchema.set("autoIndex", false);
    return (0, helpers_1.createModel)(mongoose, "UserRegistration", modelSchema);
}
exports.UserRegistrationModule = UserRegistrationModule;
exports.default = UserRegistrationModule;
//# sourceMappingURL=user-registration.js.map
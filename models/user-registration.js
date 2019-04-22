"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
async function UserRegistrationModule(mongoose) {
    var Schema = mongoose.Schema;
    var modelSchema = helpers_1.createSchema(Schema, {
        email: {
            type: String,
            default: "",
            required: true,
            index: true
        },
        name: {
            type: String,
            default: "",
            required: true
        },
        firstName: {
            type: String,
            default: ""
        },
        lastName: {
            type: String,
            default: ""
        },
        department: {
            type: String,
            default: "",
            required: true
        },
        title: {
            type: String,
            default: ""
        },
        status: {
            type: String,
            default: ""
        },
        modifiedDate: {
            type: Number,
            required: true,
            default: 0,
            min: 1
        },
        presentedAt: {
            type: Number,
            default: 0
        },
        managedIncidentsCount: {
            type: Number,
            default: 0
        },
        checklistsCount: {
            type: Number,
            default: 0
        },
        stage: {
            type: String,
            default: ""
        },
        firstIncidentUnixTime: {
            type: Number,
            default: 0
        },
        lastIncidentLocation: {
            type: String,
            default: ""
        },
        lastIncidentUnixTime: {
            type: Number,
            default: 0
        }
    }, {
        collection: "massive_user_registration"
    });
    modelSchema.set("autoIndex", false);
    return helpers_1.createModel(mongoose, "UserRegistration", modelSchema);
}
exports.UserRegistrationModule = UserRegistrationModule;
;
exports.default = UserRegistrationModule;

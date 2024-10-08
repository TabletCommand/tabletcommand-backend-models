"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
async function Mark43IncidentRetryModule(mongoose) {
    const Schema = mongoose.Schema;
    const RelatedEvent = new Schema({
        mark43Id: {
            type: Number,
            default: 0,
        },
        cadAgencyEventNumber: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    const RetryPayload = new Schema({
        departmentId: {
            type: Number,
            default: 0,
        },
        activityType: {
            type: String,
            default: "",
        },
        relatedEvent: {
            type: RelatedEvent,
        },
    }, {
        _id: false,
        id: false,
    });
    const modelSchema = new Schema({
        departmentId: {
            type: String,
            default: "",
            required: true,
        },
        created: {
            type: Date,
            default: helpers_1.currentDate,
        },
        modified: {
            type: Date,
            default: helpers_1.currentDate,
        },
        active: {
            type: Boolean,
            default: true,
        },
        attempts: {
            type: Number,
            default: 0,
        },
        retries: {
            type: Number,
            default: 0,
        },
        notificationSent: {
            type: Boolean,
            default: false,
        },
        retryPayload: {
            type: RetryPayload,
            default: {},
        },
        mark43IncidentId: {
            type: Number,
        },
        incidentNumber: {
            type: String,
        },
    }, {
        autoIndex: false,
    });
    return mongoose.model("Mark43IncidentRetry", modelSchema, "massive_mark43_incident_retry", { overwriteModels: true });
}
exports.default = Mark43IncidentRetryModule;
//# sourceMappingURL=mark43-incident-retry.js.map
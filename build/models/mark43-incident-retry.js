"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mark43IncidentRetryModule = void 0;
const helpers_1 = require("../helpers");
async function Mark43IncidentRetryModule(mongoose) {
    const Schema = mongoose.Schema;
    const RelatedEvent = (0, helpers_1.createSchema)(Schema, {
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
    const RetryPayload = (0, helpers_1.createSchema)(Schema, {
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
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        departmentId: {
            type: String,
            default: "",
            required: true,
            index: true,
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
        collection: "massive_mark43_incident_retry",
    });
    modelSchema.set("autoIndex", false);
    return (0, helpers_1.createModel)(mongoose, "Mark43IncidentRetry", modelSchema);
}
exports.Mark43IncidentRetryModule = Mark43IncidentRetryModule;
exports.default = Mark43IncidentRetryModule;
//# sourceMappingURL=mark43-incident-retry.js.map
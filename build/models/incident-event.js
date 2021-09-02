"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentEventSchema = exports.IncidentEventModule = void 0;
const helpers_1 = require("../helpers");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");
async function IncidentEventModule(mongoose) {
    const modelSchema = IncidentEventSchema(mongoose);
    return (0, helpers_1.createModel)(mongoose, "IncidentEvent", modelSchema);
}
exports.IncidentEventModule = IncidentEventModule;
function IncidentEventSchema(mongoose) {
    const { Schema, Types } = mongoose;
    const EventUser = (0, helpers_1.createSchema)(Schema, {
        username: {
            type: String,
            default: "",
        },
        email: {
            type: String,
            default: "",
        },
        radioName: {
            type: String,
            default: "",
        },
        userId: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
    });
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        departmentId: {
            type: String,
            default: "",
            required: true,
            index: true,
        },
        IncidentNumber: {
            type: String,
            default: "",
            required: true,
            index: true,
        },
        modified_unix_date: {
            type: Number,
            default: helpers_1.retrieveCurrentUnixTime,
        },
        modified: {
            type: Date,
            default: helpers_1.currentDate,
        },
        message: {
            type: String,
            default: "",
        },
        location: {
            longitude: {
                type: Number,
                default: 0,
            },
            latitude: {
                type: Number,
                default: 0,
            },
        },
        type: {
            type: String,
            default: "",
        },
        user: {
            type: EventUser,
            default: {},
        },
        serverTime: {
            type: Number,
            default: helpers_1.retrieveCurrentUnixTime,
            min: 1,
        },
        userTime: {
            type: Number,
            required: true,
            default: 0,
            min: 1,
        },
        uuid: {
            type: String,
            require: true,
        },
        opts: {
            type: Object,
            default: {},
        },
        archived: {
            type: Boolean,
            default: false,
        },
    }, {
        collection: "massive_incident_event",
    });
    modelSchema.set("toJSON", {
        virtuals: true,
        versionKey: false,
    });
    modelSchema.virtual("id").get(function () {
        // tslint:disable-next-line: no-unsafe-any
        return this._id.toString();
    });
    modelSchema.plugin(mongooseLeanVirtuals);
    modelSchema.set("autoIndex", false);
    return modelSchema;
}
exports.IncidentEventSchema = IncidentEventSchema;
exports.default = IncidentEventModule;
//# sourceMappingURL=incident-event.js.map
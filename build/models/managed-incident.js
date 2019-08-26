"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const uuid = require("uuid");
const moment = require("moment-timezone");
const helpers_1 = require("../helpers");
async function ManagedIncidentModule(mongoose) {
    const { Schema, Types } = mongoose;
    function unixTimeToJSONWithTimezone(unixTime) {
        if (_.isFinite(unixTime) && unixTime > 1) {
            return moment.unix(unixTime).utc().format("YYYY-MM-DDTHH:mm:ssZZ");
        }
        return "";
    }
    function unixTimeToLocalTime(unixTime) {
        if (_.isFinite(unixTime) && unixTime > 1) {
            return moment.unix(unixTime).utc().format("YYYY-MM-DDTHH:mm:ss.SSS");
        }
        return "";
    }
    const HistoryItem = helpers_1.createSchema(Schema, {
        message: {
            type: String,
            default: "",
        },
        entity_type: {
            type: Number,
            default: 0,
        },
        time: {
            type: Number,
            default: 0,
        },
        entity_id: {
            type: Number,
            default: 0,
        },
    }, {
        _id: false,
    });
    const modelSchema = helpers_1.createSchema(Schema, {
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
        userId: {
            type: String,
            required: true,
        },
        uuid: {
            type: String,
            default: uuid.v4,
        },
        start_unix_time: {
            type: Number,
            default: 0,
        },
        end_unix_time: Number,
        par_unix_time: Number,
        watch_unix_start_time: Number,
        watch_unix_pause_time: Number,
        modified_unix_date: {
            type: Number,
            default: 0,
        },
        channel_owner: {
            type: String,
            default: "",
        },
        channel: {
            type: String,
            default: "",
        },
        location: String,
        last_view: String,
        preference_location: String,
        address: String,
        name: String,
        cross_streets: String,
        api_incident_number: String,
        CommonPlaceName: String,
        TacticalChannel: String,
        TacticalAltChannel: String,
        active: Boolean,
        slave_map_changed: Boolean,
        managed: Boolean,
        is_closed: Boolean,
        source: String,
        CallerNumber: String,
        CommandChannel: String,
        // Incident Notes
        notes: {
            type: [HistoryItem],
        },
        // Incident History
        history: {
            type: [HistoryItem],
        },
    }, {
        collection: "massive_incident_managed",
    });
    modelSchema.set("autoIndex", false);
    modelSchema.set("toJSON", {
        virtuals: true,
        versionKey: false,
        transform(doc, ret) {
            ret.id = ret._id;
        },
    });
    modelSchema.virtual("id").get(function () {
        return this._id.toString();
    });
    modelSchema.virtual("start_time").get(function () {
        return unixTimeToJSONWithTimezone(this.start_unix_time);
    });
    modelSchema.virtual("end_time").get(function () {
        return unixTimeToJSONWithTimezone(this.end_unix_time);
    });
    modelSchema.virtual("modified_date").get(function () {
        return unixTimeToLocalTime(this.modified_unix_date);
    });
    return helpers_1.createModel(mongoose, "ManagedIncident", modelSchema);
}
exports.ManagedIncidentModule = ManagedIncidentModule;
exports.default = ManagedIncidentModule;
//# sourceMappingURL=managed-incident.js.map
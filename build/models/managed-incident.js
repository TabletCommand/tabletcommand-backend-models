"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagedIncidentModule = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
async function ManagedIncidentModule(mongoose) {
    const { Schema, Types } = mongoose;
    const HistoryItem = (0, helpers_1.createSchema)(Schema, {
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
        id: false,
    });
    const AssignmentItem = (0, helpers_1.createSchema)(Schema, {
        name: {
            type: String,
            default: "",
        },
        uuid: {
            type: String,
            default: uuid.v4,
        },
    }, {
        _id: false,
        id: false,
    });
    const IncidentUnit = (0, helpers_1.createSchema)(Schema, {
        active: {
            type: Number,
            default: 0,
        },
        air_time: {
            type: String,
            default: "",
        },
        assignment: {
            type: AssignmentItem,
        },
        AlarmAtDispatch: {
            type: String,
            default: "",
        },
        api_unit_dispatch_number: {
            type: String,
            default: "",
        },
        checked: {
            type: Number,
            default: 0,
        },
        column_position: {
            type: Number,
            default: 0,
        },
        group_position: {
            type: Number,
            default: 0,
        },
        incident_position: {
            type: Number,
            default: 0,
        },
        isSupervisor: {
            type: Number,
            default: 0,
        },
        is_part_of_group: {
            type: Number,
            default: 0,
        },
        location_on_map: {
            type: String,
            default: "",
        },
        modified_date: {
            type: String,
            default: "",
        },
        modified_unix_date: {
            type: Number,
            default: 0,
        },
        note: {
            type: String,
            default: "",
        },
        personnelOnScene: {
            type: Number,
            default: 0,
        },
        // Personnel?: Personnel[]
        status: {
            type: String,
            default: "",
        },
        status_unix_date: {
            type: Number,
            default: 0,
        },
        time: {
            type: String,
            default: "",
        },
        UnitID: {
            type: String,
            default: "",
        },
        warning: {
            type: Number,
            default: 0,
        },
    }, {
        _id: false,
        id: false,
    });
    const IncidentGroup = (0, helpers_1.createSchema)(Schema, {
        location_on_map: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
        note: {
            type: String,
            default: "",
        },
        position: {
            type: Number,
            default: 0,
        },
        type: {
            type: Number,
            default: 0,
        },
        type_text: {
            type: String,
            default: "",
        },
        units: {
            type: [IncidentUnit],
            default: [],
        },
        uuid: {
            type: String,
            default: uuid.v4,
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
        start_time: {
            type: String,
        },
        end_time: {
            type: String,
        },
        modified_date: {
            type: String,
        },
        modified_unix_date: {
            type: Number,
            default: 0,
        },
        modified: {
            type: Date,
            default: helpers_1.currentDate,
        },
        channel_owner: {
            type: String,
            default: "",
        },
        channel: {
            type: String,
            default: "",
        },
        active: Boolean,
        address: String,
        api_incident_number: String,
        CallerNumber: String,
        CommandChannel: String,
        CommonPlaceName: String,
        cross_streets: String,
        extended: {
            type: Boolean,
            default: false
        },
        is_closed: Boolean,
        last_view: String,
        location: String,
        managed: {
            type: Boolean,
            default: true,
        },
        name: String,
        preference_location: String,
        slave_map_changed: Boolean,
        source: String,
        TacticalAltChannel: String,
        TacticalChannel: String,
        groups: {
            type: [IncidentGroup],
            default: [],
        },
        // Incident History
        history: {
            type: [HistoryItem],
            default: [],
        },
        // Incident Notes
        notes: {
            type: [HistoryItem],
            default: [],
        },
        units: {
            type: [IncidentUnit],
            default: [],
        },
        // Training
        simulation: {
            type: Boolean,
            default: false,
        },
        rts: {
            type: Boolean,
            default: true,
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
    return (0, helpers_1.createModel)(mongoose, "ManagedIncident", modelSchema);
}
exports.ManagedIncidentModule = ManagedIncidentModule;
exports.default = ManagedIncidentModule;
//# sourceMappingURL=managed-incident.js.map
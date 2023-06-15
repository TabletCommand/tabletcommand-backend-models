"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagedIncidentModule = void 0;
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");
const uuid = require("uuid");
const helpers_1 = require("../helpers");
async function ManagedIncidentModule(mongoose) {
    const { Schema, Types } = mongoose;
    const ReportNumber = (0, helpers_1.createSchema)(Schema, {
        number: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: ""
        },
    }, {
        _id: false,
        id: false,
    });
    const Record = (0, helpers_1.createSchema)(Schema, {
        value: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: ""
        },
    }, {
        _id: false,
        id: false,
    });
    const Person = (0, helpers_1.createSchema)(Schema, {
        PersonnelID: {
            type: String,
        },
        PersonnelName: {
            type: String,
        },
        PersonnelRank: {
            type: String,
            default: ""
        },
        PersonnelWorkCode: {
            type: String,
            default: ""
        },
        PersonnelNote: {
            type: String,
            default: ""
        }
    }, {
        _id: false,
        id: false,
    });
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
        user: {
            type: String,
            default: "",
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
        modified_date: {
            type: String,
            default: "",
        },
        modified_unix_date: {
            type: Number,
            default: 0,
        },
        built_in: {
            type: Boolean,
            default: false,
        },
        isMandatory: {
            type: Boolean,
            default: false,
        },
        description: {
            type: String,
            default: "",
        },
        active: {
            type: Boolean,
            default: true,
        },
        position: {
            type: Number,
            default: 0,
        },
    }, {
        _id: false,
        id: false,
    });
    const IncidentUnit = (0, helpers_1.createSchema)(Schema, {
        active: {
            type: Boolean,
            default: true,
        },
        air_time: {
            type: String,
            default: "",
        },
        assignment: {
            type: AssignmentItem,
        },
        AlarmAtDispatch: {
            type: Number,
            default: 0,
        },
        api_unit_dispatch_number: {
            type: String,
            default: "",
        },
        checked: {
            type: Boolean,
            default: false,
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
            type: Boolean,
            default: false,
        },
        is_part_of_group: {
            type: Boolean,
            default: false,
        },
        location_on_map: {
            type: String,
            default: "",
        },
        // Currently not set
        // modified: {
        //   type: Date,
        //   default: currentDate,
        // },
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
        Personnel: {
            type: [Person],
            default: [],
        },
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
        uuid: {
            type: String,
            default: "",
        },
        parent_uuid: {
            type: String,
            default: "",
        },
        // may be deprecated
        local_id: {
            type: Number,
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
            default: "",
        },
        incident_id: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    const IncidentHazard = (0, helpers_1.createSchema)(Schema, {
        location_on_scene: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
        radius: {
            type: Number,
            default: 0,
        },
        time: {
            type: Number,
            default: 0,
        },
        uuid: {
            type: String,
            default: "",
        },
        active: {
            type: Boolean,
            default: true,
        },
        incident_id: {
            type: String,
            default: "",
        },
        // may be deprecated
        local_id: {
            type: Number,
        },
        note: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    const IncidentChecklistItem = (0, helpers_1.createSchema)(Schema, {
        active: {
            type: Boolean,
            default: true
        },
        checked: {
            type: Boolean,
            default: false
        },
        isMandatory: {
            type: Boolean,
            default: false
        },
        modified_date: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
        position: {
            type: Number,
            default: 0,
        },
        uuid: {
            type: String,
            default: "",
        },
        checklist_uuid: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            default: "",
        },
        id: {
            type: String,
        },
    }, {
        _id: false,
        id: false,
    });
    const IncidentChecklist = (0, helpers_1.createSchema)(Schema, {
        active: {
            type: Boolean,
            default: true
        },
        built_in: {
            type: Boolean,
            default: false
        },
        isMandatory: {
            type: Boolean,
            default: false
        },
        items: {
            type: [IncidentChecklistItem],
            default: [],
        },
        modified_date: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
        position: {
            type: Number,
            default: 0,
        },
        uuid: {
            type: String,
            default: "",
        },
        // may be deprecated
        local_id: {
            type: Number,
        },
        id: {
            type: String,
        },
    }, {
        _id: false,
        id: false,
    });
    const RadioChannel = (0, helpers_1.createSchema)(Schema, {
        name: {
            type: String,
            default: "",
        },
        channel: {
            type: String,
            default: "",
        },
        url: {
            type: String,
            default: "",
        },
        channelDescription: {
            type: String,
            default: "",
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
        deviceTime: {
            type: String,
            default: "",
        },
        extended: {
            type: Boolean,
            default: false
        },
        FireMap: {
            type: String,
            default: "",
        },
        is_closed: {
            type: Boolean,
            default: false
        },
        last_view: String,
        location: String,
        MapPages: {
            type: String,
            default: "",
        },
        managed: {
            type: Number,
            default: 1,
        },
        name: String,
        preference_location: String,
        serverTime: {
            type: String,
            default: "",
        },
        slave_map_changed: Boolean,
        source: String,
        TacticalAltChannel: String,
        TacticalChannel: String,
        checklists: {
            type: [IncidentChecklist],
            default: [],
        },
        groups: {
            type: [IncidentGroup],
            default: [],
        },
        hazards: {
            type: [IncidentHazard],
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
        radioChannels: {
            type: [RadioChannel],
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
        // may be deprecated
        local_id: {
            type: Number,
        },
        AgencyID: {
            type: String,
            default: "",
        },
        isMandatory: {
            type: Boolean,
            default: false,
        },
        record: {
            type: Record,
        },
        ReportNumber: {
            type: [ReportNumber],
            default: [],
        }
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
        // tslint:disable-next-line: no-unsafe-any
        return this._id.toString();
    });
    modelSchema.plugin(mongooseLeanVirtuals);
    return (0, helpers_1.createModel)(mongoose, "ManagedIncident", modelSchema);
}
exports.ManagedIncidentModule = ManagedIncidentModule;
exports.default = ManagedIncidentModule;
//# sourceMappingURL=managed-incident.js.map
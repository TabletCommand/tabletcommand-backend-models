"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CADSimulationModule = void 0;
const helpers_1 = require("../helpers");
const uuid = require("uuid");
async function CADSimulationModule(mongoose) {
    const { Schema, Types, } = mongoose;
    const SimPriorComment = (0, helpers_1.createSchema)(Schema, {
        Comment: {
            type: String,
            default: "",
        },
        CommentSource: {
            type: String,
            default: "",
        },
        CommentDateTime: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    const SimPriorIncident = (0, helpers_1.createSchema)(Schema, {
        IncidentNumber: {
            type: String,
            default: "",
        },
        IncidentDateTime: {
            type: String,
            default: "",
        },
        Problem: {
            type: String,
            default: "",
        },
        Address: {
            type: String,
            default: "",
        },
        Suite: {
            type: String,
            default: "",
        },
        Comment: {
            type: [SimPriorComment],
            default: [],
        },
    }, {
        _id: false,
        id: false,
    });
    const SimRadioChannel = (0, helpers_1.createSchema)(Schema, {
        name: {
            type: String,
            default: "",
        },
        channel: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    const SimComment = (0, helpers_1.createSchema)(Schema, {
        comment: {
            type: String,
            default: "",
        },
        source: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    const SimUnit = (0, helpers_1.createSchema)(Schema, {
        alarmLevelAtDispatch: {
            type: String,
            default: "",
        },
        units: {
            type: [String],
            default: [],
        },
    }, {
        _id: false,
        id: false,
    });
    const Sequence = (0, helpers_1.createSchema)(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        title: {
            type: String,
            default: "",
        },
        alarm: {
            type: String,
            default: "1",
        },
        sequenceId: {
            type: Number,
            default: 0,
        },
        unitsConfig: {
            type: SimUnit,
            default: {},
        },
        comments: {
            type: [SimComment],
            default: [],
        }
    }, {});
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
        // Internal
        uuid: {
            type: String,
            index: true,
            default: uuid.v4,
        },
        departmentId: {
            type: String,
            default: "",
            required: true,
            index: true,
        },
        modifiedDate: {
            type: Number,
            default: 0,
            min: 1,
        },
        modified: {
            type: Date,
            default: helpers_1.currentDate,
        },
        active: {
            type: Boolean,
            default: true
        },
        friendlyId: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        notes: {
            type: String,
            default: "",
        },
        simulation: {
            type: Boolean,
            default: true,
        },
        notify: {
            type: Boolean,
            default: false,
        },
        rts: {
            type: Boolean,
            default: false
        },
        tags: {
            type: [String],
            default: []
        },
        incidentType: {
            type: String,
            default: "",
        },
        streetName: {
            type: String,
            default: "",
        },
        locationComment: {
            type: String,
            default: "",
        },
        suite: {
            type: String,
            default: "",
        },
        CrossStreet1: {
            type: String,
            default: "",
        },
        city: {
            type: String,
            default: "",
        },
        state: {
            type: String,
            default: "",
        },
        lat: {
            type: String,
            default: "",
        },
        lon: {
            type: String,
            default: "",
        },
        firemap: {
            type: String,
            default: "",
        },
        mapPages: {
            type: String,
            default: "",
        },
        tacticalChannel: {
            type: String,
            default: "",
        },
        commandChannel: {
            type: String,
            default: "",
        },
        radioChannels: {
            type: [SimRadioChannel],
            default: [],
        },
        closeDelay: {
            type: Number,
            default: 1800,
        },
        priorIncidents: {
            type: [SimPriorIncident],
            default: [],
        },
        randomPriorIncidents: {
            type: Boolean,
            default: false
        },
        randomStaffing: {
            type: Boolean,
            default: false
        },
        sequences: {
            type: [Sequence],
            default: [],
        },
        sortId: {
            type: Number,
            default: 1,
        },
        sendStatus: {
            type: Boolean,
            default: false,
        },
    }, {
        collection: "massive_cad_simulation",
    });
    modelSchema.set("autoIndex", false);
    return (0, helpers_1.createModel)(mongoose, "CADSimulation", modelSchema);
}
exports.CADSimulationModule = CADSimulationModule;
exports.default = CADSimulationModule;
//# sourceMappingURL=cad-simulation.js.map
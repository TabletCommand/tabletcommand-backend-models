"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
const uuid = require("uuid");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");
async function CADIncidentModule(mongoose) {
    const { Schema, Types } = mongoose;
    const toJSONOpts = {
        versionKey: false,
        transform(doc, ret) {
            strictSchema(doc.schema, ret);
        },
    };
    const CADComment = helpers_1.createSchema(Schema, {
        Comment: {
            type: String,
        },
        CommentSource: {
            type: String,
        },
        CommentDateTime: {
            type: String,
        },
    }, {
        _id: false,
    });
    CADComment.set("toJSON", toJSONOpts);
    const CADPerson = helpers_1.createSchema(Schema, {
        PersonnelID: {
            type: String,
        },
        PersonnelName: {
            type: String,
        },
        PersonnelRank: {
            type: String,
        },
        PersonnelWorkCode: {
            type: String,
        },
        PersonnelNote: {
            type: String,
        },
    }, {
        _id: false,
    });
    CADPerson.set("toJSON", toJSONOpts);
    const CADUnit = helpers_1.createSchema(Schema, {
        UnitID: {
            type: String,
            required: true,
        },
        UnitDispatchNumber: {
            type: String,
            required: true,
        },
        AlarmAtDispatch: {
            type: String,
        },
        TimeDispatched: {
            type: String,
        },
        TimeEnroute: {
            type: String,
        },
        TimeArrived: {
            type: String,
        },
        TimeStaged: {
            type: String,
        },
        TimeCleared: {
            type: String,
        },
        TimeAtHospital: {
            type: String,
        },
        TimePatient: {
            type: String,
        },
        TimeTransport: {
            type: String,
        },
        TimeTransporting: {
            type: String,
        },
        PersonnelCount: {
            type: Number,
        },
        Personnel: [CADPerson],
    }, {
        _id: false,
    });
    CADUnit.set("toJSON", toJSONOpts);
    const APNNotificationType = helpers_1.createSchema(Schema, {
        name: {
            type: String,
        },
        value: {
            type: String,
        },
    }, {
        _id: false,
    });
    APNNotificationType.set("toJSON", toJSONOpts);
    const CADPriorIncident = helpers_1.createSchema(Schema, {
        Address: {
            type: String,
        },
        Comment: {
            type: [CADComment],
        },
        IncidentDateTime: {
            type: String,
        },
        IncidentNumber: {
            type: String,
        },
        Jurisdiction: {
            type: String,
        },
        Problem: {
            type: String,
        },
        Suite: {
            type: String,
        },
    }, {
        _id: false,
    });
    CADPriorIncident.set("toJSON", toJSONOpts);
    const modelSchema = helpers_1.createSchema(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        uuid: {
            type: String,
            default: uuid.v4,
        },
        departmentId: {
            type: String,
            default: "",
            required: true,
            index: true,
        },
        AgencyID: {
            type: String,
            required: true,
        },
        IncidentNumber: {
            type: String,
            required: true,
        },
        TransactionID: {
            type: String,
            required: true,
        },
        // Incident Specific
        AgencyIncidentCallTypeDescription: {
            type: String,
        },
        AgencyIncidentCallType: {
            type: String,
        },
        AgencyIncidentCallSubTypeDescription: {
            type: String,
        },
        AgencyIncidentCallSubType: {
            type: String,
        },
        AgencyIncidentPriorityDescription: {
            type: String,
        },
        PulsePointIncidentCallType: {
            type: String,
        },
        PulsePointDeterminantCode: {
            type: String,
        },
        AlarmLevel: {
            type: String,
        },
        CommandName: {
            type: String,
        },
        FireMap: {
            type: String,
        },
        TBMap: {
            type: String,
        },
        MapPages: {
            type: String,
        },
        TacticalChannel: {
            type: String,
        },
        TacticalAltChannel: {
            type: String,
        },
        CommandChannel: {
            type: String,
        },
        // Dates
        EntryDateTime: {
            type: String,
        },
        ClosedDateTime: {
            type: String,
        },
        CallReceivedDateTime: {
            type: String,
        },
        DispatchDateTime: {
            type: String,
        },
        IncidentLastUpdate: {
            type: String,
        },
        EnrouteDateTime: {
            type: String,
        },
        OnSceneDateTime: {
            type: String,
        },
        modified_date: {
            type: String,
        },
        modified_unix_date: {
            type: Number,
        },
        start_unix_date: {
            type: Number,
        },
        closed_unix_date: {
            type: Number,
        },
        queued_at: {
            type: Number,
        },
        scheduled_at: {
            type: Number,
        },
        // Address fields
        StreetName: {
            type: String,
        },
        StreetSuffix: {
            type: String,
        },
        Predirectional: {
            type: String,
        },
        Postdirectional: {
            type: String,
        },
        CityOrLocality: {
            type: String,
        },
        StateOrProvince: {
            type: String,
        },
        // Legacy
        StateOfProvince: {
            type: String,
        },
        CommonPlaceName: {
            type: String,
        },
        CrossStreet1: {
            type: String,
        },
        CrossStreet2: {
            type: String,
        },
        StreetNumber: {
            type: String,
        },
        Building: {
            type: String,
        },
        Floor: {
            type: String,
        },
        Suite: {
            type: String,
        },
        City: {
            type: String,
        },
        County: {
            type: String,
        },
        PostalCode: {
            type: String,
        },
        CrossStreetName: {
            type: String,
        },
        LocationComment: {
            type: String,
        },
        // TC Address
        full_address: {
            type: String,
        },
        address: {
            type: String,
        },
        cross_streets: {
            type: String,
        },
        // Prior History
        PriorIncidentChanged: {
            type: Boolean,
        },
        PriorIncident: {
            type: [CADPriorIncident],
        },
        // Caller
        CallerNumber: {
            type: String,
        },
        tag: {
            type: String,
        },
        // Coordinate
        Latitude: {
            type: String,
        },
        Longitude: {
            type: String,
        },
        Comment: {
            type: [CADComment],
        },
        units: {
            type: [CADUnit],
        },
        // Tablet Command Internal fields
        preference_location: {
            type: String,
        },
        // Leaked
        admin_note: {
            type: String,
        },
        Interface: {
            type: String,
        },
        InterfaceVersion: {
            type: String,
        },
        CADSimulator: {
            type: String,
        },
        notificationType: {
            type: [APNNotificationType],
        },
        notifiedUnits: {
            type: [String],
        },
        // Anaheim
        ReportNumber: {
            type: [String],
        },
        // Other Agencies
        AgencyDeterminantCode: {
            type: String,
        },
        AgencyIncidentCategory: {
            type: String,
        },
        CFMap: {
            type: String,
        },
        CallSource: {
            type: String,
        },
        CaseNumber: {
            type: String,
        },
        CrossRefDataOwnerAgyID1: {
            type: String,
        },
        CrossRefDataSubmitterAgyID1: {
            type: String,
        },
        CrossRefEventCategory1: {
            type: String,
        },
        CrossRefEventNum1: {
            type: String,
        },
        EventLevel: {
            type: String,
        },
        EventNumber: {
            type: String,
        },
        FirstDueStation: {
            type: String,
        },
        MedicalAgencyIncidentType: {
            type: String,
        },
        MedicalEventCode: {
            type: String,
        },
        PopulationDensity: {
            type: String,
        },
        Priority: {
            type: String,
        },
        WorkstationID: {
            type: String,
        },
        LatitudeDegree: {
            type: String,
        },
        LatitudeMinute: {
            type: String,
        },
        LatitudeSecond: {
            type: String,
        },
        LongitudeDegree: {
            type: String,
        },
        LongitudeMinute: {
            type: String,
        },
        LongitudeSecond: {
            type: String,
        },
        Location: {
            type: String,
        },
        LocationType: {
            type: String,
        },
        OrigLocation: {
            type: String,
        },
        Jurisdiction: {
            type: String,
        },
    }, {
        collection: "massive_incident_cad",
        strict: false,
    });
    modelSchema.set("autoIndex", false);
    modelSchema.set("toJSON", {
        virtuals: true,
        versionKey: false,
        transform(doc, ret) {
            // Remove fields that should not be here
            delete ret.apikey;
            strictSchema(doc.schema, ret);
            ret.id = ret._id;
        },
    });
    modelSchema.virtual("id").get(function () {
        // tslint:disable-next-line: no-unsafe-any
        return this._id.toString();
    });
    const ignoreFields = ["station", "callerNumber"];
    function strictSchema(schema, ret) {
        Object.keys(ret).forEach(function (element) {
            // Don't complain about the virtuals
            if (element === "id") {
                return;
            }
            if (ignoreFields.indexOf(element) !== -1) {
                delete ret[element];
                return;
            }
            const pathSchema = schema;
            if (pathSchema.paths[element] === undefined) {
                // console.log("backend-models.cad-incident: undefined schema.paths[element]:", element, pathSchema.paths[element]);
                delete ret[element];
            }
        });
    }
    modelSchema.plugin(mongooseLeanVirtuals);
    return helpers_1.createModel(mongoose, "CADIncident", modelSchema);
}
exports.CADIncidentModule = CADIncidentModule;
exports.default = CADIncidentModule;
//# sourceMappingURL=cad-incident.js.map
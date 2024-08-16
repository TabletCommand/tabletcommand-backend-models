//x-disabled <reference types="../../mongoose-lean-virtuals" />

import {
  currentDate,
  MongooseModule,
} from "../../helpers";

import * as uuid from "uuid";
import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";
import { IncidentEventSchema } from "../incident-event";
import {
  CADPersonSchema,
  RadioChannelSchema,
  RecordSchema,
  ReportNumberSchema,
  SharedSourceSchema,
  SharedToSchema,
} from "./shared-incident";
import { CADCommentOptsTypes, CADCommentType, CADUnitType, APNNotificationTypeType, CADPriorIncidentType, CADIncidentSchemaType } from "../../types/cad-incident";

export function CADIncidentSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;
  const IncidentEvent = IncidentEventSchema(mongoose);

  // Share incident properties - copy to managed incidents
  const CADPerson = CADPersonSchema(mongoose);
  CADPerson.set("toJSON", {
    versionKey: false,
    transform(doc, ret) {
      strictSchema(doc.schema as typeof modelSchema, ret);
    }
  });
  const RadioChannel = RadioChannelSchema(mongoose);
  RadioChannel.set("toJSON", {
    versionKey: false,
    transform(doc, ret) {
      strictSchema(doc.schema as typeof modelSchema, ret);
    }
  });
  const RecordValue = RecordSchema(mongoose);
  RecordValue.set("toJSON", {
    versionKey: false,
    transform(doc, ret) {
      strictSchema(doc.schema as typeof modelSchema, ret);
    }
  });
  const ReportNumber = ReportNumberSchema(mongoose);
  ReportNumber.set("toJSON", {
    versionKey: false,
    transform(doc, ret) {
      strictSchema(doc.schema as typeof modelSchema, ret);
    }
  });
  const SharedSource = SharedSourceSchema(mongoose);
  SharedSource.set("toJSON", {
    versionKey: false,
    transform(doc, ret) {
      strictSchema(doc.schema as typeof modelSchema, ret);
    }
  });
  const SharedTo = SharedToSchema(mongoose);
  SharedTo.set("toJSON", {
    versionKey: false,
    transform(doc, ret) {
      strictSchema(doc.schema as typeof modelSchema, ret);
    }
  });

  // Currently, supporting type: "ack", item: "knife"
  const CADCommentOpts = new Schema<CADCommentOptsTypes>({
    type: {
      type: String,
    },
    item: {
      type: String,
    },
  }, {
    _id: false,
    id: false,
  });
  CADCommentOpts.set("toJSON", {

  });

  const CADComment = new Schema<CADCommentType>({
    Comment: {
      type: String,
    },
    CommentSource: {
      type: String,
    },
    CommentDateTime: {
      type: String,
    },
    CommentConfidential: {
      type: Boolean,
      default: false
    },
    CommentOpts: {
      type: CADCommentOpts,
    }
  }, {
    _id: false,
    id: false,
  });
  CADComment.set("toJSON", {
    versionKey: false,
    transform(doc, ret) {
      strictSchema(doc.schema as typeof modelSchema, ret);
    }
  });

  const CADUnit = new Schema<CADUnitType>({
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

    // Supplied by Tablet Command
    // Consider moving this to events (?)
    uuid: {
      type: String,
      default: uuid.v4,
    },
  }, {
    _id: false,
    id: false,
  });
  CADUnit.set("toJSON", {
    versionKey: false,
    transform(doc, ret) {
      strictSchema(doc.schema as typeof modelSchema, ret);
    }
  });

  const APNNotificationType = new Schema<APNNotificationTypeType>({
    name: {
      type: String,
    },
    value: {
      type: String,
    },
  }, {
    _id: false,
    id: false,
  });
  APNNotificationType.set("toJSON", {
    versionKey: false,
    transform(doc, ret) {
      strictSchema(doc.schema as typeof modelSchema, ret);
    }
  });

  const CADPriorIncident = new Schema<CADPriorIncidentType>({
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
    id: false,
  });
  CADPriorIncident.set("toJSON", {
    versionKey: false,
    transform(doc, ret) {
      strictSchema(doc.schema as typeof modelSchema, ret);
    }
  });

  // Main schema
  const modelSchema = new Schema<CADIncidentSchemaType>({
    _id: {
      type: Schema.Types.ObjectId,
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
      default: "",
    },
    IncidentNumber: {
      type: String,
      required: true,
    },
    TransactionID: {
      type: String,
      default: "",
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
    modified: {
      type: Date,
      default: currentDate,
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
    ignored: {
      type: Boolean,
      default: false,
    },
    expiration_date: {
      type: Date,
      default: null,
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
      default: [],
    },

    // Caller
    CallerNumber: {
      type: String,
      default: "",
    },

    ReportNumber: {
      type: [ReportNumber],
      default: [],
    },

    radioChannels: {
      type: [RadioChannel],
      default: [],
    },

    // Coordinate
    Latitude: {
      type: Number,
    },
    Longitude: {
      type: Number,
    },

    Comment: {
      type: [CADComment],
      default: [],
    },

    units: {
      type: [CADUnit],
      default: [],
    },

    events: {
      type: [IncidentEvent], // setting types as object, because it does not work with importing IncidentEvent
      default: [],
    },

    // Tablet Command Internal fields
    preference_location: {
      type: String,
    },

    // Training
    simulation: {
      type: Boolean,
      default: false,
    },
    simulationId: {
      type: String,
      default: "",
    },
    simulationSequences: {
      type: [Number],
      default: [],
    },
    notify: {
      type: Boolean,
      default: true,
    },
    rts: {
      type: Boolean,
      default: true,
    },

    notificationType: {
      type: [APNNotificationType],
      default: [],
    },

    // Used by incident sharing
    sharedTo: {
      type: [SharedTo],
      default: [],
    },
    // Include current department name, to share with external departments
    // other properties are set at output
    sharedSource: {
      type: SharedSource,
    },

    // ?
    record: {
      type: RecordValue,
    },
  }, {
    autoIndex: false,
    // Set collection and strict after importing
    // collection: "massive_incident_cad",
    // strict: false, // Because we accept all kind of data in
  });
  modelSchema.virtual("id").get(function(this: CADIncidentSchemaType) {
    return this._id.toString();
  });

  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform(doc, ret: Record<string, unknown>) {
      // Remove fields that should not be here
      delete (ret as unknown as { apikey: unknown }).apikey;

      strictSchema(doc.schema as typeof modelSchema, ret);
    },
  });


  const ignoreFields: ReadonlyArray<string> = ["station", "callerNumber"];

  function strictSchema(schema: typeof modelSchema, ret: Record<string, unknown>) {
    Object.keys(ret).forEach(function(element) {
      // Don't complain about the virtuals
      if (element === "id") {
        return;
      }

      if (ignoreFields.indexOf(element) !== -1) {
        delete ret[element];
        return;
      }
      const pathSchema = schema as unknown as { paths: Record<string, string> };
      if (pathSchema.paths[element] === undefined) {
        // console.log("backend-models.cad-incident: undefined schema.paths[element]:", element, pathSchema.paths[element]);
        delete ret[element];
      }
    });
  }
  modelSchema.plugin(mongooseLeanVirtuals);
  return modelSchema;
}

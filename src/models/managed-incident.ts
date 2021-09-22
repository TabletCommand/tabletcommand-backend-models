import * as uuid from "uuid";
import {
  createSchema,
  createModel,
  currentDate,
  DocumentTypeFromSchema,
  FieldsOfDocument,
  MongooseModule,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
} from "../helpers";

export async function ManagedIncidentModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const HistoryItem = createSchema(Schema, {
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

  const modelSchema = createSchema(Schema, {
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
    modified: {
      type: Date,
      default: currentDate,
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
    extended: {
      type: Boolean,
      default: false
    },

    // Incident Notes
    notes: {
      type: [HistoryItem],
    },
    // Incident History
    history: {
      type: [HistoryItem],
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
    start_time: {
      type: String,
    },
    end_time: {
      type: String,
    },
    modified_date: {
      type: String,
    },
  }, {
    collection: "massive_incident_managed",
  });
  modelSchema.set("autoIndex", false);

  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform(doc: DocumentTypeFromSchema<typeof modelSchema>, ret: FieldsOfDocument<DocumentTypeFromSchema<typeof modelSchema>>) {
      ret.id = ret._id;
    },
  });

  modelSchema.virtual("id").get(function (this: DocumentTypeFromSchema<typeof modelSchema>) {
    return this._id.toString();
  });

  return createModel(mongoose, "ManagedIncident", modelSchema);
}

export interface ManagedIncident extends ItemTypeFromTypeSchemaFunction<typeof ManagedIncidentModule> { }
export interface ManagedIncidentModel extends ModelTypeFromTypeSchemaFunction<ManagedIncident> { }
export default ManagedIncidentModule as ReplaceModelReturnType<typeof ManagedIncidentModule, ManagedIncidentModel>;

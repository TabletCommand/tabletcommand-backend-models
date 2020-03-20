import {
  createSchema,
  createModel,
  MongooseModule,
  retrieveCurrentUnixTime,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
} from "../helpers";

export async function IncidentEventModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const EventUser = createSchema(Schema, {
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
    IncidentNumber: {
      type: String,
      default: "",
      required: true,
      index: true,
    },
    modified_unix_date: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },
    message: {
      type: String,
      default: "",
    },
    location: {
      longitude: {
        type: Number,
      },
      latitude: {
        type: Number,
      },
    },
    type: {
      type: String,
      default: "",
    },
    user: {
      type: EventUser,
    },
    serverTime: {
      type: Number,
      default: retrieveCurrentUnixTime,
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
  }, {
    collection: "massive_incident_event",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "IncidentEvent", modelSchema);
}

export interface IncidentEvent extends ItemTypeFromTypeSchemaFunction<typeof IncidentEventModule> {}
export interface IncidentEventModel extends ModelTypeFromTypeSchemaFunction<IncidentEvent> {}
export default IncidentEventModule as ReplaceModelReturnType<typeof IncidentEventModule, IncidentEventModel>;

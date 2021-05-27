import {
  createModel,
  createSchema,
  currentDate,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  MongooseDocument,
  MongooseModule,
  ReplaceModelReturnType,
  retrieveCurrentUnixTime,
} from "../helpers";
import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";

export async function IncidentEventModule(mongoose: MongooseModule) {
  const modelSchema = IncidentEventSchema(mongoose);
  return createModel(mongoose, "IncidentEvent", modelSchema);
}

export function IncidentEventSchema(mongoose: MongooseModule) {
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
    modified: {
      type: Date,
      default: currentDate,
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

  modelSchema.virtual("id").get(function(this: MongooseDocument) {
    // tslint:disable-next-line: no-unsafe-any
    return this._id.toString();
  });

  modelSchema.plugin(mongooseLeanVirtuals);
  modelSchema.set("autoIndex", false);
  return modelSchema;
}

export interface IncidentEvent extends ItemTypeFromTypeSchemaFunction<typeof IncidentEventModule> { }
export interface IncidentEventModel extends ModelTypeFromTypeSchemaFunction<IncidentEvent> { }
export default IncidentEventModule as ReplaceModelReturnType<typeof IncidentEventModule, IncidentEventModel>;

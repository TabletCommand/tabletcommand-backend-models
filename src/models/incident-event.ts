import { Model, Types } from "mongoose";
import {
  currentDate,
  MongooseDocument,
  MongooseModule,
  retrieveCurrentUnixTime,
} from "../helpers";
import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";

interface EventUserType {
  username: string,
  email: string,
  radioName: string,
  userId: string,
}
export interface IncidentEvent {
  _id: Types.ObjectId,
  departmentId: string,
  IncidentNumber: string,
  modified_unix_date: number,
  modified: Date,
  message: string,
  location: {
    longitude: number,
    latitude: number,
  },
  type: string,
  user: EventUserType,
  serverTime: number,
  userTime: number,
  uuid: string,
  ref_uuid: string,
  opts: object,
  archived: boolean,
}
export function IncidentEventSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const EventUser = new Schema<EventUserType>({
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
    id: false,
  });

  const modelSchema = new Schema<IncidentEvent>({
    _id: {
      type: Schema.Types.ObjectId,
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
    // Reference uuid. Signals if this event applies to a different UUID
    // eg. delete UUID
    ref_uuid: {
      type: String,
      default: "",
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

  modelSchema.virtual("id").get(function (this: MongooseDocument) {
    // tslint:disable-next-line: no-unsafe-any
    return this._id.toString();
  });

  modelSchema.plugin(mongooseLeanVirtuals);
  modelSchema.set("autoIndex", false);
  return modelSchema;
}

export default async function IncidentEventModule(mongoose: MongooseModule) {
  const modelSchema = IncidentEventSchema(mongoose);
  return mongoose.model<IncidentEvent>("IncidentEvent", modelSchema);
}

export interface IncidentEventModel extends Model<IncidentEvent> { }
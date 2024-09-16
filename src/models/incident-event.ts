import { Model } from "mongoose";
import {
  currentDate,
  MongooseDocument,
  MongooseModule,
  retrieveCurrentUnixTime,
} from "../helpers";
import { mongooseLeanVirtuals } from "mongoose-lean-virtuals";
import { EventUserType, IncidentEventType } from "../types/incident-events";

export interface IncidentEvent extends IncidentEventType { }

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

  const modelSchema = new Schema<IncidentEventType>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    departmentId: {
      type: String,
      default: "",
      required: true,
    },
    IncidentNumber: {
      type: String,
      default: "",
      required: true,
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
    autoIndex: false,
    toJSON: {
      virtuals: true,
      versionKey: false,
    }
  });

  modelSchema.virtual("id").get(function(this: MongooseDocument) {
    // tslint:disable-next-line: no-unsafe-any
    return this._id.toString();
  });

  // Indexes are not defined here because this type is reused in CADIncident

  modelSchema.plugin(mongooseLeanVirtuals);
  return modelSchema;
}

export default async function IncidentEventModule(mongoose: MongooseModule) {
  const modelSchema = IncidentEventSchema(mongoose);

  // Define indexes here
  modelSchema.index({
    departmentId: 1,
    IncidentNumber: 1
  }, {
    name: "departmentId_1_IncidentNumber_1",
  });

  modelSchema.index({
    departmentId: 1,
    IncidentNumber: 1,
    modified_unix_date: 1,
  }, {
    name: "departmentId_1_IncidentNumber_1_modified_unix_date_1",
  });

  modelSchema.index({
    departmentId: 1,
    archived: 1
  }, {
    name: "departmentId_1_archived_1",
  });

  modelSchema.index({
    departmentId: 1,
    modified_unix_date: 1,
    archived: 1
  }, {
    name: "departmentId_1_modified_unix_date_1_archived_1",
  });

  modelSchema.index({
    departmentId: 1,
    type: 1
  }, {
    name: "departmentId_1_type_1",
  });

  return mongoose.model<IncidentEvent>("IncidentEvent", modelSchema, "massive_incident_event", { overwriteModels: true });
}

export interface IncidentEventModel extends Model<IncidentEvent> { }
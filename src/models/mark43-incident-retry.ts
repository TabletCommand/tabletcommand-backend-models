import { Model } from "mongoose";
import {
  currentDate,
  MongooseModule,
} from "../helpers";

interface RelatedEventType {
  mark43Id: number,
  cadAgencyEventNumber: string,
}

interface RetryPayloadType {
  departmentId: number,
  activityType: string,
  relatedEvent: RelatedEventType
}
export interface Mark43IncidentRetry {
  departmentId: string,
  created: Date,
  modified: Date,
  active: boolean,
  attempts: number,
  retries: number,
  notificationSent: boolean,
  retryPayload: RetryPayloadType,
  mark43IncidentId: number,
  incidentNumber: string,
}

export default async function Mark43IncidentRetryModule(mongoose: MongooseModule) {
  const Schema = mongoose.Schema;

  const RelatedEvent = new Schema<RelatedEventType>({
    mark43Id: {
      type: Number,
      default: 0,
    },
    cadAgencyEventNumber: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const RetryPayload = new Schema<RetryPayloadType>({
    departmentId: {
      type: Number,
      default: 0,
    },
    activityType: {
      type: String,
      default: "",
    },
    relatedEvent: {
      type: RelatedEvent,
    },
  }, {
    _id: false,
    id: false,
  });

  const modelSchema = new Schema<Mark43IncidentRetry>({
    departmentId: {
      type: String,
      default: "",
      required: true,
      index: true,
    },
    created: {
      type: Date,
      default: currentDate,
    },
    modified: {
      type: Date,
      default: currentDate,
    },
    active: {
      type: Boolean,
      default: true,
    },
    attempts: {
      type: Number,
      default: 0,
    },
    retries: {
      type: Number,
      default: 0,
    },
    notificationSent: {
      type: Boolean,
      default: false,
    },
    retryPayload: {
      type: RetryPayload,
      default: {},
    },
    mark43IncidentId: {
      type: Number,
    },
    incidentNumber: {
      type: String,
    },
  }, {
    collection: "massive_mark43_incident_retry",
  });
  modelSchema.set("autoIndex", false);

  return mongoose.model<Mark43IncidentRetry>("Mark43IncidentRetry", modelSchema);
}

export interface Mark43IncidentRetryModel extends Model<Mark43IncidentRetry> { }
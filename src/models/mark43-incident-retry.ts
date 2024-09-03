import { Model } from "mongoose";
import {
  currentDate,
  MongooseModule,
} from "../helpers";
import { Mark43IncidentRetryType, RelatedEventType, RetryPayloadType } from "../types/mark43-incident-retry";

export interface Mark43IncidentRetry extends Mark43IncidentRetryType { }

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

  const modelSchema = new Schema<Mark43IncidentRetryType>({
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
    autoIndex: false,
  });

  return mongoose.model<Mark43IncidentRetry>("Mark43IncidentRetry", modelSchema, "massive_mark43_incident_retry", { overwriteModels: true });
}

export interface Mark43IncidentRetryModel extends Model<Mark43IncidentRetry> { }
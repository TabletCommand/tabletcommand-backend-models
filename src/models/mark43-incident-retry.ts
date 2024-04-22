import {
  createModel,
  createSchema,
  currentDate,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  MongooseModule,
  ReplaceModelReturnType,
} from "../helpers";

export async function Mark43IncidentRetryModule(mongoose: MongooseModule) {
  const Schema = mongoose.Schema;
  
  const RelatedEvent = createSchema(Schema, {
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

  const RetryPayload = createSchema(Schema, {
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

  const modelSchema = createSchema(Schema, {
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

  return createModel(mongoose, "Mark43IncidentRetry", modelSchema);
}

export interface Mark43IncidentRetry extends ItemTypeFromTypeSchemaFunction<typeof Mark43IncidentRetryModule> { }
export interface Mark43IncidentRetryModel extends ModelTypeFromTypeSchemaFunction<Mark43IncidentRetry> { }
export default Mark43IncidentRetryModule as ReplaceModelReturnType<typeof Mark43IncidentRetryModule, Mark43IncidentRetryModel>;

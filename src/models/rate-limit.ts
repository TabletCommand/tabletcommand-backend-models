import {
  createSchema,
  createModel,
  currentDate,
  MongooseModule,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
} from "../helpers";

export async function RateLimitModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
      auto: true,
    },
    username: String,
    modified_unix_date: {
      type: Number,
      default: 0,
    },
    modified: {
      type: Date,
      default: currentDate,
    },
    count: {
      type: Number,
      default: 0,
    },
    remoteAddress: {
      type: String,
      default: "",
    },
  }, {
    collection: "massive_rate_limit",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "RateLimit", modelSchema);
}

export interface RateLimit extends ItemTypeFromTypeSchemaFunction<typeof RateLimitModule> { }
export interface RateLimitModel extends ModelTypeFromTypeSchemaFunction<RateLimit> { }
export default RateLimitModule as ReplaceModelReturnType<typeof RateLimitModule, RateLimitModel>;

import {
  createSchema,
  createModel,
  MongooseModule,
  ItemTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
} from "../helpers";
import { Document, Model } from "mongoose";

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
    count: {
      type: Number,
      default: 0,
    },
  }, {
    collection: "massive_rate_limit",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "RateLimit", modelSchema);
}

export interface RateLimit extends Document, ItemTypeFromTypeSchemaFunction<typeof RateLimitModule> { }
export interface RateLimitModel extends Model<RateLimit> { }
export default RateLimitModule as unknown as ReplaceModelReturnType<typeof RateLimitModule, RateLimitModel>;

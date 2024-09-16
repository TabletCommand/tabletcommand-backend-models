import { Model } from "mongoose";
import {
  currentDate,
  MongooseModule,
} from "../helpers";
import { RateLimitType } from "../types/rate-limit";

export interface RateLimit extends RateLimitType { }

export default async function RateLimitModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<RateLimitType>({
    _id: {
      type: Schema.Types.ObjectId,
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
    autoIndex: false,
  });

  modelSchema.index({
    username: 1,
    modified_unix_date: 1
  }, {
    name: "username_1_modified_unix_date_1",
  });

  return mongoose.model<RateLimit>("RateLimit", modelSchema, "massive_rate_limit", { overwriteModels: true });
}

export interface RateLimitModel extends Model<RateLimit> { }
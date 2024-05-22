import { Model, Types } from "mongoose";
import {
  currentDate,
  MongooseModule,
} from "../helpers";

export interface RateLimit {
  _id: Types.ObjectId,
  username: string,
  modified_unix_date: number,
  modified: Date,
  count: number,
  remoteAddress: string,
}

export default async function RateLimitModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<RateLimit>({
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
    collection: "massive_rate_limit",
  });
  modelSchema.set("autoIndex", false);

  return mongoose.model<RateLimit>("RateLimit", modelSchema);
}

export interface RateLimitModel extends Model<RateLimit> { }
import * as _ from "lodash";
import * as uuid from "uuid";
import { createSchema, createModel } from "./helpers";
import { MongooseModule, UnboxPromise } from "./helpers";

export async function RateLimitModule(mongoose: MongooseModule) {

  const { Schema, Types} = mongoose;

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

export default RateLimitModule;
export type RateLimit = UnboxPromise<ReturnType<typeof RateLimitModule>>;

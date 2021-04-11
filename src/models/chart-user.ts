import {
  MongooseModule,
  MongooseDocument,
  createSchema,
  createModel,
  ItemTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
} from "../helpers";
import { Document, Model } from "mongoose";

import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";

export async function ChartUserModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
      auto: true,
    },
    date: {
      type: Number,
      default: 0,
    },
    departmentId: {
      type: String,
      default: "",
      required: true,
      index: true,
    },
    count: {
      type: Number,
      default: 0,
    },
    items: {
      type: [String],
      default: [],
    },
  }, {
    collection: "massive_chart_user",
  });
  modelSchema.set("autoIndex", false);

  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
  });

  modelSchema.virtual("id").get(function(this: MongooseDocument) {
    // tslint:disable-next-line: no-unsafe-any
    return this._id && this._id.toString();
  });

  modelSchema.plugin(mongooseLeanVirtuals);

  return createModel(mongoose, "ChartUser", modelSchema);
}

export interface ChartUser extends Document, ItemTypeFromTypeSchemaFunction<typeof ChartUserModule> { }
export interface ChartUserModel extends Model<ChartUser> { }
export default ChartUserModule as unknown as ReplaceModelReturnType<typeof ChartUserModule, ChartUserModel>;

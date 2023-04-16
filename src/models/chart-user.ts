import {
  MongooseModule,
  MongooseDocument,
  createSchema,
  createModel,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
} from "../helpers";

import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";
const defaultDate = new Date("2013-01-01T00:26:40.000Z"); // Chart fallback date, before sync

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
    dateAt: {
      type: Date,
      default: defaultDate,
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
    return this._id.toString();
  });

  modelSchema.plugin(mongooseLeanVirtuals);

  return createModel(mongoose, "ChartUser", modelSchema);
}

export interface ChartUser extends ItemTypeFromTypeSchemaFunction<typeof ChartUserModule> { }
export interface ChartUserModel extends ModelTypeFromTypeSchemaFunction<ChartUser> { }
export default ChartUserModule as ReplaceModelReturnType<typeof ChartUserModule, ChartUserModel>;

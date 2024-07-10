import { Model, Types } from "mongoose";
import {
  MongooseModule,
  MongooseDocument,
} from "../helpers";

import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";
const defaultDate = new Date("2013-01-01T00:26:40.000Z"); // Chart fallback date, before sync

export interface ChartUser {
  _id: Types.ObjectId,
  id?: string,
  dateAt: Date,
  departmentId: string,
  count: number,
  items: string[],
}

export default async function ChartUserModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<ChartUser>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
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
      type: [String], // [email]
      default: [],
    },
  }, {
  });
  modelSchema.set("autoIndex", false);

  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
  });

  modelSchema.virtual("id").get(function (this: MongooseDocument) {
    // tslint:disable-next-line: no-unsafe-any
    return this._id.toString();
  });

  modelSchema.plugin(mongooseLeanVirtuals);

  return mongoose.model<ChartUser>("ChartUser", modelSchema, "massive_chart_user", { overwriteModels: true });
}

export interface ChartUserModel extends Model<ChartUser> { }
import { Model } from "mongoose";
import {
  MongooseModule,
} from "../helpers";

import { ChartUserType } from "../types/chart";
const defaultDate = new Date("2013-01-01T00:26:40.000Z"); // Chart fallback date, before sync

export interface ChartUser extends ChartUserType { }

export default async function ChartUserModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<ChartUserType>({
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
    autoIndex: false,
    toJSON: {
      versionKey: false,
    }
  });

  return mongoose.model<ChartUser>("ChartUser", modelSchema, "massive_chart_user", { overwriteModels: true });
}

export interface ChartUserModel extends Model<ChartUser> { }
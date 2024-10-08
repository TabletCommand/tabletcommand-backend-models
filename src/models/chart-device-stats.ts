import {
  MongooseModule,
} from "../helpers";
import { Model } from "mongoose";

import { ChartDeviceStatsType, ChartItemType } from "../types/chart";
const defaultDate = new Date("2023-04-19T00:00:00.000Z"); // Chart fallback date, after the feature was implemented

export interface ChartDeviceStats extends ChartDeviceStatsType { }

export default async function ChartDeviceStatsModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const ChartItem = new Schema<ChartItemType>({
    // used to keep track of current user, 
    // email + os + app would be a good unique key
    email: {
      type: String,
      default: "",
    },
    // Will match today but would not account for items added after this script was run
    // To account fro that, this date will be in the last 24 since this script as run
    dateAt: {
      type: Date,
      default: defaultDate,
    },
    // android or ios
    os: {
      type: String,
      default: "",
    },
    // 16.1.1 (ios) OR 33 (android)
    osSemVer: {
      type: String,
      default: "",
    },
    // TCMobile/TCMobile Beta/TC/TC Beta
    app: {
      type: String,
      default: "",
    },
    // 1.2 OR 1.2.3, no beta build numbers
    appSemVer: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const modelSchema = new Schema<ChartDeviceStatsType>({
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
    },
    items: {
      type: [ChartItem],
      default: [],
    },
  }, {
    autoIndex: false,
    toJSON: {
      versionKey: false,
    }
  });

  modelSchema.index({
    dateAt: 1,
    "items.email": 1,
    departmentId: 1
  }, {
    name: "dateAt_1_items_email_1_departmentId_1",
  });

  return mongoose.model<ChartDeviceStats>("ChartDeviceStat", modelSchema, "massive_chart_device_stat", { overwriteModels: true });
}

export interface ChartDeviceStatsModel extends Model<ChartDeviceStats> { }
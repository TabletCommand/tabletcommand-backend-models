import { Model } from "mongoose";
import {
  MongooseModule,
} from "../helpers";

import { ChartItemType, ChartManagedIncidentType } from "../types/chart";

export interface ChartManagedIncident extends ChartManagedIncidentType { }

const defaultDate = new Date("2013-01-01T00:26:40.000Z"); // Chart fallback date, before sync

export default async function ChartManagedIncidentModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const ChartItem = new Schema<ChartItemType>({
    item: {
      type: String,
      default: "",
    },
    dateAt: {
      type: Date,
      default: defaultDate,
    },
  }, {
    _id: false,
    id: false,
  });

  const modelSchema = new Schema<ChartManagedIncidentType>({
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
    userId: {
      type: String,
      default: "",
      required: true,
    },
    count: {
      type: Number,
      default: 0,
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

  return mongoose.model<ChartManagedIncident>("ChartManagedIncident", modelSchema, "massive_chart_managed_incident", { overwriteModels: true });
}

export interface ChartManagedIncidentModel extends Model<ChartManagedIncident> { }
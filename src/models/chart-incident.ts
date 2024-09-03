import { Model } from "mongoose";
import {
  MongooseModule,
} from "../helpers";

import { ChartIncidentType, ChartItemType } from "../types/chart";
const defaultDate = new Date("2013-01-01T00:26:40.000Z"); // Chart fallback date, before sync

export interface ChartIncident extends ChartIncidentType { }

export default async function ChartIncidentModule(mongoose: MongooseModule) {
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

  const modelSchema = new Schema<ChartIncidentType>({
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
      type: [ChartItem],
      default: [],
    },
  }, {
    autoIndex: false,
    toJSON: {
      versionKey: false,
    }
  });

  return mongoose.model<ChartIncident>("ChartIncident", modelSchema, "massive_chart_incident", { overwriteModels: true });
}

export interface ChartIncidentModel extends Model<ChartIncident> { }
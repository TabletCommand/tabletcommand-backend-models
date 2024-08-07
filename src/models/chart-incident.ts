import { Model } from "mongoose";
import {
  MongooseModule,
  MongooseDocument,
} from "../helpers";

import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";
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

  return mongoose.model<ChartIncident>("ChartIncident", modelSchema, "massive_chart_incident", { overwriteModels: true });
}

export interface ChartIncidentModel extends Model<ChartIncident> { }
import { Model } from "mongoose";
import {
  MongooseModule,
  MongooseDocument,
} from "../helpers";

import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";
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

  return mongoose.model<ChartManagedIncident>("ChartManagedIncident", modelSchema, "massive_chart_managed_incident", { overwriteModels: true });
}

export interface ChartManagedIncidentModel extends Model<ChartManagedIncident> { }
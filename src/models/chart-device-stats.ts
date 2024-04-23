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
const defaultDate = new Date("2023-04-19T00:00:00.000Z"); // Chart fallback date, after the feature was implemented

export async function ChartDeviceStatsModule(mongoose: MongooseModule) {
  const { Types } = mongoose;

  const ChartItem = createSchema({
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

  const modelSchema = createSchema({
    _id: {
      type: Types.ObjectId,
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
    items: {
      type: [ChartItem],
      default: [],
    },
  }, {
    collection: "massive_chart_device_stat",
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

  return createModel(mongoose, "ChartDeviceStat", modelSchema);
}

export interface ChartDeviceStats extends ItemTypeFromTypeSchemaFunction<typeof ChartDeviceStatsModule> { }
export interface ChartDeviceStatsModel extends ModelTypeFromTypeSchemaFunction<ChartDeviceStats> { }
export default ChartDeviceStatsModule as ReplaceModelReturnType<typeof ChartDeviceStatsModule, ChartDeviceStatsModel>;

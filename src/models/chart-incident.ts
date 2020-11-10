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

export async function ChartIncidentModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const ChartItem = createSchema(Schema, {
    item: {
      type: String,
      default: "",
    },
    date: {
      type: Number,
      default: 0,
    },
  }, {
    _id: false,
  });

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
      type: [ChartItem],
      default: [],
    },
  }, {
    collection: "massive_chart_incident",
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

  return createModel(mongoose, "ChartIncident", modelSchema);
}

export interface ChartIncident extends ItemTypeFromTypeSchemaFunction<typeof ChartIncidentModule> { }
export interface ChartIncidentModel extends ModelTypeFromTypeSchemaFunction<ChartIncident> { }
export default ChartIncidentModule as ReplaceModelReturnType<typeof ChartIncidentModule, ChartIncidentModel>;

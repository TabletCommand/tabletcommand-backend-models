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

export async function ChartManagedIncidentModule(mongoose: MongooseModule) {
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
    collection: "massive_chart_managed_incident",
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

  return createModel(mongoose, "ChartManagedIncident", modelSchema);
}

export interface ChartManagedIncident extends ItemTypeFromTypeSchemaFunction<typeof ChartManagedIncidentModule> { }
export interface ChartManagedIncidentModel extends ModelTypeFromTypeSchemaFunction<ChartManagedIncident> { }
export default ChartManagedIncidentModule as ReplaceModelReturnType<typeof ChartManagedIncidentModule, ChartManagedIncidentModel>;

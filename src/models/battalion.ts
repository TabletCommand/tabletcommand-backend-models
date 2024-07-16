import * as uuid from "uuid";

import {
  MongooseModule,
  MongooseDocument,
  currentDate,
  retrieveCurrentUnixTime
} from "../helpers";

import { Model, Types } from "mongoose";
interface BattalionUnitType extends Record<string, unknown> {
  _id: Types.ObjectId,
  id: string,
  name: string,
  friendly_id: string,
  personnel: number,
  position: number,
  active: boolean,
  isMandatory: boolean,
  modified_date: string,
  modified_unix_date: number,
  modified: Date,
  uuid: string,
  api_battalion_id: string,
  battalion_uuid: string,
  battalion_name: string,
  agencyId: Types.ObjectId
}

export interface Battalion extends Record<string, unknown> {
  _id: Types.ObjectId,
  id?: string,
  name: string,
  active: boolean,
  modified_date: string,
  modified_unix_date?: number,
  modified: Date,
  isMandatory: boolean
  userId: string,
  uuid: string,
  departmentId: string,
  agencyId: Types.ObjectId,
  position: number,
  units: BattalionUnitType[],
}

export function BattalionSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;
  const BattalionUnit = new Schema<BattalionUnitType>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    name: {
      type: String,
      default: ""
    },
    friendly_id: {
      type: String,
      default: ""
    },
    personnel: {
      type: Number,
      default: 0
    },
    position: {
      type: Number,
      default: 1,
    },
    active: {
      type: Boolean,
      default: true,
    },
    isMandatory: {
      type: Boolean,
      default: false,
    },
    modified_date: {
      type: String,
    },
    modified_unix_date: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },
    modified: {
      type: Date,
      default: currentDate,
    },
    uuid: {
      type: String,
      default: uuid.v4,
    },
    // Deprecated: remove these from there, but include them in the output.
    api_battalion_id: {
      type: String,
    },
    battalion_uuid: {
      type: String,
    },
    battalion_name: {
      type: String,
    },
    agencyId: {
      type: Schema.Types.ObjectId,
      ref: "Agency",
      default: null,
    },
  }, {});

  BattalionUnit.virtual("id").get(function(this: MongooseDocument) {
    // tslint:disable-next-line: no-unsafe-any
    return this._id.toString();
  });
  BattalionUnit.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform(doc, ret) {
      strictSchema(doc.schema as typeof modelSchema, ret);
    },
  });


  const modelSchema = new Schema<Battalion>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    name: {
      type: String,
      default: ""
    },
    active: {
      type: Boolean,
      default: true
    },
    modified_date: {
      type: String,
    },
    modified_unix_date: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },
    modified: {
      type: Date,
      default: currentDate,
    },
    isMandatory: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: String,
      default: "",
    },
    uuid: {
      type: String,
      default: uuid.v4,
    },
    departmentId: {
      type: String,
      required: true,
      index: true,
    },
    agencyId: {
      type: Schema.Types.ObjectId,
      ref: "Agency",
      default: null,
    },
    position: {
      type: Number,
      default: 1,
    },
    units: {
      type: [BattalionUnit],
      default: []
    },
  }, {
    autoIndex: false,
  });
  modelSchema.set("autoIndex", false);
  modelSchema.virtual("id").get(function(this: MongooseDocument) {
    // tslint:disable-next-line: no-unsafe-any
    return this._id.toString();
  });
  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform(doc, ret) {
      strictSchema(doc.schema as typeof modelSchema, ret);
    },
  });


  function strictSchema(schema: typeof modelSchema, ret: Record<string, unknown>) {
    Object.keys(ret).forEach(function(element) {
      // Don't complain about the virtuals
      if (element === "id") {
        return;
      }

      const pathSchema = schema as unknown as { paths: Record<string, string> };
      if (pathSchema.paths[element] === undefined) {
        // console.log("backend-models.battalion: undefined schema.paths[element]:", element, pathSchema.paths[element]);
        delete ret[element];
      }
    });
  }
  return modelSchema;
}

export default async function BattalionModule(mongoose: MongooseModule) {
  const modelSchema = BattalionSchema(mongoose);
  return mongoose.model<Battalion>("Battalion", modelSchema, "massive_battalion", { overwriteModels: true });
}

export interface BattalionModel extends Model<Battalion> { }
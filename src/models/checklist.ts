import * as uuid from "uuid";

import {
  MongooseModule,
  MongooseDocument,
  currentDate,
  retrieveCurrentUnixTime
} from "../helpers";

import { ChecklistItemSchema } from "./checklist-item";
import { Model } from "mongoose";
import { ChecklistType } from "../types/checklist";

export interface Checklist extends ChecklistType, Record<string, unknown> { }

export function ChecklistSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const ChecklistItem = ChecklistItemSchema(mongoose);

  const modelSchema = new Schema<ChecklistType>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    position: {
      type: Number,
      default: 1,
    },
    userId: {
      type: String,
      default: "",
    },
    uuid: {
      type: String,
      default: uuid.v4,
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
    departmentId: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
      required: true
    },
    agencyId: {
      type: Schema.Types.ObjectId,
      ref: "Agency",
      default: null,
    },
    items: {
      type: [ChecklistItem],
      default: [],
    }
  }, {
    autoIndex: false,
    toJSON: {
      virtuals: true,
      versionKey: false,
    }
  });
  modelSchema.virtual("id").get(function(this: MongooseDocument) {
    // tslint:disable-next-line: no-unsafe-any
    return this._id.toString();
  });

  modelSchema.index({
    departmentId: 1,
    isMandatory: 1
  }, {
    name: "departmentId_1_isMandatory_1",
  });

  modelSchema.index({
    departmentId: 1,
    modified_date: 1,
  }, {
    name: "departmentId_1_modified_date_1",
  });

  modelSchema.index({
    departmentId: 1,
    userId: 1
  }, {
    name: "deptId_1_userId_1",
  });

  modelSchema.index({
    uuid: 1,
  }, {
    name: "uuid_1",
  });

  return modelSchema;
}

export default async function ChecklistModule(mongoose: MongooseModule) {
  const modelSchema = ChecklistSchema(mongoose);
  return mongoose.model<Checklist>("Checklist", modelSchema, "massive_checklist_sync", { overwriteModels: true });
}

export interface ChecklistModel extends Model<Checklist> { }
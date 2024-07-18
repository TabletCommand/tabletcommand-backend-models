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
      index: true,
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
  });
  modelSchema.set("autoIndex", false);
  modelSchema.virtual("id").get(function(this: MongooseDocument) {
    // tslint:disable-next-line: no-unsafe-any
    return this._id.toString();
  });

  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
  });


  return modelSchema;
}

export default async function ChecklistModule(mongoose: MongooseModule) {
  const modelSchema = ChecklistSchema(mongoose);
  return mongoose.model<Checklist>("Checklist", modelSchema, "massive_checklist_sync", { overwriteModels: true });
}

export interface ChecklistModel extends Model<Checklist> { }
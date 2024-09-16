import * as uuid from "uuid";

import {
  MongooseModule,
  MongooseDocument,
  retrieveCurrentUnixTime
} from "../helpers";
import { Model } from "mongoose";
import { ChecklistItemType } from "../types/checklist";

export interface ChecklistItem extends ChecklistItemType, Record<string, unknown> { }

export function ChecklistItemSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<ChecklistItemType>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    position: {
      type: Number,
      default: 1,
    },
    userId: String,
    uuid: {
      type: String,
      default: uuid.v4,
    },
    checklist_uuid: {
      type: String
    },
    api_checklist_id: {
      type: String,
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
    description: {
      type: String,
      default: ""
    }
  }, {
    autoIndex: false,
  });
  return modelSchema;
}

export default async function ChecklistItemModule(mongoose: MongooseModule) {
  const modelSchema = ChecklistItemSchema(mongoose);

  modelSchema.virtual("id").get(function(this: MongooseDocument) {
    // tslint:disable-next-line: no-unsafe-any
    return this._id.toString();
  });

  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
  });


  return mongoose.model<ChecklistItem>("ChecklistItem", modelSchema, "massive_checklist_item_sync", { overwriteModels: true });
}

export interface ChecklistItemModel extends Model<ChecklistItem> { }
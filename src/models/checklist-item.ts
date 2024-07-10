import * as uuid from "uuid";

import {
  MongooseModule,
  MongooseDocument,
  retrieveCurrentUnixTime
} from "../helpers";
import { Model, Types } from "mongoose";

export interface ChecklistItem extends Record<string, unknown> {
  _id: Types.ObjectId,
  id?: string,
  position: number,
  userId: string,
  uuid: string,
  checklist_uuid: string,
  api_checklist_id: string,
  isMandatory: boolean,
  modified_date: string,
  modified_unix_date: number,
  departmentId: string,
  active: boolean,
  name: string,
  description: string,
}

export function ChecklistItemSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<ChecklistItem>({
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
    description: {
      type: String,
      default: ""
    }
  }, {
  });
  modelSchema.set("autoIndex", false);
  return modelSchema;
}

export default async function ChecklistItemModule(mongoose: MongooseModule) {
  const modelSchema = ChecklistItemSchema(mongoose);

  modelSchema.virtual("id").get(function (this: MongooseDocument) {
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
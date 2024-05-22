import * as uuid from "uuid";

import {
  MongooseModule,
  MongooseDocument,
  DocumentTypeFromSchema,
  ModelFromSchema,
  retrieveCurrentUnixTime
} from "../helpers";
import { Types } from "mongoose";

export interface ChecklistItemType {
  _id: Types.ObjectId
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

export default async function ChecklistItemModule(mongoose: MongooseModule) {
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
    collection: "massive_checklist_item_sync",
  });
  modelSchema.set("autoIndex", false);

  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform(doc: ModelFromSchema<typeof modelSchema>, ret: DocumentTypeFromSchema<typeof modelSchema>) {
      ret.id = ret._id;
    },
  });

  modelSchema.virtual("id").get(function (this: MongooseDocument) {
    // tslint:disable-next-line: no-unsafe-any
    return this._id.toString();
  });

  return mongoose.model<ChecklistItemType>("ChecklistItem", modelSchema);
}

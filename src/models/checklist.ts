import * as uuid from "uuid";

import {
  MongooseModule,
  MongooseDocument,
  currentDate,
  DocumentTypeFromSchema,
  ModelFromSchema,
  retrieveCurrentUnixTime
} from "../helpers";

import { ChecklistItemType } from "./checklist-item";
import { Types } from "mongoose";

export interface ChecklistType {
  _id: Types.ObjectId,
  position: number,
  userId: string,
  uuid: string,
  isMandatory: boolean,
  modified_date: string,
  modified_unix_date: number,
  modified: Date,
  departmentId: string,
  active: boolean,
  name: string,
  agencyId: Types.ObjectId
  items: ChecklistItemType[]
}

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
    collection: "massive_checklist_sync",
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

  return modelSchema;
}

export default async function ChecklistModule(mongoose: MongooseModule) {
  const modelSchema = ChecklistSchema(mongoose);
  return mongoose.model<ChecklistType>("Checklist", modelSchema);
}

import * as uuid from "uuid";

import {
  MongooseModule,
  MongooseDocument,
  createSchema,
  currentDate,
  DocumentTypeFromSchema,
  ModelFromSchema,
  createModel,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
  retrieveCurrentUnixTime
} from "../helpers";

import { ChecklistItemSchema } from "./checklist-item";

export function ChecklistSchema(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const ChecklistItem = ChecklistItemSchema(mongoose);

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
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
      type: mongoose.Schema.Types.ObjectId,
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

export async function ChecklistModule(mongoose: MongooseModule) {
  const modelSchema = ChecklistSchema(mongoose);
  return createModel(mongoose, "Checklist", modelSchema);
}

export interface Checklist extends ItemTypeFromTypeSchemaFunction<typeof ChecklistModule> { }
export interface ChecklistModel extends ModelTypeFromTypeSchemaFunction<Checklist> { }
export default ChecklistModule as ReplaceModelReturnType<typeof ChecklistModule, ChecklistModel>;

import * as uuid from "uuid";

import {
  MongooseModule,
  MongooseDocument,
  createSchema,
  DocumentTypeFromSchema,
  ModelFromSchema,
  createModel,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
  retrieveCurrentUnixTime
} from "../helpers";

export function ChecklistItemSchema(mongoose: MongooseModule) {
  const {
    Schema,
    Types,
  } = mongoose;

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
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
    agencyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agency",
      default: null,
    },
    description: {
      type: String,
      default: ""
    }
  }, {
    collection: "massive_checklist_item_sync",
  });
  modelSchema.set("autoIndex", false);
  return modelSchema;
}

export async function ChecklistItemModule(mongoose: MongooseModule) {
  const modelSchema = ChecklistItemSchema(mongoose);

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

  return createModel(mongoose, "ChecklistItem", modelSchema);
}

export interface ChecklistItem extends ItemTypeFromTypeSchemaFunction<typeof ChecklistItemModule> { }
export interface ChecklistItemModel extends ModelTypeFromTypeSchemaFunction<ChecklistItem> { }
export default ChecklistItemModule as ReplaceModelReturnType<typeof ChecklistItemModule, ChecklistItemModel>;

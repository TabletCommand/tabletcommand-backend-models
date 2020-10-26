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

export async function ChecklistItemModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
      auto: true,
    },
    position: {
      type: Number,
      default: 1,
    },
    checked: {
      type: Number,
    },
    local_id: {
      type: Number,
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
  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform(doc: ModelFromSchema<typeof modelSchema>, ret: DocumentTypeFromSchema<typeof modelSchema>) {
      strictSchema(doc.schema as typeof modelSchema, ret);
      ret.id = ret._id;
    },
  });

  modelSchema.virtual("id").get(function(this: MongooseDocument) {
    // tslint:disable-next-line: no-unsafe-any
    return this._id.toString();
  });

  function strictSchema(schema: typeof modelSchema, ret: Record<string, unknown>) {
    Object.keys(ret).forEach(function(element) {
      // Don't complain about the virtuals
      if (element === "id") {
        return;
      }
      const pathSchema = schema as unknown as { paths: Record<string, string> };
      if (pathSchema.paths[element] === undefined) {
        // console.log("backend-models.cad-incident: undefined schema.paths[element]:", element, pathSchema.paths[element]);
        delete ret[element];
      }
    });
  }
  return createModel(mongoose, "ChecklistItem", modelSchema);
}

export interface ChecklistItem extends ItemTypeFromTypeSchemaFunction<typeof ChecklistItemModule> { }
export interface ChecklistItemModel extends ModelTypeFromTypeSchemaFunction<ChecklistItem> { }
export default ChecklistItemModule as ReplaceModelReturnType<typeof ChecklistItemModule, ChecklistItemModel>;

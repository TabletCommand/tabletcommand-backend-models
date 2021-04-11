import * as uuid from "uuid";

import {
  MongooseModule,
  MongooseDocument,
  createSchema,
  DocumentTypeFromSchema,
  ModelFromSchema,
  createModel,
  ItemTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
  retrieveCurrentUnixTime
} from "../helpers";
import { Document, Model } from "mongoose";

export async function ChecklistModule(mongoose: MongooseModule) {
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
    local_id: {
      type: Number,
    },
    userId: String,
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
  }, {
    collection: "massive_checklist_sync",
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
    return this._id && this._id.toString();
  });

  function strictSchema(schema: typeof modelSchema, ret: unknown): void
  function strictSchema<T extends Record<string, unknown>>(schema: typeof modelSchema, ret: T) {
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
  return createModel(mongoose, "Checklist", modelSchema);
}

export interface Checklist extends Document, ItemTypeFromTypeSchemaFunction<typeof ChecklistModule> { }
export interface ChecklistModel extends Model<Checklist> { }
export default ChecklistModule as unknown as ReplaceModelReturnType<typeof ChecklistModule, ChecklistModel>;

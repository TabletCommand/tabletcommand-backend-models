import * as uuid from "uuid";

import {
  createModel,
  createSchema,
  currentDate,
  DocumentTypeFromSchema,
  ItemTypeFromTypeSchemaFunction,
  ModelFromSchema,
  ModelTypeFromTypeSchemaFunction,
  MongooseDocument,
  MongooseModule,
  ReplaceModelReturnType,
  retrieveCurrentUnixTime
} from "../helpers";

export function TemplateSchema(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const ChecklistOption = createSchema(Schema, {
    name: {
      type: String,
      default: "",
    },
    position: {
      type: Number,
      default: 0,
    },
    id: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const GroupOption = createSchema(Schema, {
    name: {
      type: String,
      default: "",
    },
    position: {
      type: Number,
      default: 0,
    },
    uuid: {
      type: String,
      default: uuid.v4,
    },
  }, {
    _id: false,
    id: false,
  });

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
    isMandatory: {
      type: Boolean,
      default: false,
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
    checklist: {
      type: [ChecklistOption],
      default: [],
    },
    group: {
      type: [GroupOption],
      default: []
    },
    agencyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agency",
      default: null,
    },
  }, {
    collection: "massive_template",
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

  modelSchema.virtual("id").get(function (this: MongooseDocument) {
    return this._id.toHexString();
  });

  function strictSchema(schema: typeof modelSchema, ret: Record<string, unknown>) {
    Object.keys(ret).forEach(function (element) {
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
  // modelSchema.plugin(mongooseLeanVirtuals);
  return modelSchema;
}

export async function TemplateModule(mongoose: MongooseModule) {
  const modelSchema = TemplateSchema(mongoose);
  return createModel(mongoose, "Template", modelSchema);
}

export interface Template extends ItemTypeFromTypeSchemaFunction<typeof TemplateModule> { }
export interface TemplateModel extends ModelTypeFromTypeSchemaFunction<Template> { }
export default TemplateModule as ReplaceModelReturnType<typeof TemplateModule, TemplateModel>;

import * as uuid from "uuid";

import {
  MongooseModule,
  createSchema,
  createModel,
  retrieveCurrentUnixTime,
  ModelTypeFromTypeSchemaFunction,
  ItemTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
} from "../helpers";

export async function TemplateModule(mongoose: MongooseModule) {
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
  }, {
    _id: false,
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
  return createModel(mongoose, "Template", modelSchema);
}

export interface Template extends ItemTypeFromTypeSchemaFunction<typeof TemplateModule> { }
export interface TemplateModel extends ModelTypeFromTypeSchemaFunction<Template> { }
export default TemplateModule as ReplaceModelReturnType<typeof TemplateModule, TemplateModel>;

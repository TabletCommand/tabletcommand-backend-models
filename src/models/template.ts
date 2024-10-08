import * as uuid from "uuid";

import {
  currentDate,
  MongooseModule,
  retrieveCurrentUnixTime
} from "../helpers";
import { Model } from "mongoose";
import { ChecklistOptionType, GroupOptionType, TemplateType } from "../types/template";

export interface Template extends TemplateType, Record<string, unknown> { }

export function TemplateSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const ChecklistOption = new Schema<ChecklistOptionType>({
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

  const GroupOption = new Schema<GroupOptionType>({
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

  const modelSchema = new Schema<TemplateType>({
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
      type: Schema.Types.ObjectId,
      ref: "Agency",
      default: null,
    },
  }, {
    autoIndex: false,
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform(doc, ret) {
        strictSchema(doc.schema as typeof modelSchema, ret);
      },
    }
  });
  modelSchema.virtual("id").get(function(this: Template) {
    return this._id.toHexString();
  });

  modelSchema.index({
    departmentId: 1,
  }, {
    name: "departmentId_1",
  });

  modelSchema.index({
    uuid: 1,
  }, {
    name: "uuid_1_unique",
    unique: true,
  });

  function strictSchema(schema: typeof modelSchema, ret: Record<string, unknown>) {
    Object.keys(ret).forEach(function(element) {
      // Don't complain about the virtuals
      if (element === "id") {
        return;
      }
      const pathSchema = schema as unknown as { paths: Record<string, string> };
      if (pathSchema.paths[element] === undefined) {
        // console.log("backend-models.template: undefined schema.paths[element]:", element, pathSchema.paths[element]);
        delete ret[element];
      }
    });
  }
  // modelSchema.plugin(mongooseLeanVirtuals);
  return modelSchema;
}

export default async function TemplateModule(mongoose: MongooseModule) {
  const modelSchema = TemplateSchema(mongoose);
  return mongoose.model<Template>("Template", modelSchema, "massive_template", { overwriteModels: true });
}

export interface TemplateModel extends Model<Template> { }
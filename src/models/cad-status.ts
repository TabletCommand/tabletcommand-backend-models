import * as uuid from "uuid";
import {
  createModel,
  createSchema,
  currentDate,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  MongooseModule,
  ReplaceModelReturnType,
} from "../helpers";
import ColorModule from "./schema/color";

export async function CADStatusModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;
  const Color = ColorModule(mongoose);

  const StatusOptionValue = createSchema(Schema, {
    name: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "string", // int, bool
    },
    visible: {
      type: Boolean,
      default: true,
    },
    value: {
      type: String,
      default: "",
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    position: {
      type: Number,
      default: 0,
    },
  }, {
    _id: false,
  });

  const StatusOption = createSchema(Schema, {
    name: {
      type: String,
      default: "",
    },
    position: {
      type: Number,
      default: 0,
    },
    visible: {
      type: Boolean,
      default: true,
    },
    cadKey: {
      type: String,
      default: "",
    },
    cadValues: {
      type: [StatusOptionValue],
      default: [],
    },
  }, {
    _id: false,
  });

  const modelSchema = createSchema(Schema, {
    uuid: {
      type: String,
      index: true,
      default: uuid.v4,
    },
    departmentId: {
      type: String,
      default: "",
      required: true,
      index: true,
    },
    modifiedDate: {
      type: Number,
      default: 0,
      min: 1,
    },
    modified: {
      type: Date,
      default: currentDate,
    },
    statusId: {
      type: Number,
      default: 0,
      required: true,
      min: 0,
    },
    code: {
      type: String,
      default: "",
      required: true,
      minlength: 1,
    },
    codeDisplay: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "",
      required: true,
      minlength: 1,
    },
    name: {
      type: String,
      default: "",
    },
    normalized: {
      type: String,
      default: "",
    },
    selfAssignable: {
      type: Boolean,
      default: false,
    },
    roaming: {
      type: Boolean,
      default: false,
    },
    options: {
      type: [StatusOption],
      default: [],
    },
    color: {
      type: Color,
      default: null,
    },
  }, {
    collection: "massive_cad_status",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "CADStatus", modelSchema);
}

export interface CADStatus extends ItemTypeFromTypeSchemaFunction<typeof CADStatusModule> { }
export interface CADStatusModel extends ModelTypeFromTypeSchemaFunction<CADStatus> { }
export default CADStatusModule as ReplaceModelReturnType<typeof CADStatusModule, CADStatusModel>;

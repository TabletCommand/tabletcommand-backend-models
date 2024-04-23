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
  const Color = ColorModule();

  const StatusOptionValue = createSchema({
    name: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "string", // int, bool, hospital, interval
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
    // If set to true, iOS will automatically select it, so the user does not have to.
    // The user will be able to select another status option value.
    isDefault: {
      type: Boolean,
      default: false,
    },
    // Premise lat/lon
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
    // OOS time duration (seconds)
    time: {
      type: Number,
    },
  }, {
    _id: false,
    id: false,
  });

  const StatusOption = createSchema({
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
    id: false,
  });

  const modelSchema = createSchema({
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
    backupDate: {
      type: Date,
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

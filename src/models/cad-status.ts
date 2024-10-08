import * as uuid from "uuid";
import {
  currentDate,
  MongooseModule,
} from "../helpers";
import ColorModule from "./schema/color";
import { Model } from "mongoose";
import { StatusOptionValueType, StatusOptionType, CADStatusType } from "../types/cad";

export interface CADStatus extends CADStatusType { }

export default async function CADStatusModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;
  const Color = ColorModule(mongoose);

  const StatusOptionValue = new Schema<StatusOptionValueType>({
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

  const StatusOption = new Schema<StatusOptionType>({
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

  const modelSchema = new Schema<CADStatus>({
    uuid: {
      type: String,
      default: uuid.v4,
    },
    departmentId: {
      type: String,
      default: "",
      required: true,
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
    autoIndex: false,
  });

  modelSchema.index({
    departmentId: 1
  }, {
    name: "departmentId_1",
  });

  modelSchema.index({
    uuid: 1
  }, {
    name: "uuid_1_unique",
    unique: true,
  });

  return mongoose.model<CADStatus>("CADStatus", modelSchema, "massive_cad_status", { overwriteModels: true });
}

export interface CADStatusModel extends Model<CADStatus> { }
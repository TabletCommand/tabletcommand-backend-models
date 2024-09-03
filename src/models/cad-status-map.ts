import { Model } from "mongoose";
import {
  currentDate,
  MongooseModule,
} from "../helpers";
import { CADStatusMapType, ToStatusIdType } from "../types/cad";

export interface CADStatusMap extends CADStatusMapType { }

export default async function CADStatusMapModule(mongoose: MongooseModule) {
  const Schema = mongoose.Schema;

  const ToStatusIdSchema = new Schema<ToStatusIdType>({
    statusId: {
      type: Number,
      default: 0,
      required: true,
      min: 0,
    },
    userEnabled: {
      type: Boolean,
    },
    position: {
      type: Number,
      default: 0,
    },
  }, {
    _id: false,
    id: false,
  });

  // Update static items (keep in sync with the lib/cad-status-map/updateDocument!)
  const modelSchema = new Schema<CADStatusMap>({
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
    fromStatusId: {
      type: Number,
      default: 0,
      required: true,
      min: 0,
    },
    toStatusIds: {
      type: [ToStatusIdSchema],
      required: true,
    },
    backupDate: {
      type: Date,
    },
  }, {
    autoIndex: false,
  });

  return mongoose.model<CADStatusMap>("CADStatusMap", modelSchema, "massive_cad_status_map", { overwriteModels: true });
}

export interface CADStatusMapModel extends Model<CADStatusMap> { }
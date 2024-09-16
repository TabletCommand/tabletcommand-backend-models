import { Model } from "mongoose";
import {
  currentDate,
  MongooseModule,
} from "../helpers";
import * as uuid from "uuid";
import { CADVehicleType, StationType } from "../types/cad";

export interface CADVehicle extends CADVehicleType { }

export default async function CADVehicleModule(mongoose: MongooseModule) {
  const Schema = mongoose.Schema;

  const Station = new Schema<StationType>({
    code: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const modelSchema = new Schema<CADVehicleType>({
    // Internal
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

    // Provided by CAD
    vehicleId: {
      type: String,
      default: "",
      required: true,
      minlength: 1,
    },
    radioName: {
      type: String,
      default: "",
      required: true,
      minlength: 1,
    },
    station: {
      type: Station,
      default: null,
    },
    capability: {
      type: String,
      default: "",
    },

    // Internal
    mapHidden: {
      type: Boolean,
      default: false,
    },
    locationToCAD: {
      type: Boolean,
      default: false
    },
    backupDate: {
      type: Date,
    },
  }, {
    autoIndex: false,
  });

  modelSchema.index({
    departmentId: 1,
    modifiedDate: 1
  }, {
    name: "departmentId_1_modifiedDate_1",
  });

  modelSchema.index({
    departmentId: 1,
    modified: 1
  }, {
    name: "departmentId_1_modified_1",
  });

  modelSchema.index({
    departmentId: 1,
    radioName: 1
  }, {
    name: "departmentId_1_radioName_1",
  });

  modelSchema.index({
    departmentId: 1,
    vehicleId: 1
  }, {
    name: "departmentId_1_vehicleId_1",
  });

  modelSchema.index({
    uuid: 1,
  }, {
    name: "uuid_1_unique",
    unique: true,
  });

  return mongoose.model<CADVehicle>("CADVehicle", modelSchema, "massive_cad_vehicle", { overwriteModels: true });
}

export interface CADVehicleModel extends Model<CADVehicle> { }
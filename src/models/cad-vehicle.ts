import { Model } from "mongoose";
import {
  currentDate,
  MongooseModule,
} from "../helpers";
import * as uuid from "uuid";

interface StationType {
  code: string,
  name: string,
}
export interface CADVehicle {
  uuid: string,
  departmentId: string,
  modifiedDate: number,
  modified: Date,
  vehicleId: string
  radioName: string,
  station: StationType,
  capability: string,
  mapHidden: boolean
  locationToCAD: boolean,
  backupDate: Date,
}

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

  const modelSchema = new Schema<CADVehicle>({
    // Internal
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
    collection: "massive_cad_vehicle",
  });
  modelSchema.set("autoIndex", false);

  return mongoose.model<CADVehicle>("CADVehicle", modelSchema);
}

export interface CADVehicleModel extends Model<CADVehicle> { }
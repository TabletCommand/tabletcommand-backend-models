import { Model } from "mongoose";
import {
  currentDate,
  MongooseModule,
} from "../helpers";
import CADStatusOptionSelectedModule from "./schema/cad-status-option-selected";
import { CADVehicleStatusHistoryType } from "../types/cad";

export interface CADVehicleStatusHistory extends CADVehicleStatusHistoryType { }

export default async function CADVehicleStatusHistoryModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;
  const CADStatusOptionSelected = CADStatusOptionSelectedModule(mongoose);

  const modelSchema = new Schema<CADVehicleStatusHistoryType>({
    departmentId: {
      type: String,
      default: "",
      required: true,
      index: true,
    },
    vehicleId: {
      type: String,
      default: "",
      index: true,
    },
    radioName: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "",
    },
    statusCode: {
      type: String,
      default: "",
    },
    requestedAt: {
      type: Number,
      default: 0,
      min: 1,
    },
    requested: {
      type: Date,
      default: currentDate,
    },
    requestDelay: {
      type: Number,
      default: 0,
    },
    requestedBy: {
      type: String,
      default: "",
    },
    incidentNumber: {
      type: String,
      default: "",
    },
    options: {
      type: [CADStatusOptionSelected],
      default: [],
    },
    // Rejection reason
    e: {
      type: String,
      default: "",
    },
    locationCurrent: {
      type: String,
      default: "",
    },
    locationDestination: {
      type: String,
      default: "",
    },
  }, {
    autoIndex: false,
  });

  return mongoose.model<CADVehicleStatusHistory>("CADVehicleStatusHistory", modelSchema, "massive_cad_vehicle_status_history", { overwriteModels: true });
}

export interface CADVehicleStatusHistoryModel extends Model<CADVehicleStatusHistory> { }
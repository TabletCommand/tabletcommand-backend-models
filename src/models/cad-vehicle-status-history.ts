import { Model } from "mongoose";
import {
  currentDate,
  MongooseModule,
} from "../helpers";
import CADStatusOptionSelectedModule, { CADStatusOptionSelectedSchemaType } from "./schema/cad-status-option-selected";

export interface CADVehicleStatusHistory {
  departmentId: string,
  vehicleId: string,
  radioName: string,
  status: string,
  statusCode: string,
  requestedAt: number,
  requested: Date,
  requestDelay: number,
  requestedBy: string,
  incidentNumber: string,
  options: CADStatusOptionSelectedSchemaType[]
  e: string,
  locationCurrent: string,
  locationDestination: string,
}

export default async function CADVehicleStatusHistoryModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;
  const CADStatusOptionSelected = CADStatusOptionSelectedModule(mongoose);

  const modelSchema = new Schema<CADVehicleStatusHistory>({
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
  });

  modelSchema.set("autoIndex", false);
  return mongoose.model<CADVehicleStatusHistory>("CADVehicleStatusHistory", modelSchema, "massive_cad_vehicle_status_history", { overwriteModels: true });
}

export interface CADVehicleStatusHistoryModel extends Model<CADVehicleStatusHistory> { }
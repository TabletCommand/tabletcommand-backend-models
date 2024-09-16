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
    },
    vehicleId: {
      type: String,
      default: "",
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

  modelSchema.index({
    departmentId: 1,
    incidentNumber: 1,
    requested: -1
  }, {
    name: "departmentId_1_incidentNumber_1_requested__1",
  });

  modelSchema.index({
    departmentId: 1,
    requestedAt: -1,
    requestDelay: 1
  }, {
    name: "departmentId_1_requestedAt_-1_requestDelay_1",
  });

  modelSchema.index({
    departmentId: 1,
    requested: -1,
    requestDelay: 1
  }, {
    name: "departmentId_1_requested_-1_requestDelay_1",
  });

  modelSchema.index({
    departmentId: 1,
    vehicleId: 1,
    requestedAt: -1
  }, {
    name: "departmentId_1_vehicleId_1_requestedAt_-1",
  });

  modelSchema.index({
    departmentId: 1,
    vehicleId: 1,
    requested: -1,
  }, {
    name: "departmentId_1_vehicleId_1_requested_-1",
  });

  modelSchema.index({
    requested: 1,
  }, {
    name: "ttl_30d_requested_1",
    expireAfterSeconds: 2654300,
  });

  return mongoose.model<CADVehicleStatusHistory>("CADVehicleStatusHistory", modelSchema, "massive_cad_vehicle_status_history", { overwriteModels: true });
}

export interface CADVehicleStatusHistoryModel extends Model<CADVehicleStatusHistory> { }
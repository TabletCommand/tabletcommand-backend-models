import * as  uuid from "uuid";
import {
  currentDate,
  MongooseModule,
} from "../helpers";
import CADStatusOptionSelectedModule from "./schema/cad-status-option-selected";
import { Model } from "mongoose";
import { CADVehicleStatusType } from "../types/cad";

export interface CADVehicleStatus extends CADVehicleStatusType { }

interface DestinationType {
  address: string,
  name: string,
}

export default async function CADVehicleStatusModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;
  const CADStatusOptionSelected = CADStatusOptionSelectedModule(mongoose);

  const Destination = new Schema<DestinationType>({
    // eg 1234 Main St
    address: {
      type: String,
      default: "",
    },
    // eg General Hospital
    name: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });


  const modelSchema = new Schema<CADVehicleStatusType>({
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
    requestTime: {
      type: Number,
      default: 0,
    },
    responseTime: {
      type: Number,
      default: 0,
    },
    // Max of requestTime/responseTime
    changedAt: {
      type: Date,
      default: new Date("2000-01-02T03:04:06.789Z"), // Date in the past
    },
    status: {
      type: String,
      default: "",
      required: true,
      minlength: 1,
    },
    statusCode: {
      type: String,
      default: "",
      required: true,
      minlength: 1,
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
    requestStatus: {
      type: Number,
      default: 0,
    },
    owner: {
      type: String,
      default: "",
    },
    ownerId: {
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
    capability: {
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
    // parsed from `locationDestination`
    destination: {
      type: Destination,
      default: null,
    },
    // Used by frontend
    assignableByUser: {
      type: Boolean,
      default: false,
    },
    backupDate: {
      type: Date,
    },
  }, {
  });

  modelSchema.set("autoIndex", false);
  return mongoose.model<CADVehicleStatus>("CADVehicleStatus", modelSchema, "massive_cad_vehicle_status", { overwriteModels: true });
}

export interface CADVehicleStatusModel extends Model<CADVehicleStatus> { }
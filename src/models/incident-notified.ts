import { Model } from "mongoose";
import {
  currentDate,
  MongooseModule,
} from "../helpers";
import { IncidentNotifiedType, SentItemType, UnitType } from "../types/incident-events";

export interface IncidentNotified extends IncidentNotifiedType { }

export default async function IncidentNotifiedModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const SentItem = new Schema<SentItemType>({
    name: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    date: {
      type: Date,
      default: currentDate,
    },
  }, {
    _id: false,
    id: false,
  });

  const Unit = new Schema<UnitType>({
    UnitID: {
      type: String,
      default: "",
    },
    UnitDispatchNumber: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const modelSchema = new Schema<IncidentNotifiedType>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    departmentId: {
      type: String,
      default: "",
      required: true,
    },
    IncidentNumber: {
      type: String,
      required: true,
    },
    incidentTypes: {
      type: [String],
      default: [],
    },
    units: {
      type: [String],
      default: [],
    },
    unitsByDispatch: {
      type: [Unit],
      default: []
    },
    sent: {
      type: [SentItem],
      default: [],
    },
    updated: {
      type: Date,
      default: currentDate,
    },
  }, {
    autoIndex: false,
  });

  modelSchema.index({
    departmentId: 1,
    updated: 1
  }, {
    name: "departmentId_1_updated_1",
  });

  // TODO: Review this
  // modelSchema.index({
  //   departmentId: 1,
  //   IncidentNumber: 1
  // }, {
  //   name: "departmentId_1_IncidentNumber_1",
  // });

  modelSchema.index({
    departmentId: 1,
    IncidentNumber: 1
  }, {
    name: "departmentId_1_IncidentNumber_1_unique",
    unique: true,
  });

  return mongoose.model<IncidentNotified>("IncidentNotified", modelSchema, "massive_incident_notified", { overwriteModels: true });
}

export interface IncidentNotifiedModel extends Model<IncidentNotified> { }
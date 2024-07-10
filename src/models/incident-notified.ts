import { Model, Types } from "mongoose";
import {
  currentDate,
  MongooseModule,
} from "../helpers";

interface SentItemType {
  name: string,
  type: string,
  date: Date,
}

interface UnitType {
  UnitID: string,
  UnitDispatchNumber: string,
}
export interface IncidentNotified {
  _id: Types.ObjectId,
  departmentId: string,
  IncidentNumber: string,
  incidentTypes: string[],
  units: string[],
  unitsByDispatch: UnitType[],
  sent: SentItemType[],
  updated: Date,
}

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

  const modelSchema = new Schema<IncidentNotified>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    departmentId: {
      type: String,
      default: "",
      required: true,
      index: true,
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
  });
  modelSchema.set("autoIndex", false);

  return mongoose.model<IncidentNotified>("IncidentNotified", modelSchema, "massive_incident_notified", { overwriteModels: true });
}

export interface IncidentNotifiedModel extends Model<IncidentNotified> { }
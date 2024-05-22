import { Types } from "mongoose";
import {
  MongooseModule,
  currentDate,
} from "../helpers";

export interface PersonnelRosterType {
  _id: Types.ObjectId,
  PersonnelID: string,
  PersonnelName: string,
  PersonnelRank: string,
  PersonnelWorkCode: string,
  PersonnelUUID: string,
  departmentId: string,
  modified: Date,
  action: string,
  radioName: string,
  shiftStart: Date,
  shiftEnd: Date,
  active: boolean,
}

export function PersonnelRosterSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<PersonnelRosterType>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    PersonnelID: {
      type: String,
      required: true,
    },
    PersonnelName: {
      type: String,
      required: true,
    },
    PersonnelRank: {
      type: String,
      default: ""
    },
    PersonnelWorkCode: {
      type: String,
      default: ""
    },
    PersonnelUUID: {
      type: String,
      default: ""
    },

    departmentId: {
      type: String,
    },
    modified: {
      type: Date,
      default: currentDate,
    },
    action: {
      type: String,
      default: "add", // The options are "add", "remove"
    },
    radioName: {
      type: String,
      default: "",
    },

    shiftStart: {
      type: Date,
      default: currentDate,
    },
    shiftEnd: {
      type: Date,
      default: currentDate,
    },

    active: {
      type: Boolean,
      default: false,
    },
  }, {
    collection: "massive_personnel_roster",
    autoIndex: false,
    timestamps: true,
  });

  return modelSchema;
}

export async function PersonnelRosterModule(mongoose: MongooseModule) {
  const modelSchema = PersonnelRosterSchema(mongoose);
  return mongoose.model<PersonnelRosterType>("PersonnelRoster", modelSchema);
}
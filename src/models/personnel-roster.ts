import { Model } from "mongoose";
import {
  MongooseModule,
  currentDate,
} from "../helpers";
import { PersonnelRosterType } from "../types/personnel";

export interface PersonnelRoster extends PersonnelRosterType { }

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
    autoIndex: false,
    timestamps: true,
  });

  return modelSchema;
}

export default async function PersonnelRosterModule(mongoose: MongooseModule) {
  const modelSchema = PersonnelRosterSchema(mongoose);
  return mongoose.model<PersonnelRoster>("PersonnelRoster", modelSchema, "massive_personnel_roster", { overwriteModels: true });
}

export interface PersonnelRosterModel extends Model<PersonnelRoster> { }
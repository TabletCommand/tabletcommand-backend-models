import { Model } from "mongoose";
import {
  currentDate,
  MongooseModule,
  retrieveCurrentUnixTime,
} from "../helpers";
import { PersonnelImportType, RadioType } from "../types/personnel";

export interface PersonnelImport extends PersonnelImportType { }

export function PersonnelImportSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const Radio = new Schema<RadioType>({
    radioName: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
    source: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const modelSchema = new Schema<PersonnelImportType>({
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
    PersonnelNote: {
      type: String,
      default: ""
    },

    departmentId: {
      type: String,
    },
    radioNames: {
      type: [String],
      default: [],
    },
    radios: {
      type: [Radio],
      default: [],
    },
    shiftStartTime: {
      type: Number,
      default: 0,
    },
    shiftEndTime: {
      type: Number,
      default: 0,
    },
    shiftStart: {
      type: Date,
    },
    shiftEnd: {
      type: Date,
    },

    // Cases matches the other modified_unix_date
    modified_unix_date: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },
    modified: {
      type: Date,
      default: currentDate,
    },
    active: {
      type: Boolean,
      default: false,
    },
    agencyName: {
      type: String,
      default: ""
    },
    agencyCode: {
      type: String,
      default: ""
    },
    agencyId: {
      type: Schema.Types.ObjectId,
      ref: "Agency",
      default: null,
    },
    importNotes: {
      type: String,
      default: "",
    },
  }, {
  });
  modelSchema.set("autoIndex", false);

  return modelSchema;
}

export default async function PersonnelImportModule(mongoose: MongooseModule) {
  const modelSchema = PersonnelImportSchema(mongoose);
  return mongoose.model<PersonnelImport>("PersonnelImport", modelSchema, "massive_personnel_import", { overwriteModels: true });
}

export interface PersonnelImportModel extends Model<PersonnelImport> { }
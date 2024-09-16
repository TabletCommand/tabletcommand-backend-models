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
    autoIndex: false,
  });

  modelSchema.index({
    agencyId: 1,
    modified: -1
  }, {
    name: "agencyId_1_modified_-1",
  });

  modelSchema.index({
    departmentId: 1,
    active: 1
  }, {
    name: "departmentId_1_active_1",
  });

  modelSchema.index({
    departmentId: 1,
    active: 1,
    radioNames: 1
  }, {
    name: "departmentId_1_active_1_radioNames_1",
  });

  modelSchema.index({
    departmentId: 1,
    agencyId: 1,
    active: 1,
    shiftStartTime: 1,
    shiftEndTime: 1
  }, {
    name: "departmentId_1_agencyId_1_active_1_shiftStartTime_1_shiftEndTime_1",
  });

  modelSchema.index({
    departmentId: 1,
    modified: 1,
    shiftEndTime: 1
  }, {
    name: "departmentId_1_modified_1_shiftEndTime_1",
  });

  modelSchema.index({
    departmentId: 1,
    radioNames: 1,
    active: 1,
    shiftEndTime: 1,
    shiftStartTime: 1
  }, {
    name: "departmentId_1_radioNames_1_active_1_shiftEndTime_1_shiftStartTime_1",
  });

  modelSchema.index({
    departmentId: 1,
    "radios.radioName": 1,
    active: 1,
    "radios.active": 1,
    shiftEndTime: 1,
    shiftStartTime: 1
  }, {
    name: "departmentId_1_radios.radioName_1_active_1_radios.active_1_shiftEndTime_1_shiftStartTime_1",
  });

  modelSchema.index({
    departmentId: 1,
    shiftStartTime: 1,
    PersonnelID: 1
  }, {
    name: "departmentId_1_shiftStartTime_1_PersonnelID_1",
    unique: true,
  });

  modelSchema.index({
    radios: 1,
    modified: 1
  }, {
    name: "radios_1_modified_1",
  });

  modelSchema.index({
    modified: 1,
  }, {
    name: "ttl_90d_modified_1",
    expireAfterSeconds: 7786800,
  });

  return modelSchema;
}

export default async function PersonnelImportModule(mongoose: MongooseModule) {
  const modelSchema = PersonnelImportSchema(mongoose);
  return mongoose.model<PersonnelImport>("PersonnelImport", modelSchema, "massive_personnel_import", { overwriteModels: true });
}

export interface PersonnelImportModel extends Model<PersonnelImport> { }
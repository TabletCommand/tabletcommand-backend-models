import * as uuid from "uuid";

import {
  MongooseModule,
  currentDate,
} from "../helpers";
import { Model } from "mongoose";
import { PersonnelKnownType, RadioType } from "../types/personnel";

export interface PersonnelKnown extends PersonnelKnownType, Record<string, unknown> { }

export function PersonnelKnownSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const Radio = new Schema<RadioType>({
    radioName: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
  }, {
    _id: false,
    id: false,
  });

  const modelSchema = new Schema<PersonnelKnownType>({
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
    modified: {
      type: Date,
      default: currentDate,
    },
    departmentId: {
      type: String,
    },
    uuid: {
      type: String,
      default: uuid.v4,
    },
    radios: {
      type: [Radio],
      default: [],
    },

    active: {
      type: Boolean,
      default: false,
    },
    // Clarify if we'd like to link personnel 
    // to TC agencies or external agencies
    jurisdiction: {
      type: String,
      default: ""
    },
    agencyId: {
      type: Schema.Types.ObjectId,
      ref: "Agency",
      default: null,
    },
    source: {
      type: String,
      default: ""
    },
  }, {
    timestamps: true,
    autoIndex: false,
  });

  modelSchema.index({
    departmentId: 1,
    PersonnelID: 1,
    active: 1
  }, {
    name: "departmentId_1_PersonnelID_1_active_1",
    unique: true,
  });

  return modelSchema;
}

export default async function PersonnelKnownModule(mongoose: MongooseModule) {
  const modelSchema = PersonnelKnownSchema(mongoose);
  return mongoose.model<PersonnelKnown>("PersonnelKnown", modelSchema, "massive_personnel_known", { overwriteModels: true });
}

export interface PersonnelKnownModel extends Model<PersonnelKnown> { }
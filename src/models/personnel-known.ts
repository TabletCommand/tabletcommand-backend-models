import * as uuid from "uuid";

import {
  MongooseModule,
  currentDate,
} from "../helpers";
import { Types } from "mongoose";

interface RadioType {
  radioName: string,
  active: boolean,
}

export interface PersonnelKnownType {
  _id: Types.ObjectId,
  PersonnelID: string,
  PersonnelName: string,
  PersonnelRank: string,
  PersonnelWorkCode: string,
  modified: Date,
  departmentId: string,
  uuid: string,
  radios: RadioType[],
  active: boolean,
  jurisdiction: string,
  agencyId: Types.ObjectId,
}

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
  }, {
    collection: "massive_personnel_known",
    timestamps: true,
    autoIndex: false,
  });

  return modelSchema;
}

export async function PersonnelKnownModule(mongoose: MongooseModule) {
  const modelSchema = PersonnelKnownSchema(mongoose);
  return mongoose.model<PersonnelKnownType>("PersonnelKnown", modelSchema);
}

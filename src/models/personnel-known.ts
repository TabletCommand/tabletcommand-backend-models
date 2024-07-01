import * as uuid from "uuid";

import {
  createSchema,
  createModel,
  MongooseModule,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
  currentDate,
} from "../helpers";

export function PersonnelKnownSchema(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const Radio = createSchema(Schema, {
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

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
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
      type: Types.ObjectId,
      ref: "Agency",
      default: null,
    },
    source: {
      type: String,
      default: ""
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
  return createModel(mongoose, "PersonnelKnown", modelSchema);
}

export interface PersonnelKnown extends ItemTypeFromTypeSchemaFunction<typeof PersonnelKnownModule> { }
export interface PersonnelKnownModel extends ModelTypeFromTypeSchemaFunction<PersonnelKnown> { }
export default PersonnelKnownModule as ReplaceModelReturnType<typeof PersonnelKnownModule, PersonnelKnownModel>;

import {
  createSchema,
  createModel,
  currentDate,
  MongooseModule,
  retrieveCurrentUnixTime,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
} from "../helpers";

export function PersonnelImportSchema(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const Radio = createSchema(Schema, {
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
      default: "",
    },
    shiftEnd: {
      type: Date,
      default: "",
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
      type: Types.ObjectId,
      ref: "Agency",
      default: null,
    },
    importNotes: {
      type: String,
      default: "",
    },
  }, {
    collection: "massive_personnel_import",
  });
  modelSchema.set("autoIndex", false);

  return modelSchema;
}

export async function PersonnelImportModule(mongoose: MongooseModule) {
  const modelSchema = PersonnelImportSchema(mongoose);
  return createModel(mongoose, "PersonnelImport", modelSchema);
}

export interface PersonnelImport extends ItemTypeFromTypeSchemaFunction<typeof PersonnelImportModule> { }
export interface PersonnelImportModel extends ModelTypeFromTypeSchemaFunction<PersonnelImport> { }
export default PersonnelImportModule as ReplaceModelReturnType<typeof PersonnelImportModule, PersonnelImportModel>;

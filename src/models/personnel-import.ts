import {
  createSchema,
  createModel,
  MongooseModule,
  retrieveCurrentUnixTime,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
} from "../helpers";

export async function PersonnelImportModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

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
    },
    PersonnelWorkCode: {
      type: String,
    },
    PersonnelNote: {
      type: String,
    },

    departmentId: {
      type: String,
    },
    radioNames: {
      type: [String],
      default: [],
    },
    shiftStartTime: {
      type: Number,
    },
    shiftEndTime: {
      type: Number,
    },

    // Cases matches the other modified_unix_date
    modified_unix_date: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },
    active: {
      type: Boolean,
      default: false,
    },
  }, {
    collection: "massive_personnel_import",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "PersonnelImport", modelSchema);
}

export interface PersonnelImport extends ItemTypeFromTypeSchemaFunction<typeof PersonnelImportModule> {}
export interface PersonnelImportModel extends ModelTypeFromTypeSchemaFunction<PersonnelImport> {}
export default PersonnelImportModule as ReplaceModelReturnType<typeof PersonnelImportModule, PersonnelImportModel>;

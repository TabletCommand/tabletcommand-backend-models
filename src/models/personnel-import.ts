import * as _ from "lodash";
import { createSchema, createModel, ModelItemType } from "./helpers";
import { MongooseModule, UnboxPromise } from "./helpers";

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
    radioName: {
      type: String,
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
      default: new Date().valueOf() / 1000.0,
    },
  }, {
    collection: "massive_personnel_import",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "PersonnelImport", modelSchema);
}

export default PersonnelImportModule;
export type PersonnelImportModel = UnboxPromise<ReturnType<typeof PersonnelImportModule>>;
export type PersonnelImport = ModelItemType<PersonnelImportModel>;

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
    },
    PersonnelName: {
      type: String,
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
    DepartmentId: {
      type: String,
    },
    UnitID: {
      type: String,
    },
    ShiftStartTime: {
      type: Number,
    },
    ShiftEndTime: {
      type: Number,
    },
    ImportedDateTime: {
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

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

export async function CSVImportModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
      auto: true,
    },
    batchId: {
      type: String,
      required: true,
    },
    importCreated: {
      type: Date,
      default: currentDate,
    },
    importEnded: {
      type: Date,
    },
    status: {
      type: String,
      default: "",
    },
    departmentId: {
      type: String
    },
    agencyId: {
      type: String,
    },
    importType: {
      type: String,
    },
    fileType: {
      type: String,
    },
    fileName: {
      type: String,
    },
    fileSize: {
      type: String,
    },
    fileLastModified: {
      type: Date,
      default: currentDate,
    },
    records: {
      type: [Object],
      default: [],
    },
    modifiedDate: {
      type: Date,
      default: currentDate,
    },
    userId: {
      type: String,
    },
  }, {
    collection: "massive_csv_import",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "CSVImport", modelSchema);
}

export interface CSVImport extends ItemTypeFromTypeSchemaFunction<typeof CSVImportModule> { }
export interface CSVImportModel extends ModelTypeFromTypeSchemaFunction<CSVImport> { }
export default CSVImportModule as ReplaceModelReturnType<typeof CSVImportModule, CSVImportModel>;

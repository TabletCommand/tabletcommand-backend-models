import { Model } from "mongoose";
import {
  currentDate,
  MongooseModule,
} from "../helpers";
import { CSVImportType } from "../types/csv-import";

export interface CSVImport extends CSVImportType { }

export default async function CSVImportModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<CSVImportType>({
    _id: {
      type: Schema.Types.ObjectId,
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
    sendNotification: {
      type: Boolean,
      default: false
    },
  }, {
  });
  modelSchema.set("autoIndex", false);

  return mongoose.model<CSVImport>("CSVImport", modelSchema, "massive_csv_import", { overwriteModels: true });
}

export interface CSVImportModel extends Model<CSVImport> { }
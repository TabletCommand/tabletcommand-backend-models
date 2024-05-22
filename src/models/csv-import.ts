import { Mixed, Types } from "mongoose";
import {
  currentDate,
  MongooseModule,
} from "../helpers";

export interface CSVImportType {
  _id: Types.ObjectId,
  batchId: string,
  importCreated: Date,
  importEnded: Date,
  status: string,
  departmentId: string,
  agencyId: string,
  importType: string,
  fileType: string,
  fileName: string,
  fileSize: string,
  fileLastModified: Date,
  records: Mixed[],
  modifiedDate: Date,
  userId: string,
  sendNotification: boolean
}

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
    collection: "massive_csv_import",
  });
  modelSchema.set("autoIndex", false);

  return mongoose.model<CSVImportType>("CSVImport", modelSchema);
}
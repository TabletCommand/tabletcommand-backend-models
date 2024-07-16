import * as uuid from "uuid";
import {
  MongooseModule,
  currentDate,
} from "../helpers";
import { Model, Types } from "mongoose";
import RemoteFileSchema, { RemoteFileSchemaType } from "./schema/remote-file";
export interface RemoteLogStream extends Record<string, unknown> {
  _id: Types.ObjectId
  departmentId: string
  userId: string
  isCADRequest: boolean
  session: string
  requestId: string
  requested: Date
  active: boolean
  uuid: string
  createdAt: Date
  updatedAt: Date
  status: string
  message: string
  manifest: string[]
  userAgent: string
  appVersion: string
  file: RemoteFileSchemaType
  remoteFolderPath: string
  remoteFolderId: string
}

export default async function RemoteLogStreamModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const RemoteFile = RemoteFileSchema(mongoose);

  const modelSchema = new Schema<RemoteLogStream>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    departmentId: {
      type: String,
      default: "",
      required: true,
      index: true,
    },
    userId: {
      type: String,
      default: "",
    },
    isCADRequest: {
      type: Boolean,
      default: false,
    },
    session: {
      type: String,
      default: "",
    },
    requestId: {
      type: String,
      default: uuid.v4,
    },
    requested: {
      type: Date,
    },
    active: {
      type: Boolean,
      default: false,
    },
    uuid: {
      type: String,
      default: uuid.v4,
    },
    createdAt: {
      type: Date,
      default: currentDate,
    },
    updatedAt: {
      type: Date,
      default: currentDate,
    },
    status: {
      type: String,
      default: "", // local, uploading, synced (uploaded to a remote storage) 
    },
    // Formerly message.title
    message: {
      type: String,
      default: "",
    },
    // Formerly message.body
    manifest: {
      type: [String],
      default: [],
    },
    // Formerly message.type.typeOpts.userAgent
    userAgent: {
      type: String,
      default: "",
    },
    // Formerly message.type.typeOpts.appVersion
    appVersion: {
      type: String,
      default: "",
    },
    file: {
      type: RemoteFile,
    },
    // Google Drive
    remoteFolderPath: {
      type: String,
      default: "", // e.g https://drive.google.com/drive/folders/1efgEFG
    },
    remoteFolderId: {
      type: String,
      default: "", // e.g 1efgEFG
    },
  }, {
    autoIndex: false,
    timestamps: true,
  });

  return mongoose.model<RemoteLogStream>("RemoteLogStream", modelSchema, "massive_remote_log_stream", { overwriteModels: true });
}

export interface RemoteLogStreamModel extends Model<RemoteLogStream> { }

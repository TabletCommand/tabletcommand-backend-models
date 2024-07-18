import * as uuid from "uuid";
import {
  MongooseModule,
  currentDate,
} from "../helpers";
import { Model } from "mongoose";
import RemoteFileSchema from "./schema/remote-file";
import { RemoteLogType } from "../types/remote-log";

export interface RemoteLog extends RemoteLogType { }

export default async function RemoteLogModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const RemoteFile = RemoteFileSchema(mongoose);

  const modelSchema = new Schema<RemoteLogType>({
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
    files: {
      type: [RemoteFile],
      default: [],
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

  return mongoose.model<RemoteLog>("RemoteLog", modelSchema, "massive_remote_log_stream", { overwriteModels: true });
}

export interface RemoteLogModel extends Model<RemoteLog> { }
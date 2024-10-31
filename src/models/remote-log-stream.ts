import * as uuid from "uuid";
import {
  MongooseModule,
  currentDate,
} from "../helpers";
import { Model } from "mongoose";
import RemoteFileSchema from "./schema/remote-file";
import { RemoteLogStreamType } from "../types/remote-log";

export interface RemoteLogStream extends RemoteLogStreamType, Record<string, unknown> { }

export default async function RemoteLogStreamModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const RemoteFile = RemoteFileSchema(mongoose);

  const modelSchema = new Schema<RemoteLogStreamType>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    departmentId: {
      type: String,
      default: "",
      required: true,
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

  modelSchema.index({
    uuid: 1,
  }, {
    name: "uuid_1_unique",
    unique: true,
  });

  modelSchema.index({
    createdAt: 1,
  }, {
    name: "createdAt_1",
  });

  modelSchema.index({
    requestId: 1,
  }, {
    name: "requestId_1",
  });

  return mongoose.model<RemoteLogStream>("RemoteLogStream", modelSchema, "massive_remote_log_stream", { overwriteModels: true });
}

export interface RemoteLogStreamModel extends Model<RemoteLogStream> { }

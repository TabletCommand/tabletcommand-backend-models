import * as uuid from "uuid";
import {
  MongooseModule,
  currentDate,
} from "../helpers";
import { Model, Types } from "mongoose";

interface FileSchemaType {
  originalName: string
  encoding: string
  mimeType: string
  fieldname: string
  localPath: string
  remotePath: string
  hostname: string
  size: number
  received: Date
}

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
  file: FileSchemaType
}

export default async function RemoteLogStreamModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const FileSchema = new Schema<FileSchemaType>({
    originalName: {
      type: String,
      default: "", // e.g database.sqlite
    },
    encoding: {
      type: String,
      default: "", // e.g utf8
    },
    mimeType: {
      type: String,
      default: "", // e.g application/text
    },
    fieldname: {
      type: String,
      default: "", // e.g "database" or "logs"
    },
    localPath: {
      type: String,
      default: "", // e.g /tmp/some/path
    },
    remotePath: {
      type: String,
      default: "", // e.g https://google.com?
    },
    hostname: {
      type: String,
      default: "", // e.g ip-10-6-56-205.ca-central-1.compute.internal
    },
    size: {
      type: Number,
      default: 0,
    },
    received: {
      type: Date,
      default: currentDate,
    },
  }, {
    _id: false,
    id: false,
  });

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
      type: FileSchema,
    },
  }, {
    autoIndex: false,
    timestamps: true,
  });

  return mongoose.model<RemoteLogStream>("RemoteLogStream", modelSchema, "massive_remote_log_stream", { overwriteModels: true });
}

export interface RemoteLogStreamModel extends Model<RemoteLogStream> { }

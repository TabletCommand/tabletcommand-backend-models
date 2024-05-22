import * as uuid from "uuid";
import {
  MongooseModule,
  currentDate,
} from "../helpers";
import { Types } from "mongoose";

interface FileSchemaType {
  originalName: string,
  encoding: string,
  mimeType: string,
  localPath: string,
  remotePath: string,
  size: number,
  received: Date,
}

export interface RemoteLogType {
  _id: Types.ObjectId,
  departmentId: string,
  userId: string,
  session: string,
  active: boolean,
  uuid: string,
  requestId: string,
  received: Date,
  hostname: string,
  status: string,
  lastStatusChange: Date,
  files: FileSchemaType[]
}

export default async function RemoteLogModule(mongoose: MongooseModule) {
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
    localPath: {
      type: String,
      default: "", // e.g /tmp/some/path
    },
    remotePath: {
      type: String,
      default: "", // e.g https://google.com?
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
    session: {
      type: String,
      default: "",
    },
    active: {
      type: Boolean,
      default: false,
    },
    uuid: {
      type: String,
      default: uuid.v4,
    },
    requestId: {
      type: String,
      default: uuid.v4,
    },
    received: {
      type: Date,
      default: currentDate,
    },
    hostname: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "", // local, uploading, synced (uploaded to a remote storage) 
    },
    lastStatusChange: {
      type: Date,
      default: currentDate,
    },
    files: {
      type: [FileSchema],
      default: [],
    },
  }, {
    collection: "massive_remote_log",
  });
  modelSchema.set("autoIndex", false);

  return mongoose.model<RemoteLogType>("RemoteLog", modelSchema);
}

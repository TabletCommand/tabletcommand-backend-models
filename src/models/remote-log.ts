import * as uuid from "uuid";
import {
  MongooseModule,
  createSchema,
  createModel,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
  currentDate,
} from "../helpers";

import RemoteFileSchema from "./schema/remote-file";

export async function RemoteLogModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const RemoteFile = RemoteFileSchema(mongoose);

  // This is almost identical to RemoteLogStream
  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
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
    collection: "massive_remote_log_stream",
    timestamps: true,
  });

  return createModel(mongoose, "RemoteLog", modelSchema);
}

export interface RemoteLog extends ItemTypeFromTypeSchemaFunction<typeof RemoteLogModule> { }
export interface RemoteLogModel extends ModelTypeFromTypeSchemaFunction<RemoteLog> { }
export default RemoteLogModule as ReplaceModelReturnType<typeof RemoteLogModule, RemoteLogModel>;

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

export async function RemoteLogModule(mongoose: MongooseModule) {
  const { Types } = mongoose;

  const FileSchema = createSchema({
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

  const modelSchema = createSchema({
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

  return createModel(mongoose, "RemoteLog", modelSchema);
}

export interface RemoteLog extends ItemTypeFromTypeSchemaFunction<typeof RemoteLogModule> { }
export interface RemoteLogModel extends ModelTypeFromTypeSchemaFunction<RemoteLog> { }
export default RemoteLogModule as ReplaceModelReturnType<typeof RemoteLogModule, RemoteLogModel>;

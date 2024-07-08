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

export async function RemoteLogStreamModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const FileSchema = createSchema(Schema, {
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
      type: [FileSchema],
      default: [],
    },
  }, {
    autoIndex: false,
    collection: "massive_remote_log_stream",
    timestamps: true,
  });

  return createModel(mongoose, "RemoteLogStream", modelSchema);
}

export interface RemoteLogStream extends ItemTypeFromTypeSchemaFunction<typeof RemoteLogStreamModule> { }
export interface RemoteLogStreamModel extends ModelTypeFromTypeSchemaFunction<RemoteLogStream> { }
export default RemoteLogStreamModule as ReplaceModelReturnType<typeof RemoteLogStreamModule, RemoteLogStreamModel>;

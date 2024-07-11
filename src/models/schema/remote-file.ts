import {
  MongooseModule,
  createSchema,
  currentDate,
} from "../../helpers";

export default function RemoteFileSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const Item = createSchema(Schema, {
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
    remoteFilePath: {
      type: String,
      default: "", // e.g https://drive.google.com/file/d/1abcABC/view?usp=drivesdk
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

  return Item;
}

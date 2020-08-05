import {
  MongooseModule,
  createSchema,
  createModel,
  retrieveCurrentUnixTime,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
} from "../helpers";

export async function MailLogModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
      auto: true,
    },
    mailId: {
      type: String,
      default: ""
    },
    event: {
      type: String,
      default: "",
    },
    timestamp: {
      type: Number,
    },
    recipient: {
      type: String,
      default: "",
    },
    recipientDomain: {
      type: String,
      default: "",
    },
    tags: {
      type: [String],
      default: [],
    },
    deliveryStatus: {
      type: Object,
      default: {},
    },
    message: {
      type: Object,
      default: {},
    },
    flags: {
      type: Object,
      default: {},
    },
    envelope: {
      type: Object,
      default: {},
    },
    logLevel: {
      type: String,
      default: ""
    },
    reason: {
      type: String,
      default: ""
    },
    severity: {
      type: String,
      default: ""
    },
    modified_unix_date: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },
  }, {
    collection: "massive_mail_log",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "MailLog", modelSchema);
}

export interface MailLog extends ItemTypeFromTypeSchemaFunction<typeof MailLogModule> { }
export interface MailLogModel extends ModelTypeFromTypeSchemaFunction<MailLog> { }
export default MailLogModule as ReplaceModelReturnType<typeof MailLogModule, MailLogModel>;

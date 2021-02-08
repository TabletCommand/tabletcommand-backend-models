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
import ColorModule from "./schema/color";

export async function MessageModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;
  const Color = ColorModule(mongoose);

  const TypeSchema = createSchema(Schema, {
    type: {
      type: String,
      default: "", // generic, support, requestLogs, upgradeApp, upgradeOS
    },
    typeOpts: {
      type: Object,
      default: {},
    },
  }, {
    _id: false,
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
    title: {
      type: String,
      default: ""
    },
    body: {
      type: String,
      default: "",
    },
    actionTitle: {
      type: String,
      default: ""
    },
    created: {
      type: Date,
      default: currentDate,
    },
    color: {
      type: Color,
      default: null,
    },
    url: {
      type: String,
      default: "",
    },
    priority: {
      type: Number,
      default: 10, // 1 highest, 10 lowest
    },
    type: {
      type: TypeSchema,
      default: {},
    },
  }, {
    collection: "massive_message",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "Message", modelSchema);
}

export interface Message extends ItemTypeFromTypeSchemaFunction<typeof MessageModule> { }
export interface MessageModel extends ModelTypeFromTypeSchemaFunction<Message> { }
export default MessageModule as ReplaceModelReturnType<typeof MessageModule, MessageModel>;

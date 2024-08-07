import * as uuid from "uuid";
import {
  MongooseModule,
  currentDate,
} from "../helpers";
import ColorModule from "./schema/color";
import { Model } from "mongoose";
import { MessageType, TypeSchemaType } from "../types/message";

export interface Message extends MessageType, Record<string, unknown> { }

export default async function MessageModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;
  const Color = ColorModule(mongoose);

  const TypeSchema = new Schema<TypeSchemaType>({
    type: {
      type: String,
      default: "", // generic, support, requestLogs, requestCADLogs, upgradeApp, upgradeOS
    },
    typeOpts: {
      type: Object,
      default: {},
    },
  }, {
    _id: false,
    id: false,
  });

  const modelSchema = new Schema<MessageType>({
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
    updated: {
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
  });
  modelSchema.set("autoIndex", false);

  return mongoose.model<Message>("Message", modelSchema, "massive_message", { overwriteModels: true });
}

export interface MessageModel extends Model<Message> { }
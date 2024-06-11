import * as uuid from "uuid";
import {
  MongooseModule,
  currentDate,
} from "../helpers";
import ColorModule, { ColorSchemaType } from "./schema/color";
import { Model, Types } from "mongoose";

interface TypeSchemaType {
  type: string,
  typeOpts: object
}
export interface Message {
  _id: Types.ObjectId
  departmentId: string,
  userId: string,
  session: string,
  active: boolean,
  uuid: string,
  requestId: string,
  title: string,
  body: string,
  actionTitle: string,
  created: Date,
  updated: Date,
  color: ColorSchemaType,
  url: string,
  priority: number,
  type: TypeSchemaType
}

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

  const modelSchema = new Schema<Message>({
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
    collection: "massive_message",
  });
  modelSchema.set("autoIndex", false);

  return mongoose.model<Message>("Message", modelSchema);
}

export interface MessageModel extends Model<Message> { }
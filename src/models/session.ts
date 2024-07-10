import {
  MongooseModule,
} from "../helpers";
import * as uuid from "uuid";

import OAuthSchema, { OAuthSchemaType } from "./schema/oauth";
import { Model } from "mongoose";

export interface Session {
  _id: string,
  id?: string,
  nick: string,
  email: string,
  user: string,
  active: boolean,
  token: string,
  source: string,
  departmentId: string,
  why: string,
  when: string,
  ended: string,
  userAgent: string,
  remoteAddress: string,
  deviceId: string,
  authSource: string,
  oAuth: OAuthSchemaType,
}

export default async function SessionModule(mongoose: MongooseModule) {
  const Schema = mongoose.Schema;
  const OAuthToken = OAuthSchema(mongoose);

  function requiredButAllowEmptyString(this: Session) {
    // Workaround to set required, and allow empty id
    return typeof this.departmentId === "string";
  }

  const modelSchema = new Schema<Session>({
    _id: {
      type: String,
      default: uuid.v4,
    },
    nick: String,
    email: String,
    user: String,
    active: {
      type: Boolean,
      default: false,
    },
    token: {
      type: String,
      default: uuid.v4,
    },
    source: {
      type: String,
      default: "", // Options: browser, ipad, iphone, android
    },
    departmentId: {
      type: String,
      default: "",
      required: requiredButAllowEmptyString,
      index: true,
    },
    why: {
      type: String,
      default: "password",
    },
    when: String,
    ended: String,
    userAgent: {
      type: String,
      default: "",
    },
    remoteAddress: {
      type: String,
      default: "",
    },
    deviceId: {
      type: String,
      default: "",
    },
    authSource: { // user.auth, password OR o-google OR o-microsoft
      type: String,
      default: "",
    },
    // Store the refresh token, in use only when authSource is o-google or o-microsoft
    oAuth: {
      type: OAuthToken,
      default: null,
    },
  }, {
  });
  modelSchema.set("autoIndex", false);

  modelSchema.pre("save", function (next) {
    this._id = this.get("token"); // Copy _id from token
    next();
  });
  modelSchema.virtual("id").get(function (this: Session) {
    return this._id.toString();
  });

  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
  });


  return mongoose.model<Session>("Session", modelSchema, "sys_login", { overwriteModels: true });
}

export interface SessionModel extends Model<Session> { }
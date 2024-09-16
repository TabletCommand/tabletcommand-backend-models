import {
  MongooseModule,
} from "../helpers";
import * as uuid from "uuid";

import OAuthSchema from "./schema/oauth";
import { Model } from "mongoose";
import { SessionType } from "../types/session";

export interface Session extends SessionType { }

export default async function SessionModule(mongoose: MongooseModule) {
  const Schema = mongoose.Schema;
  const OAuthToken = OAuthSchema(mongoose);

  function requiredButAllowEmptyString(value: unknown) {
    // Workaround to set required, and allow empty id
    return typeof value === "string";
  }

  const modelSchema = new Schema<SessionType>({
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
      validate: {
        validator: requiredButAllowEmptyString,
        message: "departmentId is required",
      },
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
    autoIndex: false,
    toJSON: {
      virtuals: true,
      versionKey: false,
    }
  });

  modelSchema.pre("save", function(next) {
    this._id = this.get("token"); // Copy _id from token
    next();
  });

  modelSchema.index({
    departmentId: 1,
    when: -1
  }, {
    name: "departmentId_1_when_-1",
  });

  // TODO: Review if this should be unique
  modelSchema.index({
    nick: 1,
  }, {
    name: "nick_1",
    // unique: true,
  });

  modelSchema.index({
    token: 1,
    active: 1
  }, {
    name: "token_1_active_1",
  });

  modelSchema.index({
    token: 1,
  }, {
    name: "token_1_unique",
    unique: true,
  });

  modelSchema.index({
    user: 1,
    active: 1
  }, {
    name: "user_1_active_1",
  });

  modelSchema.index({
    user: 1,
    when: 1
  }, {
    name: "user_1_when_1",
  });

  modelSchema.index({
    when: 1,
  }, {
    name: "when_1",
  });

  return mongoose.model<Session>("Session", modelSchema, "sys_login", { overwriteModels: true });
}

export interface SessionModel extends Model<Session> { }
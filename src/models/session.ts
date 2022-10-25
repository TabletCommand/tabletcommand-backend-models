import {
  createModel,
  createSchema,
  currentDate,
  DocumentTypeFromSchema,
  FieldsOfDocument,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  MongooseModule,
  ReplaceModelReturnType,
} from "../helpers";
import * as uuid from "uuid";

import OAuthSchema from "./schema/oauth";

export async function SessionModule(mongoose: MongooseModule) {
  const Schema = mongoose.Schema;
  const OAuthToken = OAuthSchema(mongoose);

  function requiredButAllowEmptyString(this: { myField: unknown }) {
    // Workaround to set required, and allow empty id
    return typeof this.myField === "string";
  }

  const modelSchema = createSchema(Schema, {
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
    // All the sessions that could be created by this oAuth user (at this time)
    // Used externally, this value can be leaked
    authGroupKey: {
      type: String,
      default: "",
    },
    authGroupExpireAt: {
      type: Date,
      default: currentDate,
    },
    // Store the refresh token, in use only when authSource is o-google or o-microsoft
    oAuth: {
      type: OAuthToken,
      default: null,
    },
  }, {
    collection: "sys_login",
  });
  modelSchema.set("autoIndex", false);

  modelSchema.pre("save", function(next) {
    this._id = this.get("token") as string; // Copy _id from token
    next();
  });

  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform(doc: DocumentTypeFromSchema<typeof modelSchema>, ret: FieldsOfDocument<DocumentTypeFromSchema<typeof modelSchema>>) {
      ret.id = ret._id;
    },
  });

  modelSchema.virtual("id").get(function(this: DocumentTypeFromSchema<typeof modelSchema>) {
    return this._id.toString();
  });

  return createModel(mongoose, "Session", modelSchema);
}

export interface Session extends ItemTypeFromTypeSchemaFunction<typeof SessionModule> { }
export interface SessionModel extends ModelTypeFromTypeSchemaFunction<Session> { }
export default SessionModule as ReplaceModelReturnType<typeof SessionModule, SessionModel>;

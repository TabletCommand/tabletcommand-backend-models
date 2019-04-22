import { MongooseModule, UnboxPromise } from "./types";
import { createSchema, createModel, DocumentTypeFromSchema, FieldsOfDocument } from "./helpers";
import * as uuid from "uuid";

export async function SessionModule(mongoose: MongooseModule) {
  "use strict";

  var Schema = mongoose.Schema;

  function requiredButAllowEmptyString(this: { myField: unknown }) {
    // Workaround to set required, and allow empty id
    return typeof this.myField === "string";
  }

  var modelSchema = createSchema(Schema, {
    _id: {
      type: String,
      default: uuid.v4
    },
    nick: String,
    email: String,
    user: String,
    active: {
      type: Boolean,
      default: false
    },
    token: {
      type: String,
      default: uuid.v4
    },
    source: {
      type: String,
      default: "" // Options: browser, ipad, iphone, android
    },
    departmentId: {
      type: String,
      default: "",
      required: requiredButAllowEmptyString,
      index: true
    },
    why: {
      type: String,
      default: "password"
    },
    when: String,
    ended: String,
    userAgent: {
      type: String,
      default: ""
    },
    remoteAddress: {
      type: String,
      default: ""
    },
    deviceId: {
      type: String,
      default: ""
    }
  }, {
    collection: "sys_login"
  });
  modelSchema.set("autoIndex", false);

  modelSchema.pre("save", function(next) {
    this._id = this.get("token"); // Copy _id from token
    next();
  });

  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform(doc: DocumentTypeFromSchema<typeof modelSchema>, ret: FieldsOfDocument<DocumentTypeFromSchema<typeof modelSchema>>) {
      ret.id = ret._id;
    }
  });

  modelSchema.virtual("id").get(function(this: DocumentTypeFromSchema<typeof modelSchema>) {
    return this._id.toString();
  });

  return createModel(mongoose, "Session", modelSchema);
};

export default SessionModule;
export type Session = UnboxPromise<ReturnType<typeof SessionModule>>
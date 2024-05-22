import { Types } from "mongoose";
import {
  MongooseDocument,
  MongooseModule,
} from "../helpers";
import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";

export interface SMTPUnhandledType {
  _id: Types.ObjectId,
  email: string,
  message: string,
}

export default async function SMTPUnhandledModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<SMTPUnhandledType>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    email: {
      type: String,
      default: "",
      required: true,
    },
    message: {
      type: String,
      default: "",
      required: true,
    },
  }, {
    collection: "massive_smtp_unhandled",
  });
  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
  });

  modelSchema.virtual("id").get(function (this: MongooseDocument) {
    return this._id.toHexString();
  });

  modelSchema.plugin(mongooseLeanVirtuals);
  modelSchema.set("autoIndex", false);

  return mongoose.model<SMTPUnhandledType>("SMTPUnhandled", modelSchema);
}

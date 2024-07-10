import { Model, Types } from "mongoose";
import {
  MongooseDocument,
  MongooseModule,
} from "../helpers";
import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";

export interface SMTPUnhandled {
  _id: Types.ObjectId,
  id?: string,
  email: string,
  message: string,
}

export default async function SMTPUnhandledModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<SMTPUnhandled>({
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

  return mongoose.model<SMTPUnhandled>("SMTPUnhandled", modelSchema, "massive_smtp_unhandled", { overwriteModels: true });
}

export interface SMTPUnhandledModel extends Model<SMTPUnhandled> { }
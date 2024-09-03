import { Model } from "mongoose";
import {
  MongooseModule,
} from "../helpers";
import { SMTPUnhandledType } from "../types/smtp-unhandled";

export interface SMTPUnhandled extends SMTPUnhandledType { }

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
    autoIndex: false,
    toJSON: {
      versionKey: false,
    }
  });

  return mongoose.model<SMTPUnhandled>("SMTPUnhandled", modelSchema, "massive_smtp_unhandled", { overwriteModels: true });
}

export interface SMTPUnhandledModel extends Model<SMTPUnhandled> { }
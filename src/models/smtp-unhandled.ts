import {
  createModel,
  createSchema,
  ItemTypeFromTypeSchemaFunction,
  MongooseDocument,
  MongooseModule,
  ReplaceModelReturnType,
} from "../helpers";
import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";
import { Document, Model } from "mongoose";

export async function SMTPUnhandledModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
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

  modelSchema.virtual("id").get(function(this: MongooseDocument) {
    // tslint:disable-next-line: no-unsafe-any
    return this._id && this._id.toString();
  });

  modelSchema.plugin(mongooseLeanVirtuals);
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "SMTPUnhandled", modelSchema);
}

export interface SMTPUnhandled extends Document, ItemTypeFromTypeSchemaFunction<typeof SMTPUnhandledModule> { }
export interface SMTPUnhandledModel extends Model<SMTPUnhandled> { }
export default SMTPUnhandledModule as unknown as ReplaceModelReturnType<typeof SMTPUnhandledModule, SMTPUnhandledModel>;

import {
  createModel,
  createSchema,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  MongooseDocument,
  MongooseModule,
  ReplaceModelReturnType,
} from "../helpers";
import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";

export async function SMTPUnhandledModule(mongoose: MongooseModule) {
  const { Types } = mongoose;

  const modelSchema = createSchema({
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
    return this._id.toHexString();
  });

  modelSchema.plugin(mongooseLeanVirtuals);
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "SMTPUnhandled", modelSchema);
}

export interface SMTPUnhandled extends ItemTypeFromTypeSchemaFunction<typeof SMTPUnhandledModule> { }
export interface SMTPUnhandledModel extends ModelTypeFromTypeSchemaFunction<SMTPUnhandled> { }
export default SMTPUnhandledModule as ReplaceModelReturnType<typeof SMTPUnhandledModule, SMTPUnhandledModel>;

import {
  createSchema,
  MongooseModule,
} from "../../helpers";

export default function EsriErrorModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const EsriError = createSchema(Schema, {
    code: {
      type: Number,
      default: 1,
    },
    error: {
      type: String,
      default: "",
    },
    error_description: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
  });

  return EsriError;
}

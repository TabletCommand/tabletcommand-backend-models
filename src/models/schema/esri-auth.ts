import {
  createSchema,
  MongooseModule,
} from "../../helpers";

export default function EsriAuthModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const EsriAuthPassword = createSchema(Schema, {
    iv: {
      type: String,
      default: "",
    },
    encryptedData: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
  });

  const EsriAuth = createSchema(Schema, {
    username: {
      type: String,
      default: "",
    },
    encrypted: {
      type: EsriAuthPassword,
      default: null,
    },
  }, {
    _id: false,
  });

  return EsriAuth;
}

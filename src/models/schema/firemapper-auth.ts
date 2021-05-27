import {
  createSchema,
  MongooseModule,
} from "../../helpers";

export default function FireMapperAuthSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const FireMapperEncrypted = createSchema(Schema, {
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

  const FireMapperAuth = createSchema(Schema, {
    username: {
      type: String,
      default: "",
    },
    encrypted: {
      type: FireMapperEncrypted,
      default: null,
    },
    encryptedAccessCode: {
      type: FireMapperEncrypted,
      default: null,
    },
  }, {
    _id: false,
  });

  return FireMapperAuth;
}

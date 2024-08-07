import {
  MongooseModule,
} from "../../helpers";
import { FireMapperEncryptedType, FireMapperAuthType } from "../../types/firemapper-auth";

export default function FireMapperAuthSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const FireMapperEncrypted = new Schema<FireMapperEncryptedType>({
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
    id: false,
  });

  const FireMapperAuth = new Schema<FireMapperAuthType>({
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
    id: false,
  });

  return FireMapperAuth;
}

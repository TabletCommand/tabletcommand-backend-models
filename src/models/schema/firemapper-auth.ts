import {
  createSchema,
} from "../../helpers";

export default function FireMapperAuthSchema() {

  const FireMapperEncrypted = createSchema({
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

  const FireMapperAuth = createSchema({
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

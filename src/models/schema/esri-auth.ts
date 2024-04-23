import {
  createSchema,
} from "../../helpers";

export default function EsriAuthSchema() {

  const EsriAuthPassword = createSchema({
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

  const EsriAuth = createSchema({
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
    id: false,
  });

  return EsriAuth;
}

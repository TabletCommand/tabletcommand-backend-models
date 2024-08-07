import {
  MongooseModule,
} from "../../helpers";
import { EsriAuthPasswordType, EsriAuthSchemaType } from "../../types/esri";

export default function EsriAuthSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const EsriAuthPassword = new Schema<EsriAuthPasswordType>({
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

  const EsriAuth = new Schema<EsriAuthSchemaType>({
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

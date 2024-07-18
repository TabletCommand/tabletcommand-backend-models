import {
  MongooseModule,
} from "../../helpers";
import { EsriErrorSchemaType } from "../../types/esri";

export default function EsriErrorSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const EsriError = new Schema<EsriErrorSchemaType>({
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
    id: false,
  });

  return EsriError;
}

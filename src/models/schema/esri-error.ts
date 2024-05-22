import {
  MongooseModule,
} from "../../helpers";

export interface EsriErrorSchemaType {
  code: number,
  error: string,
  error_description: string,
  message: string,
}

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

import {
  createSchema,
} from "../../helpers";

export default function EsriErrorSchema() {

  const EsriError = createSchema({
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

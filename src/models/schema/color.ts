import {
  createSchema,
} from "../../helpers";

export default function ColorSchema() {

  const Color = createSchema({
    background: {
      type: String,
      default: "#851414", // Red-like
    },
    text: {
      type: String,
      default: "#F8F8F8", // White-like
    },
  }, {
    _id: false,
    id: false,
  });

  return Color;
}

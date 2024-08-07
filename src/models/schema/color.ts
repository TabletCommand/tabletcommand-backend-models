import {
  MongooseModule,
} from "../../helpers";
import { ColorSchemaType } from "../../types/color";

export default function ColorSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const Color = new Schema<ColorSchemaType>({
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

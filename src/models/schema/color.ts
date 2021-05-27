import {
  MongooseModule,
  createSchema,
} from "../../helpers";

export default function ColorSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const Color = createSchema(Schema, {
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
  });

  return Color;
}

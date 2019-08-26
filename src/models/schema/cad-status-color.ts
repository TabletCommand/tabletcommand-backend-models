import {
  MongooseModule,
  createSchema,
} from "../../helpers";

export function RateLimitModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const CADStatusColor = createSchema(Schema, {
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

  return CADStatusColor;
}

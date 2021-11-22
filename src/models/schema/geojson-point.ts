import {
  createSchema,
  MongooseModule,
} from "../../helpers";

export default function GeoJSONPointSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const GeoJSONPoint = createSchema(Schema, {
    type: {
      type: String,
      required: true,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number],
      required: true,
      default: [],
    },
  }, {
    _id: false,
    id: false,
  });

  return GeoJSONPoint;
}

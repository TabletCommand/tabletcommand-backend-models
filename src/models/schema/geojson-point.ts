import {
  createSchema,
  MongooseModule,
} from "../../helpers";

export default function GeoJSONPointModule(mongoose: MongooseModule) {
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
  });

  return GeoJSONPoint;
}

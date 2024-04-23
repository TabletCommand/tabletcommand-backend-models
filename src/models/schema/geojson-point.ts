import {
  createSchema,
} from "../../helpers";

export default function GeoJSONPointSchema() {

  const GeoJSONPoint = createSchema({
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

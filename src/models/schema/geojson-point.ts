import {
  MongooseModule,
} from "../../helpers";

export interface GeoJSONPointType {
  type: string
  coordinates: number[]
}

export default function GeoJSONPointSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const GeoJSONPoint = new Schema<GeoJSONPointType>({
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

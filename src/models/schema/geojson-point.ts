import {
  createSchema,
  MongooseModule,
} from "../../helpers";

export default function GeoJSONPointModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const GeoJSONPoint = createSchema(Schema, {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: {
      type: [Number],
      default: [],
    },
  }, {
    _id: false,
  });

  return GeoJSONPoint;
}

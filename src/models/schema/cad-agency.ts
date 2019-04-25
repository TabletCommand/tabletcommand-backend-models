import { createSchema } from "../helpers";
import { MongooseModule } from "../helpers";

export function CADAgency(mongoose: MongooseModule) {
  const Schema = mongoose.Schema;

  const Agency = createSchema(Schema, {
    code: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    domain: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
  });

  return Agency;
}

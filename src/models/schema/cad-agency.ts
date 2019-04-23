import { createSchema } from "../helpers";
import { MongooseModule } from "../types";

export function CADAgency(mongoose: MongooseModule) {
  var Schema = mongoose.Schema;

  var Agency = createSchema(Schema, {
    code: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    domain: {
      type: String,
      default: ""
    }
  }, {
    _id: false
  });

  return Agency;
};

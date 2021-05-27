import {
  MongooseModule,
  createSchema,
} from "../../helpers";

export default function CADStatusOptionSelectedSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const Item = createSchema(Schema, {
    name: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "string", // integer, bool
    },
    value: {
      type: String,
      default: "",
    },
    key: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
  });

  return Item;
}

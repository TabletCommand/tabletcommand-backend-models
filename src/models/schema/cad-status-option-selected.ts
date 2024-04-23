import {
  createSchema,
} from "../../helpers";

export default function CADStatusOptionSelectedSchema() {

  const Item = createSchema({
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
    id: false,
  });

  return Item;
}

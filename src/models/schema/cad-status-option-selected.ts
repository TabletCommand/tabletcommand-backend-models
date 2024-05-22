import {
  MongooseModule,
} from "../../helpers";

export interface CADStatusOptionSelectedSchemaType {
  name: string,
  type: string,
  value: string,
  key: string,
}

export default function CADStatusOptionSelectedSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const Item = new Schema<CADStatusOptionSelectedSchemaType>({
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

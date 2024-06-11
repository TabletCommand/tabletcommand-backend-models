import {
  MongooseModule,
  currentDate,
} from "../../helpers";

export interface PubNubTokenSchemaType {
  token: string,
  expireAt: Date,
  runAt: Date | string,
}

export default function PubNubTokenSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const Item = new Schema<PubNubTokenSchemaType>({
    token: {
      type: String,
      default: "",
    },
    expireAt: {
      type: Date,
      default: currentDate,
    },
    runAt: {
      type: Date || String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  return Item;
}

import {
  MongooseModule,
  currentDate,
} from "../../helpers";
import { PubNubTokenSchemaType } from "../../types/pubnub-token";

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
      type: Date,
    },
  }, {
    _id: false,
    id: false,
  });

  return Item;
}

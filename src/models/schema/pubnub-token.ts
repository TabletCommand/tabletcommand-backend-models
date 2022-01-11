import {
  MongooseModule,
  createSchema,
  currentDate,
} from "../../helpers";

export default function PubNubTokenSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const Item = createSchema(Schema, {
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
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });  

  return Item;
}

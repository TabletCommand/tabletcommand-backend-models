import {
  createSchema,
  currentDate,
} from "../../helpers";

export default function PubNubTokenSchema() {

  const Item = createSchema({
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

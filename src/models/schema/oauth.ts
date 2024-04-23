import {
  createSchema,
} from "../../helpers";

export default function OAuthSchema() {

  const Item = createSchema({
    accessToken: {
      type: String,
      default: "",
    },
    refreshToken: {
      type: String,
      default: "",
    },
    expireAt: {
      type: Date,
      default: new Date("2022-10-10T10:10:10Z"), //  Some Expired Date, in the past
    },
  }, {
    _id: false,
    id: false,
  });  

  return Item;
}

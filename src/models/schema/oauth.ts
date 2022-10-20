import {
  MongooseModule,
  createSchema,
} from "../../helpers";

export default function OAuthSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const Item = createSchema(Schema, {
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

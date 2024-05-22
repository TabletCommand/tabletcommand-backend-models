import {
  MongooseModule,
} from "../../helpers";

export interface OAuthSchemaType {
  accessToken: string,
  refreshToken: string,
  expireAt: Date,
}

export default function OAuthSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const Item = new Schema<OAuthSchemaType>({
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

import {
  createSchema,
  MongooseModule,
} from "../../helpers";

export default function AgencySAMLSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const AgencySAML = createSchema(Schema, {
    selector: {
      type: String,
      required: true,
      unique: true,
    },
    idp: {
      type: String,
      default: "",
    },
    sp: {
      type: String,
      default: "",
    },
    env: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    // For Google Accounts, append https://accounts.google.com/accountchooser?continue=
    // Options: none, google
    jumpPoint: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
    timestamps: true,
    autoIndex: false,
    toJSON: {
      virtuals: true,
      versionKey: false,
    }
  });

  return AgencySAML;
}
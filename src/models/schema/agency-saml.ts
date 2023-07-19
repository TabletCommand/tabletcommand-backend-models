import {
  createSchema,
  MongooseModule,
} from "../../helpers";

export default function AgencySAMLSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const AgencyCronConfig = createSchema(Schema, {
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

  return AgencyCronConfig;
}
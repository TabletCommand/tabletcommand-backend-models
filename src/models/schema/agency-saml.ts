import {
  MongooseModule,
} from "../../helpers";

export interface AgencySAMLSchemaType {
  selector: string,
  idp: string,
  sp: string,
  env: string,
}

export default function AgencySAMLSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const AgencyCronConfig = new Schema<AgencySAMLSchemaType>({
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
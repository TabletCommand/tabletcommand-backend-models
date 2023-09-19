import {
  MongooseModule,
  createSchema,
} from "../../helpers";

export default function ReportNumberModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const ReportNumber = createSchema(Schema, {
    name: {
      type: String,
      default: "",
    },
    number: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
    toJSON: {
      versionKey: false,
    }
  });

  return ReportNumber;
}

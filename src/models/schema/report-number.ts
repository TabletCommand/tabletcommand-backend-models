import {
  createSchema,
} from "../../helpers";

export default function ReportNumberModule() {

  const ReportNumber = createSchema({
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

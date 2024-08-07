import {
  MongooseModule,
  currentDate,
} from "../../helpers";
import { ValidationErrorItemSchemaType } from "../../types/validation";

export default function ValidationErrorItemSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const Item = new Schema<ValidationErrorItemSchemaType>({
    message: {
      type: String,
      default: "",
    },
    firstSeenAt: {
      type: Date,
      default: currentDate,
    },
    lastSeenAt: {
      type: Date,
      default: currentDate,
    },
    clearedAt: {
      type: Date,
      default: undefined,
    },
    // Req Body
    payload: {
      type: Object,
      default: {}
    },
  }, {
    _id: false,
    id: false,
  });

  return Item;
}

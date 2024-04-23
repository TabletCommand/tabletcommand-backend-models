import {
  createSchema,
  currentDate,
} from "../../helpers";

export default function ValidationErrorItemSchema() {

  const Item = createSchema({
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

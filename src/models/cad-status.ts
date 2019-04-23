import * as uuid from "uuid";
import { MongooseModule, UnboxPromise } from "./types";
import { createSchema, createModel } from "./helpers";


export async function CADStatusModule(mongoose: MongooseModule) {
  "use strict";

  var { Schema } = mongoose;
  var CADStatusColor = (await import("./schema/cad-status-color")).RateLimitModule(mongoose);

  var StatusOptionValue = createSchema(Schema, {
    name: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "string" // int, bool
    },
    visible: {
      type: Boolean,
      default: true
    },
    value: {
      type: String,
      default: ""
    },
    favorite: {
      type: Boolean,
      default: false
    },
    position: {
      type: Number,
      default: 0
    }
  }, {
    _id: false
  });

  var StatusOption = createSchema(Schema, {
    name: {
      type: String,
      default: ""
    },
    position: {
      type: Number,
      default: 0
    },
    visible: {
      type: Boolean,
      default: true
    },
    cadKey: {
      type: String,
      default: ""
    },
    cadValues: {
      type: [StatusOptionValue],
      default: []
    }
  }, {
    _id: false
  });

  var modelSchema = createSchema(Schema, {
    uuid: {
      type: String,
      index: true,
      default: uuid.v4
    },
    departmentId: {
      type: String,
      default: "",
      required: true,
      index: true
    },
    modifiedDate: {
      type: Number,
      default: 0,
      min: 1
    },
    statusId: {
      type: Number,
      default: 0,
      required: true,
      min: 0
    },
    code: {
      type: String,
      default: "",
      required: true,
      minlength: 1
    },
    status: {
      type: String,
      default: "",
      required: true,
      minlength: 1
    },
    name: {
      type: String,
      default: ""
    },
    normalized: {
      type: String,
      default: ""
    },
    selfAssignable: {
      type: Boolean,
      default: false
    },
    roaming: {
      type: Boolean,
      default: false
    },
    options: {
      type: [StatusOption],
      default: []
    },
    color: {
      type: CADStatusColor,
      default: null
    }
  }, {
    collection: "massive_cad_status"
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "CADStatus", modelSchema);
};

export default CADStatusModule
export type CADStatus = UnboxPromise<ReturnType<typeof CADStatusModule>>
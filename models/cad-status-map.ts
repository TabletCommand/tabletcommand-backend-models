import { MongooseModule, UnboxPromise } from "./types";
import * as _ from "lodash";
import { TypedDocument, createSchema, createModel } from "./helpers";

export async function CADStatusMapModule(mongoose: MongooseModule) {

  var Schema = mongoose.Schema;

  var ToStatusIdSchema = createSchema(Schema, {
    statusId: {
      type: Number,
      default: 0,
      required: true,
      min: 0
    },
    userEnabled: {
      type: Boolean
    }
  }, {
    _id: false
  });

  // Using hook instead of default values,
  // so we keep the db value if no value was sent by the API/CAD
  ToStatusIdSchema.pre("save", function(this: TypedDocument<typeof ToStatusIdSchema>, next) {
    var self = this;

    if (_.isUndefined(self.userEnabled) || _.isNull(self.userEnabled)) {
      self.userEnabled = true;
    }

    return next();
  });

  // Update static items (keep in sync with the lib/cad-status-map/updateDocument!)
  var modelSchema = createSchema(Schema, {
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
    fromStatusId: {
      type: Number,
      default: 0,
      required: true,
      min: 0
    },
    toStatusIds: {
      type: [ToStatusIdSchema],
      required: true
    }
  }, {
    collection: "massive_cad_status_map"
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "CADStatusMap", modelSchema);
};

export default CADStatusMapModule
export type CADStatusMap = UnboxPromise<ReturnType<typeof CADStatusMapModule>>

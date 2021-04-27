import * as _ from "lodash";
import {
  createModel,
  createSchema,
  currentDate,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  MongooseModule,
  ReplaceModelReturnType,
  TypedDocument,
} from "../helpers";

export async function CADStatusMapModule(mongoose: MongooseModule) {
  const Schema = mongoose.Schema;

  const ToStatusIdSchema = createSchema(Schema, {
    statusId: {
      type: Number,
      default: 0,
      required: true,
      min: 0,
    },
    userEnabled: {
      type: Boolean,
    },
  }, {
    _id: false,
  });

  // Using hook instead of default values,
  // so we keep the db value if no value was sent by the API/CAD
  ToStatusIdSchema.pre("save", function(this: TypedDocument<typeof ToStatusIdSchema>, next) {
    if (_.isUndefined(this.userEnabled) || _.isNull(this.userEnabled)) {
      this.userEnabled = false;
    }
    next();
  });

  // Update static items (keep in sync with the lib/cad-status-map/updateDocument!)
  const modelSchema = createSchema(Schema, {
    departmentId: {
      type: String,
      default: "",
      required: true,
      index: true,
    },
    modifiedDate: {
      type: Number,
      default: 0,
      min: 1,
    },
    modified: {
      type: Date,
      default: currentDate,
    },
    fromStatusId: {
      type: Number,
      default: 0,
      required: true,
      min: 0,
    },
    toStatusIds: {
      type: [ToStatusIdSchema],
      required: true,
    },
  }, {
    collection: "massive_cad_status_map",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "CADStatusMap", modelSchema);
}

export interface CADStatusMap extends ItemTypeFromTypeSchemaFunction<typeof CADStatusMapModule> { }
export interface CADStatusMapModel extends ModelTypeFromTypeSchemaFunction<CADStatusMap> { }
export default CADStatusMapModule as ReplaceModelReturnType<typeof CADStatusMapModule, CADStatusMapModel>;

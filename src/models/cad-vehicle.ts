import {
  createModel,
  createSchema,
  currentDate,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  MongooseModule,
  ReplaceModelReturnType,
} from "../helpers";
import * as uuid from "uuid";

export async function CADVehicleModule(mongoose: MongooseModule) {
  const Schema = mongoose.Schema;

  const Station = createSchema(Schema, {
    code: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const modelSchema = createSchema(Schema, {
    // Internal
    uuid: {
      type: String,
      index: true,
      default: uuid.v4,
    },
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

    // Provided by CAD
    vehicleId: {
      type: String,
      default: "",
      required: true,
      minlength: 1,
    },
    radioName: {
      type: String,
      default: "",
      required: true,
      minlength: 1,
    },
    station: {
      type: Station,
      default: null,
    },
    capability: {
      type: String,
      default: "",
    },

    // Internal
    mapHidden: {
      type: Boolean,
      default: false,
    },
    locationToCAD: {
      type: Boolean,
      default: false
    },
    backupDate: {
      type: Date,
    },
  }, {
    collection: "massive_cad_vehicle",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "CADVehicle", modelSchema);
}

export interface CADVehicle extends ItemTypeFromTypeSchemaFunction<typeof CADVehicleModule> { }
export interface CADVehicleModel extends ModelTypeFromTypeSchemaFunction<CADVehicle> { }
export default CADVehicleModule as ReplaceModelReturnType<typeof CADVehicleModule, CADVehicleModel>;

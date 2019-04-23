import { MongooseModule, UnboxPromise } from "./types";
import { createSchema, createModel } from "./helpers";
import * as uuid from "uuid";

export async function CADVehicleModule(mongoose: MongooseModule) {
  var Schema = mongoose.Schema;
  

  var Station = createSchema(Schema, {
    code: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
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
    vehicleId: {
      type: String,
      default: "",
      required: true,
      minlength: 1
    },
    radioName: {
      type: String,
      default: "",
      required: true,
      minlength: 1
    },
    station: {
      type: Station,
      default: null
    }
  }, {
    collection: "massive_cad_vehicle"
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "CADVehicle", modelSchema);
  
};

export default CADVehicleModule
export type CADVehicle = UnboxPromise<ReturnType<typeof CADVehicleModule>>
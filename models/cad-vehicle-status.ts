import * as  uuid from "uuid";
import * as  _ from "lodash";
import { createModel, createSchema, createSchemaDefinition, DocumentFromSchemaDefinition } from "./helpers";
import { MongooseModule, UnboxPromise } from "./types";

export async function CADVehicleStatusModule(mongoose: MongooseModule) {

  var Schema = mongoose.Schema;

  var CADStatusOptionSelected = createSchema(Schema, {
    name: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "string" // integer, bool
    },
    value: {
      type: String,
      default: ""
    },
    key: {
      type: String,
      default: ""
    }
  }, {
    _id: false
  });

  var modelSchemaConfig = createSchemaDefinition({
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
    requestTime: {
      type: Number,
      default: 0
    },
    responseTime: {
      type: Number,
      default: 0
    },
    status: {
      type: String,
      default: "",
      required: true,
      minlength: 1
    },
    statusCode: {
      type: String,
      default: "",
      required: true,
      minlength: 1
    },
    modifiedDate: {
      type: Number,
      default: 0,
      min: 1
    },
    requestStatus: {
      type: Number,
      default: 0
    },
    owner: {
      type: String,
      default: ""
    },
    incidentNumber: {
      type: String,
      default: ""
    },
    options: {
      type: [CADStatusOptionSelected],
      default: []
    }
  })

  type CADVehicleStatus = DocumentFromSchemaDefinition<typeof modelSchemaConfig>;
  var modelSchema = createSchema(Schema, modelSchemaConfig, {
    collection: "massive_cad_vehicle_status"
  }, {
    propagateToObject<T>(dbItem : CADVehicleStatus, callback: (o: CADVehicleStatus)=> T): T {
      const that = this; // Reassign this to silence standard/no-callback-literal
      if (!_.isObject(dbItem)) {
        return callback(that);
      }

      // We keep the same value for _id, uuid, departmentId
      dbItem.vehicleId = this.vehicleId;
      dbItem.radioName = this.radioName;
      dbItem.requestTime = this.requestTime;
      dbItem.responseTime = this.responseTime;
      dbItem.status = this.status;
      dbItem.statusCode = this.statusCode;
      dbItem.modifiedDate = this.modifiedDate;
      dbItem.requestStatus = this.requestStatus;
      dbItem.owner = this.owner;
      dbItem.incidentNumber = this.incidentNumber;
      dbItem.options = this.options;

      return callback(dbItem);
    }
  });

  modelSchema.set("autoIndex", false);
  return createModel(mongoose, "CADVehicleStatus", modelSchema);
};

export default CADVehicleStatusModule;
export type CADVehicleStatus = UnboxPromise<ReturnType<typeof CADVehicleStatusModule>>
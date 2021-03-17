import * as  uuid from "uuid";
import * as  _ from "lodash";
import {
  createModel,
  createSchema,
  createSchemaDefinition,
  currentDate,
  DocumentFromSchemaDefinition,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  MongooseModule,
  ReplaceModelReturnType,
} from "../helpers";
import CADStatusOptionSelectedModule from "./schema/cad-status-option-selected";

export async function CADVehicleStatusModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;
  const CADStatusOptionSelected = CADStatusOptionSelectedModule(mongoose);

  const modelSchemaConfig = createSchemaDefinition({
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
    requestTime: {
      type: Number,
      default: 0,
    },
    responseTime: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: "",
      required: true,
      minlength: 1,
    },
    statusCode: {
      type: String,
      default: "",
      required: true,
      minlength: 1,
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
    requestStatus: {
      type: Number,
      default: 0,
    },
    owner: {
      type: String,
      default: "",
    },
    incidentNumber: {
      type: String,
      default: "",
    },
    options: {
      type: [CADStatusOptionSelected],
      default: [],
    },
    capability: {
      type: String,
      default: "",
    },
  });

  type CADVehicleStatus = DocumentFromSchemaDefinition<typeof modelSchemaConfig>;
  const modelSchema = createSchema(Schema, modelSchemaConfig, {
    collection: "massive_cad_vehicle_status",
  }, {
    // eslint-disable-next-line no-unused-vars
    propagateToObject<T>(dbItem: CADVehicleStatus, callback: (o: CADVehicleStatus) => T): T {
      if (!_.isObject(dbItem)) {
        return callback(this);
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
    },
  });

  modelSchema.set("autoIndex", false);
  return createModel(mongoose, "CADVehicleStatus", modelSchema);
}

export interface CADVehicleStatus extends ItemTypeFromTypeSchemaFunction<typeof CADVehicleStatusModule> { }
export interface CADVehicleStatusModel extends ModelTypeFromTypeSchemaFunction<CADVehicleStatus> { }
export default CADVehicleStatusModule as ReplaceModelReturnType<typeof CADVehicleStatusModule, CADVehicleStatusModel>;

import * as uuid from "uuid";
import {
  createSchema,
  createModel,
  MongooseModule,
  retrieveCurrentUnixTime,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
} from "../helpers";

export function AgencySchema(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const CrossStaffedUnit = createSchema(Schema, {
    radioName: {
      type: String,
      default: "",
    },
    crossStaffedUnits: {
      type: [String],
      default: [],
    },
    alwaysCrossStaff: {
      type: Boolean,
      default: true,
    },
  }, {
    _id: false,
    id: false,
  });

  const LicensingDefault = {
    "tcPro": 0,
    "tcStatus": 0,
    "tcMobile": 0,
    "tcWeb": 0,
    "fireMapperPro": 0,
    "locationToCAD": 0
  };

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
      auto: true,
    },
    code: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    domain: {
      type: String,
      default: "",
    },
    personnelApiKey: {
      type: String,
      default: "",
      select: false,
    },
    agencyApiKey: {
      type: String,
      default: "",
      select: false,
    },
    uuid: {
      type: String,
      default: uuid.v4,
    },
    modified_unix_date: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },
    active: {
      type: Boolean,
      default: false,
    },
    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true
    },
    administrators: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      default: []
    },
    personnelIntegration: {
      type: Boolean,
      default: false
    },
    personnelMonitorHours: {
      type: Number,
      default: 12
    },
    crossStaffing: {
      type: [CrossStaffedUnit],
      default: []
    },
    licensing: {
      type: Object,
      default: LicensingDefault,
    },
  }, {
    collection: "massive_agency",
  });
  modelSchema.set("autoIndex", false);

  return modelSchema;
}

export async function AgencyModule(mongoose: MongooseModule) {
  const modelSchema = AgencySchema(mongoose);
  return createModel(mongoose, "Agency", modelSchema);
}

export interface Agency extends ItemTypeFromTypeSchemaFunction<typeof AgencyModule> { }
export interface AgencyModel extends ModelTypeFromTypeSchemaFunction<Agency> { }
export default AgencyModule as ReplaceModelReturnType<typeof AgencyModule, AgencyModel>;

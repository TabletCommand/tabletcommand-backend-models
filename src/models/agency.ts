import * as uuid from "uuid";
import {
  currentDate,
  MongooseModule,
  retrieveCurrentUnixTime,
} from "../helpers";
import AgencyCronConfigModule, { AgencyCronConfigType } from "./schema/agency-cron-config";
import AgencySAMLModule, { AgencySAMLSchemaType } from "./schema/agency-saml";
import { Mixed, Model, Types } from "mongoose";

interface CrossStaffedUnitType {
  radioName: string,
  crossStaffedUnits: string[],
  alwaysCrossStaff: boolean,
}

export interface Agency {
  _id: Types.ObjectId
  code: string,
  name: string,
  domain: string
  personnelApiKey: string,
  agencyApiKey: string,
  uuid: string,
  modified_unix_date: number,
  modified: Date,
  active: boolean,
  departmentId: Types.ObjectId,
  administrators: Types.ObjectId[],
  personnelIntegration: boolean,
  personnelMonitorHours: number,
  crossStaffing: CrossStaffedUnitType[],
  licensing: Mixed,
  cronConfig: AgencyCronConfigType,
  saml: AgencySAMLSchemaType[],
  activeUserCount: number,
}

export function AgencySchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;
  const AgencyCronConfig = AgencyCronConfigModule(mongoose);
  const AgencySAML = AgencySAMLModule(mongoose);

  const CrossStaffedUnit = new Schema<CrossStaffedUnitType>({
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
    tcPro: 0,
    tcManager: 0,
    tcStatus: 0,
    tcMobile: 0,
    tcWeb: 0,
    fireMapperPro: 0,
    locationToCAD: 0
  };

  const modelSchema = new Schema<Agency>({
    _id: {
      type: Schema.Types.ObjectId,
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
    modified: {
      type: Date,
      default: currentDate,
    },
    active: {
      type: Boolean,
      default: false,
    },
    departmentId: {
      type: Schema.Types.ObjectId,
      ref: "Department",
      required: true
    },
    administrators: {
      type: [Schema.Types.ObjectId],
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
    cronConfig: {
      type: AgencyCronConfig,
      default: null,
    },
    saml: {
      type: [AgencySAML],
      default: [],
      select: false, // Not a secret but not needed in all the queries
    },
    activeUserCount: {
      type: Number,
      default: 0,
    },
  }, {
    collection: "massive_agency",
  });
  modelSchema.set("autoIndex", false);

  return modelSchema;
}

export default async function AgencyModule(mongoose: MongooseModule) {
  const modelSchema = AgencySchema(mongoose);
  return mongoose.model<Agency>("Agency", modelSchema);
}

export interface AgencyModel extends Model<Agency> { }
import { Model } from "mongoose";
import * as uuid from "uuid";

import { AccountIndustry } from "../constants";
import {
  currentDate,
  MongooseModule,
  retrieveCurrentUnixTime,
} from "../helpers";

import AgencyCronConfigModule from "./schema/agency-cron-config";
import AgencySAMLModule from "./schema/agency-saml";
import { CrossStaffedUnitType, AgencyType } from "../types/agency";

export interface Agency extends AgencyType, Record<string, unknown> { }

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

  const modelSchema = new Schema<AgencyType>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    activeUserCount: {
      type: Number,
      default: 0,
    },
    administrators: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      default: []
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
    departmentId: {
      type: Schema.Types.ObjectId,
      ref: "Department",
      required: true
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
    industry: {
      type: String,
      default: AccountIndustry.Fire,
    },
  }, {
    autoIndex: false,
  });

  modelSchema.index({
    agencyApiKey: 1,
  }, {
    name: "agencyApiKey_1",
    unique: true,
  });

  modelSchema.index({
    departmentId: 1,
  }, {
    name: "departmentId_1",
  });

  modelSchema.index({
    departmentId: 1,
    code: 1,
  }, {
    name: "departmentId_1_code_1_unique",
    unique: true,
  });

  modelSchema.index({
    personnelApiKey: 1,
  }, {
    name: "personnelApiKey_1_unique",
    unique: true,
  });

  modelSchema.index({
    "saml.selector": 1,
  }, {
    name: "saml_selector_partial_uniq",
    unique: true,
    partialFilterExpression: {
      "saml.selector": {
        "$exists": true
      }
    }
  });

  return modelSchema;
}

export default async function AgencyModule(mongoose: MongooseModule) {
  const modelSchema = AgencySchema(mongoose);
  return mongoose.model<Agency>("Agency", modelSchema, "massive_agency", { overwriteModels: true });
}

export interface AgencyModel extends Model<Agency> { }
import * as uuid from "uuid";
import {
  createSchema,
  createModel,
  MongooseModule,
  retrieveCurrentUnixTime,
  ItemTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
} from "../helpers";
import { Document, Model } from "mongoose";

export async function AgencyModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;
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
    }
  }, {
    collection: "massive_agency",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "Agency", modelSchema);
}

export interface Agency extends Document, ItemTypeFromTypeSchemaFunction<typeof AgencyModule> { }
export interface AgencyModel extends Model<Agency> { }
export default AgencyModule as unknown as ReplaceModelReturnType<typeof AgencyModule, AgencyModel>;

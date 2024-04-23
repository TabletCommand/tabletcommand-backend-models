import {
  MongooseModule,
  MongooseDocument,
  createSchema,
  createModel,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
} from "../helpers";

import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";

import ReportNumberModule from "./schema/report-number";

export async function CADIncidentBlockModule(mongoose: MongooseModule) {
  const { Types } = mongoose;
  const ReportNumber = ReportNumberModule();

  // Simplified schema.
  // Payload should confirm to cad-incident (more or less)

  const modelSchema = createSchema({
    _id: {
      type: Types.ObjectId,
      auto: true,
    },
    departmentId: {
      type: String,
      required: true,
      index: true,
    },
    // callType or admin email
    source: {
      type: String,
      required: true,
    },
    IncidentNumber: {
      type: String,
      required: true,
    },
    AgencyIncidentCallTypeDescription: {
      type: String,
      required: true,
    },
    EntryDateTime: {
      type: String,
      default: "",
    },
    ClosedDateTime: {
      type: String,
      default: "",
    },
    ReportNumber: {
      type: [ReportNumber],
      default: [],
    }
  }, {
    collection: "massive_cad_incident_block",
    timestamps: true,
    autoIndex: false,
    toJSON: {
      virtuals: true,
      versionKey: false,
    }
  });

  modelSchema.virtual("id").get(function(this: MongooseDocument) {
    // tslint:disable-next-line: no-unsafe-any
    return this._id.toString();
  });

  modelSchema.plugin(mongooseLeanVirtuals);

  return createModel(mongoose, "CADIncidentBlock", modelSchema);
}

export interface CADIncidentBlock extends ItemTypeFromTypeSchemaFunction<typeof CADIncidentBlockModule> { }
export interface CADIncidentBlockModel extends ModelTypeFromTypeSchemaFunction<CADIncidentBlock> { }
export default CADIncidentBlockModule as ReplaceModelReturnType<typeof CADIncidentBlockModule, CADIncidentBlockModel>;

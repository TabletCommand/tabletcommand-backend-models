import {
  MongooseModule,
  MongooseDocument,
  createSchema,
  createModel,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
  currentDate,
} from "../helpers";

import * as uuid from "uuid";
import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";

export async function CADIncidentStreamModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  // Simplified schema.
  // Payload should confirm to cad-incident (more or less)

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
      auto: true,
    },
    uuid: {
      type: String,
      default: uuid.v4,
    },
    tag: {
      type: String,
      default: uuid.v4,
    },
    departmentId: {
      type: String,
      default: "",
      required: true,
      index: true,
    },
    incidentNumber: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: currentDate,
    },
    // Partial cad-incident
    payload: {
      type: Object,
      default: {}
    },
  }, {
    collection: "massive_cad_incident_stream",
  });
  modelSchema.set("autoIndex", false);

  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
  });

  // eslint-disable-next-line no-unused-vars
  modelSchema.virtual("id").get(function(this: MongooseDocument) {
    // tslint:disable-next-line: no-unsafe-any
    return this._id.toString();
  });

  modelSchema.plugin(mongooseLeanVirtuals);

  return createModel(mongoose, "CADIncidentStream", modelSchema);
}

export interface CADIncidentStream extends ItemTypeFromTypeSchemaFunction<typeof CADIncidentStreamModule> { }
export interface CADIncidentStreamModel extends ModelTypeFromTypeSchemaFunction<CADIncidentStream> { }
export default CADIncidentStreamModule as ReplaceModelReturnType<typeof CADIncidentStreamModule, CADIncidentStreamModel>;

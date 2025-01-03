import { Model } from "mongoose";
import {
  MongooseModule,
} from "../helpers";

import { CADIncidentSchema } from "./schema/cad-incident";
import { CADIncidentSchemaType } from "../types/cad-incident";

export interface CADIncident extends CADIncidentSchemaType, Record<string, unknown> { }

export default async function CADIncidentModule(mongoose: MongooseModule) {
  const modelSchema = CADIncidentSchema(mongoose);
  modelSchema.set("strict", false); // Because we accept all kind of data in

  modelSchema.index({
    closed_unix_date: 1,
    departmentId: 1,
    modified_unix_date: 1
  }, {
    name: "closed_unix_date_1_departmentId_1_modified_unix_date_1",
  });

  modelSchema.index({
    closed_unix_date: 1,
    modified_unix_date: 1
  }, {
    name: "closed_unix_date_modified_unix_date",
  });

  modelSchema.index({
    departmentId: 1,
    ClosedDateTime: -1
  }, {
    name: "departmentId_1_ClosedDateTime_-1",
  });

  modelSchema.index({
    departmentId: 1,
    ClosedDateTime: 1,
    expiration_date: 1
  }, {
    name: "departmentId_1_ClosedDateTime_1_expiration_date_1",
  });

  modelSchema.index({
    departmentId: 1,
    IncidentNumber: 1
  }, {
    name: "departmentId_1_IncidentNumber_1_unique",
    unique: true,
  });

  modelSchema.index({
    departmentId: 1,
    closed_unix_date: 1,
    modified_unix_date: 1
  }, {
    name: "departmentId_1_closed_unix_date_1_modified_unix_date_1",
  });

  modelSchema.index({
    departmentId: 1,
    modified_unix_date: 1
  }, {
    name: "departmentId_1_modified_unix_date_1",
  });

  modelSchema.index({
    departmentId: 1,
    closed_unix_date: 1,
    start_unix_date: -1,
  }, {
    name: "departmentId_1_closed_unix_date_1_start_unix_date_-1",
  });

  modelSchema.index({
    departmentId: 1,
    start_unix_date: 1
  }, {
    name: "departmentId_1_start_unix_date_1",
  });

  modelSchema.index({
    expiration_date: 1,
    ClosedDateTime: 1
  }, {
    name: "expiration_date_1_ClosedDateTime_1",
    partialFilterExpression: {
      expiration_date: {
        "$gt": ""
      },
      ClosedDateTime: {
        "$eq": ""
      }
    },
  });

  modelSchema.index({
    expiration_date: 1,
    ClosedDateTime: 1,
    departmentId: 1
  }, {
    name: "expiration_date_1_ClosedDateTime_1_departmentId_1",
    partialFilterExpression: {
      expiration_date: {
        "$gt": ""
      },
      ClosedDateTime: ""
    }
  });

  modelSchema.index({
    "sharedTo.departmentId": 1,
    closed_unix_date: 1,
    start_unix_date: -1,
  }, {
    name: "sharedTo.departmentId_1_closed_unix_date_1_start_unix_date_-1",
  });

  modelSchema.index({
    "sharedTo.departmentId": 1,
    "sharedTo.expireAt": 1
  }, {
    name: "sharedTo_departmentId_1_sharedTo_expireAt_1",
  });

  modelSchema.index({
    uuid: 1,
  }, {
    name: "uuid_1",
    unique: true,
  });

  return mongoose.model<CADIncident>("CADIncident", modelSchema, "massive_incident_cad", { overwriteModels: true });
}


export interface CADIncidentModel extends Model<CADIncident> { }
import * as uuid from "uuid";

import {
  MongooseModule,
  createSchema,
  createModel,
  retrieveCurrentUnixTime,
  ModelTypeFromTypeSchemaFunction,
  ItemTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
} from "../helpers";

export async function AssignmentModule(mongoose: MongooseModule) {
  "use strict";

  const { Schema, Types } = mongoose;

  const modelSchema = createSchema(Schema, {
        _id: {
          type: Types.ObjectId,
          auto: true,
        },
        position: {
          type: Number,
          default: 1,
        },
        userId: String,
        uuid: {
          type: String,
          default: uuid.v4,
        },
        isMandatory: {
          type: Boolean,
          default: false,
        },
        modified_date: {
          type: String,
        },
        modified_unix_date: {
          type: Number,
          default: retrieveCurrentUnixTime,
        },
        departmentId: {
          type: String,
          required: true,
          index: true,
        },
        active: {
          type: Boolean,
          default: true,
        },
        name: {
          type: String,
          required: true
        },
        description: {
          type: String,
          default: "",
        },
  }, {
    collection: "massive_assignment",
  });
  modelSchema.set("autoIndex", false);
  return createModel(mongoose, "Assignment", modelSchema);
}

export interface Assignment extends ItemTypeFromTypeSchemaFunction<typeof AssignmentModule> {}
export interface AssignmentModel extends ModelTypeFromTypeSchemaFunction<Assignment> {}
export default AssignmentModule as ReplaceModelReturnType<typeof AssignmentModule, AssignmentModel>;

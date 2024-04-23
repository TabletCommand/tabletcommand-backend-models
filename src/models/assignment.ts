import * as uuid from "uuid";

import {
  createModel,
  createSchema,
  currentDate,
  DocumentTypeFromSchema,
  ItemTypeFromTypeSchemaFunction,
  ModelFromSchema,
  ModelTypeFromTypeSchemaFunction,
  MongooseModule,
  ReplaceModelReturnType,
  retrieveCurrentUnixTime,
} from "../helpers";

export async function AssignmentModule(mongoose: MongooseModule) {
  const { Types } = mongoose;

  const modelSchema = createSchema({
    _id: {
      type: Types.ObjectId,
      auto: true,
    },
    uuid: {
      type: String,
      default: uuid.v4,
    },
    active: {
      type: Boolean,
      default: true,
    },
    userId: String,
    departmentId: {
      type: String,
      required: true,
      index: true,
    },
    isMandatory: {
      type: Boolean,
      default: false,
    },
    modified: {
      type: Date,
      default: currentDate,
    },
    // Deprecated
    modified_date: {
      type: String,
    },
    // Deprecated
    modified_unix_date: {
      type: Number,
      default: retrieveCurrentUnixTime,
    },

    //
    position: {
      type: Number,
      default: 1,
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: "",
    },
    full_description: {
      type: String,
      default: "",
    },
  }, {
    collection: "massive_assignment",
  });
  modelSchema.set("autoIndex", false);
  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform(doc: ModelFromSchema<typeof modelSchema>, ret: DocumentTypeFromSchema<typeof modelSchema>) {
      ret.id = ret._id.toString();
    },
  });

  return createModel(mongoose, "Assignment", modelSchema);
}

export interface Assignment extends ItemTypeFromTypeSchemaFunction<typeof AssignmentModule> { }
export interface AssignmentModel extends ModelTypeFromTypeSchemaFunction<Assignment> { }
export default AssignmentModule as ReplaceModelReturnType<typeof AssignmentModule, AssignmentModel>;

// import * as uuid from "uuid";
import {
  createModel,
  createSchema,
  currentDate,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  MongooseModule,
  ReplaceModelReturnType,
} from "../helpers";

export async function ArcGISGroupModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const ArcGISGroupUser = createSchema(Schema, {
    username: {
      type: String,
      default: "",
    },
    fullName: {
      type: String,
      default: "",
    },
    memberType: {
      type: String,
      default: "",
    },
    orgId: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
  });

  const modelSchema = createSchema(Schema, {
    // Unique, to be able to use replaceInto
    groupId: {
      type: String,
      unique: true,
    },
    title: {
      type: String,
      default: "",
    },
    protected: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: String,
      default: "",
    },
    access: {
      type: String,
      default: "",
    },
    users: {
      type: [ArcGISGroupUser],
      default: [],
    },
    outsiders: {
      type: [ArcGISGroupUser],
      default: [],
    },
    externalOrgIds: {
      type: [String],
      default: [],
    },

    departmentIds: {
      type: [String],
      default: [],
    },
    modified: {
      type: Date,
      default: currentDate,
    },
  }, {
    collection: "massive_arcgis_group",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "ArcGISGroup", modelSchema);
}

export interface ArcGISGroup extends ItemTypeFromTypeSchemaFunction<typeof ArcGISGroupModule> { }
export interface ArcGISGroupModel extends ModelTypeFromTypeSchemaFunction<ArcGISGroup> { }
export default ArcGISGroupModule as ReplaceModelReturnType<typeof ArcGISGroupModule, ArcGISGroupModel>;

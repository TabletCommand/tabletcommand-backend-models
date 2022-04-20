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
    id: false,
  });

  const ArcGISUserInvitation = createSchema(Schema, {
    username: {
      type: String,
      default: "",
    },
    atDate: {
      type: Date,
      default: currentDate,
    },
    invitedBy: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const ArcGISDepartmentUser = createSchema(Schema, {
    // ArcGIS username
    username: {
      type: String,
      default: "",
    },
    // TC user account email
    email: {
      type: String,
      default: "",
    },
    // TC user id
    userId: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const ArcGISDepartment = createSchema(Schema, {
    department: {
      type: String,
      default: "",
    },
    departmentId: {
      type: String,
      default: "",
    },
    authUsername: {
      type: String,
      default: "",
    },
    authError: {
      type: String,
      default: "",
    },
    tokenUsername: {
      type: String,
      default: null,
    },
    tokenError: {
      type: String,
      default: null,
    },
    users: {
      type: [ArcGISDepartmentUser],
      default: [],
    },
  }, {
    _id: false,
    id: false,
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
    membershipAccess: {
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
    invited: {
      type: [ArcGISUserInvitation],
      default: [],
    },

    // departments that are linked via arcGISGroupId (linked by a super admin)
    linkedDepartments: {
      type: [ArcGISDepartment],
      default: [],
    },

    modified: {
      type: Date,
      default: currentDate,
    },

    // last time when cron updated groups
    // if date is in the past, we should refresh this
    // at run success, update this date to a date in the future
    runAt: {
      type: Date,
      default: "",
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

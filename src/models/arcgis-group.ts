// import * as uuid from "uuid";
import { Model } from "mongoose";
import {
  currentDate,
  MongooseModule,
} from "../helpers";
interface ArcGISGroupUserType {
  username: string,
  fullName: string,
  memberType: string,
  orgId: string,
}

interface ArcGISUserInvitationType {
  username: string,
  atDate: Date,
  invitedBy: string,
}

interface ArcGISDepartmentUserType {
  username: string,
  // TC user account email
  email: string,
  // TC user id
  userId: string,
}

interface ArcGISDepartmentType {

  department: string,
  departmentId: string,
  authUsername: string,
  authError: string,
  users: ArcGISDepartmentUserType[]

}

export interface ArcGISGroup {
  groupId: string,
  title: string,
  protected: boolean
  owner: string,
  access: string,
  membershipAccess: string,
  users: ArcGISGroupUserType[]
  outsiders: ArcGISGroupUserType[]
  removableUsers: ArcGISGroupUserType[]
  externalOrgIds: string[]
  invited: ArcGISUserInvitationType[]
  linkedDepartments: ArcGISDepartmentType[]
  modified: Date,
  createdBy: string,
  runAt: Date | string,

}

export default async function ArcGISGroupModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const ArcGISGroupUser = new Schema<ArcGISGroupUserType>({
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

  const ArcGISUserInvitation = new Schema<ArcGISUserInvitationType>({
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

  const ArcGISDepartmentUser = new Schema<ArcGISDepartmentUserType>({
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

  const ArcGISDepartment = new Schema<ArcGISDepartmentType>({
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
    users: {
      type: [ArcGISDepartmentUser],
      default: [],
    },
  }, {
    _id: false,
    id: false,
  });

  const modelSchema = new Schema<ArcGISGroup>({
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
    removableUsers: {
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
    // Possible values: cron, user
    createdBy: {
      type: String,
      default: "",
    },

    // last time when cron updated groups
    // if date is in the past, we should refresh this
    // at run success, update this date to a date in the future
    runAt: {
      type: Date || String,
      default: "",
    },
  }, {
    autoIndex: false,
  });

  return mongoose.model<ArcGISGroup>("ArcGISGroup", modelSchema, "massive_arcgis_group", { overwriteModels: true });
}

export interface ArcGISGroupModel extends Model<ArcGISGroup> { }
export interface ArcGISGroupUserType {
  username: string,
  fullName: string,
  memberType: string,
  orgId: string,
}

export interface ArcGISUserInvitationType {
  username: string,
  atDate: Date,
  invitedBy: string,
}

export interface ArcGISDepartmentUserType {
  username: string,
  // TC user account email
  email: string,
  // TC user id
  userId: string,
}

export interface ArcGISDepartmentType {

  department: string,
  departmentId: string,
  authUsername: string,
  authError: string,
  users: ArcGISDepartmentUserType[]

}

export interface ArcGISGroupType {
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

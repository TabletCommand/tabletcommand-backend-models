import { Types } from "mongoose";

export interface AssignmentType {
  _id: Types.ObjectId,
  id: string,
  uuid: string,
  active: boolean,
  userId: string,
  departmentId: string,
  isMandatory: boolean,
  modified: Date,
  // Deprecated
  modified_date: string,
  // Deprecated
  modified_unix_date: number,
  position: number,
  name: string,
  description: string,
  full_description: string,
}

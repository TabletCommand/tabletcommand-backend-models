import { Types } from "mongoose";

export interface ChecklistOptionType {
  name: string,
  position: number,
  id: string,
}

export interface GroupOptionType {
  name: string,
  position: number,
  uuid: string,
}

export interface TemplateType {
  _id: Types.ObjectId,
  id?: string,
  position: number,
  userId: string,
  uuid: string,
  isMandatory: boolean,
  modified_unix_date: number,
  modified: Date,
  departmentId: string,
  active: boolean,
  name: string,
  checklist: ChecklistOptionType[],
  group: GroupOptionType[],
  agencyId: Types.ObjectId
}

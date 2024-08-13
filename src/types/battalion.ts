import { Types } from "mongoose";

export interface BattalionUnitType extends Record<string, unknown> {
  _id: Types.ObjectId,
  id?: string,
  name: string,
  friendly_id: string,
  personnel: number,
  position: number,
  active: boolean,
  isMandatory: boolean,
  modified_date: string,
  modified_unix_date: number,
  modified: Date,
  uuid: string,
  api_battalion_id: string,
  battalion_uuid: string,
  battalion_name: string,
  agencyId: Types.ObjectId
}

export interface BattalionType {
  _id: Types.ObjectId,
  id?: string,
  name: string,
  active: boolean,
  modified_date: string,
  modified_unix_date?: number,
  modified: Date,
  isMandatory: boolean
  userId: string,
  uuid: string,
  departmentId: string,
  agencyId: Types.ObjectId,
  position: number,
  units: BattalionUnitType[],
}

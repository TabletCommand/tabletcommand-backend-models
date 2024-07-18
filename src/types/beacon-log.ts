import { Types } from "mongoose";

export interface BeaconLogType {
  _id: Types.ObjectId,
  departmentId: string,
  userId: string,
  object: object,
  createdAt: Date,
  modified_unix_date: number,
}

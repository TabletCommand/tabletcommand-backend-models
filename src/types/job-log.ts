import { Types } from "mongoose";

export interface JobLogType {
  _id: Types.ObjectId,
  id?: string,
  jobName: string,
  host: string,
  bidDate: Date,
  startDate: Date,
  completedDate: Date,
  state: string
  forceClosed: boolean,
}

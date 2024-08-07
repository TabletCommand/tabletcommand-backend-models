import { Types } from "mongoose";

export interface MonitorType {
  _id: Types.ObjectId,
  departmentId: string,
  agencyId: string,
  notificationType: string,
  status: string,
  sentUnixDate: number,
  sentAt: Date,
  ticketId: string,
  count: number,
}

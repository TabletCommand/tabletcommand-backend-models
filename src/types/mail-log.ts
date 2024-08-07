import { Types } from "mongoose";

export interface MailLogType {
  _id: Types.ObjectId,
  mailId: string,
  event: string,
  timestamp: number,
  recipient: string,
  recipientDomain: string,
  tags: string[]
  deliveryStatus: object,
  message: object,
  flags: object,
  envelope: object,
  logLevel: string,
  reason: string,
  severity: string,
  modified_unix_date: number,
  modified: Date,
}

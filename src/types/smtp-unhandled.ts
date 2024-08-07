import { Types } from "mongoose";

export interface SMTPUnhandledType {
  _id: Types.ObjectId,
  id?: string,
  email: string,
  message: string,
}

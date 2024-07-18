import { Types } from "mongoose";

export interface GSTMappingType {
  _id: Types.ObjectId,
  departmentId: string,
  gstAgency: string,
  deviceType: string,
  unitId: string,
  location: {
    longitude: number,
    latitude: number,
  },
  modified_unix_date: number,
  modified: Date,
  active: boolean,
  mapHidden: boolean,
  remoteAddress: string,
  uuid: string,
  note: string,
}

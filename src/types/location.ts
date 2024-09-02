import { Types } from "mongoose";
import { GeoJSONPointType } from "./geojson-point";
import { ColorSchemaType } from "./color";

export interface LocationType {
  _id: Types.ObjectId,
  id?: string,
  active: boolean,
  agencyCode: string,
  agencyName: string,
  altitude: number,
  color: ColorSchemaType,
  colorChangedAt: Date,
  deleteAfterDate: Date,
  departmentId: string,
  device_type: string,
  esriId: number,
  heading: number,
  kindType: string,
  location?: { latitude: number, longitude: number, }; // provided by virtual.location
  locationGeoJSON: GeoJSONPointType,
  modified: Date,
  movedAt: Date,
  opAreaCode: string
  opAreaName: string,
  propsChangedAt: Date,
  sendToCAD: boolean,
  session: string,
  shared: boolean,
  source: string,
  speed: number,
  state: string,
  typeDetails: object
  userId: string,
  username: string,
  uuid: string,
  version: number,
  visibility: string[],
}

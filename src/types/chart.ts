import { Types } from "mongoose";

export interface ChartItemType {
  email: string,
  dateAt: Date,
  os: string,
  osSemVer: string,
  app: string,
  appSemVer: string,
}
export interface ChartDeviceStatsType {
  _id: Types.ObjectId,
  id?: string,
  dateAt: Date,
  departmentId: string,
  items: ChartItemType[],
}

export interface ChartUserType {
  _id: Types.ObjectId,
  id?: string,
  dateAt: Date,
  departmentId: string,
  count: number,
  items: string[],
}

export interface ChartItemType {
  item: string,
  dateAt: Date,
}
export interface ChartManagedIncidentType {
  _id: Types.ObjectId,
  id?: string,
  dateAt: Date,
  departmentId: string,
  userId: string,
  count: number,
  items: ChartItemType[]
}

export interface ChartItemType {
  item: string,
  dateAt: Date,
}
export interface ChartIncidentType {
  _id: Types.ObjectId,
  id?: string,
  dateAt: Date,
  departmentId: string,
  count: number,
  items: ChartItemType[]
}
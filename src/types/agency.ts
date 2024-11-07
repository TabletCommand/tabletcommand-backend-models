import { Types } from "mongoose";
import { ColorSchemaType } from "./color";

export interface EncryptedDataType {
  iv: string,
  encryptedData: string,
}

export interface CronConfigSourceType extends Record<string, unknown> {
  protocol: string,
  username: string,
  hostname: string,
  filePath: string,
}

export interface CronConfigAuthType {
  password: EncryptedDataType | null,
  sshPrivateKey: EncryptedDataType | null,
  sshPublicKey: EncryptedDataType | null,
  useSSHKey: boolean,
}

export interface CronConfigCSVFieldMapType {
  PersonnelID: string,
  PersonnelName: string,
  PersonnelRank: string,
  PersonnelWorkCode: string,
  PersonnelNote: string,
  StartTime: string,
  EndTime: string,
  UnitName: string,
  TimeFormat: string,
}

export interface ReconcileTimeOptionsType {
  enabled: boolean,
  startTime: string,
  endTime: string,
}

export interface AgencyCronConfigType extends Record<string, unknown> {
  enabled: boolean
  source: CronConfigSourceType,
  auth: CronConfigAuthType
  processPath: string,
  completedPath: string,
  importType: string,
  timezone: string,
  customApiPath: string,
  alterChunkSize: boolean,
  reconcileEnabled: boolean,
  reconcileTimeOptions: ReconcileTimeOptionsType,
  hasLabelCustomization: boolean
  assignmentOverride: boolean,
  csvFieldMap: CronConfigCSVFieldMapType
  useAlternateId: boolean
  strictAgencyCodeMatch: boolean
}

export interface AgencyLicensing extends Record<string, unknown> {
  tcPro: number,
  tcManager: number,
  tcStatus: number,
  tcMobile: number,
  tcWeb: number,
  fireMapperPro: number,
  locationToCAD: number,
}

export interface CrossStaffedUnitType {
  radioName: string,
  crossStaffedUnits: string[],
  alwaysCrossStaff: boolean,
}

export interface AgencySAMLSchemaType extends Record<string, unknown> {
  selector: string,
  idp: string,
  sp: string,
  env: string,
  name: string,
  jumpPoint: string,
}

export interface AgencyType {
  _id: Types.ObjectId,
  active: boolean,
  activeUserCount: number,
  administrators: Types.ObjectId[],
  agencyApiKey: string,
  code: string,
  cronConfig: AgencyCronConfigType,
  crossStaffing: CrossStaffedUnitType[],
  departmentId: Types.ObjectId,
  domain: string
  licensing: AgencyLicensing,
  modified_unix_date: number,
  modified: Date,
  name: string,
  orientationMarkerColor: ColorSchemaType,
  personnelApiKey: string,
  personnelIntegration: boolean,
  personnelMonitorHours: number,
  saml: AgencySAMLSchemaType[],
  uuid: string,
}

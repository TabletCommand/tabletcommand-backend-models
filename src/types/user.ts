import { Types } from "mongoose";
import { EsriAuthSchemaType, EsriErrorSchemaType } from "./esri";
import { PubNubTokenSchemaType } from "./pubnub-token";

export interface UnitSettingType {
  radioName: string,
  notificationType: string,
  notificationMode: string,
}
export interface IncidentSettingType {
  incidentType: string,
  notificationType: string,
  notificationMode: string,
}

export interface DeviceSchemaType {
  token: string,
  env: string,
  ver: string,
  ua: string,
  time: number,
  t: Date,
  drift: number,
  channelId: string,
  bundleIdentifier: string,
  silentEnabled: boolean,
  criticalAlertsEnabled: boolean,
  session: string,
  active: boolean,
  offDuty: boolean,
}

export interface SoundSchemaItemType {
  sound: string,
  soundType: string,
  os: string,
}

export interface SoundSchemaType {
  ios: SoundSchemaItemType,
  android: SoundSchemaItemType,
}

export interface UserDeviceType {
  _id: Types.ObjectId,
  userId: string,
  departmentId: string,
  devices: DeviceSchemaType[],
  notificationCount: number,
  notificationUnitSettings: UnitSettingType[],
  notificationIncidentSettings: IncidentSettingType[],
  notificationSounds: SoundSchemaType
  offDuty: boolean,
  criticalAlertsVolume: string,
  allowInStaging: boolean,
  restrictedCommentsEnabled: boolean,
}

export interface UserRegistrationType {
  email: string,
  name: string,
  firstName: string,
  lastName: string,
  department: string,
  title: string,
  status: string,
  modifiedDate: number,
  modified: Date,
  presentedAt: number,
  managedIncidentsCount: number,
  checklistsCount: number,
  stage: string,
  firstIncidentUnixTime: number,
  lastIncidentLocation: string,
  lastIncidentUnixTime: number,
  syncedToHubSpot: boolean,
}


export interface VehicleSchemaType {
  radioName: string,
  vehicleId: string,
}

export interface UserType {
  _id: Types.ObjectId,
  id?: string,
  nick: string,
  email: string,
  name: string,
  uuid: string,
  departmentId: string,
  modified_date: Date,
  when: Date,
  agencyId: Types.ObjectId,
  managedAgencies: Types.ObjectId[],
  active: boolean,
  admin: boolean,
  superuser: boolean,
  isPro: boolean,
  isIncidentManager: boolean,
  mobileAccess: boolean,
  webAccess: boolean,
  cadSimulatorAccess: boolean,
  canAddRemoveVehicle: boolean,
  beaconEnabled: boolean,
  userContributionEnabled: boolean,
  syncLoggingExpireDate: Date,
  beacons: string[],
  salt: string,
  pass: string,
  auth: string[],
  mapHidden: boolean,
  mapId: string,
  vehicle: VehicleSchemaType,
  sessionCountiPhone: number,
  sessionCountiPad: number,
  rtsAuthKey: string,
  pubNubV2: PubNubTokenSchemaType
  pubNubV3: PubNubTokenSchemaType
  socketIO: PubNubTokenSchemaType,
  token: string,
  tokenExpireAt: Date,
  shareLocationPhone: boolean,
  shareLocationTablet: boolean,
  offlineMapsEnabled: boolean,
  fireMapperProEnabled: boolean,
  arcGISAuth: EsriAuthSchemaType,
  arcGISAuthError: EsriErrorSchemaType,
  offDutyEnabled: boolean,
  webMapSettings: {
    defaultZoomLevel: number,
    defaultCenter: number[],
    defaultMap: string,
  },
  locationToCAD: boolean,
  logOffEnabled: boolean,
  restrictedCommentsEnabled: boolean,
  superUserReadOnly: boolean
}

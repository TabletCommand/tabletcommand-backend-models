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

export interface TokenKeysType {
  auth: string,
  p256dh: string,
}

export interface DeviceSchemaType {
  token: string,
  keys: TokenKeysType,
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
  active: boolean,
  admin: boolean,
  agencyId: Types.ObjectId,
  arcGISAuth: EsriAuthSchemaType,
  arcGISAuthError: EsriErrorSchemaType,
  auth: string[],
  beaconEnabled: boolean,
  beacons: string[],
  cadSimulatorAccess: boolean,
  canAddRemoveVehicle: boolean,
  departmentId: string,
  email: string,
  fireMapperProEnabled: boolean,
  id?: string,
  isIncidentManager: boolean,
  isPro: boolean,
  locationToCAD: boolean,
  logOffEnabled: boolean,
  managedAgencies: Types.ObjectId[],
  mapHidden: boolean,
  mapId: string,
  mobileAccess: boolean,
  modified_date: Date,
  name: string,
  nick: string,
  offDutyEnabled: boolean,
  offlineMapsEnabled: boolean,
  pass: string,
  pubNubV2: PubNubTokenSchemaType
  pubNubV3: PubNubTokenSchemaType
  restrictedCommentsEnabled: boolean,
  rtsAuthKey: string,
  salt: string,
  sessionCountiPad: number,
  sessionCountiPhone: number,
  shareLocationPhone: boolean,
  shareLocationTablet: boolean,
  socketIO: PubNubTokenSchemaType,
  stealthStatus: string, // UserStealthStatus
  superuser: boolean,
  superUserReadOnly: boolean
  syncLoggingExpireDate: Date,
  token: string,
  tokenExpireAt: Date,
  userContributionEnabled: boolean,
  uuid: string,
  vehicle: VehicleSchemaType,
  webAccess: boolean,
  when: Date,
  webMapSettings: {
    defaultCenter: number[],
    defaultMap: string,
    defaultZoomLevel: number,
  },
}

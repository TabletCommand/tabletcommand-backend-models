import { Types } from "mongoose";
import { FireMapperAuthType } from "./firemapper-auth";

export interface MapPropertiesType {
  itemId: string,
  download: boolean,
}
export interface EsriType {
  _id: Types.ObjectId,
  id?: string,
  runAt: Date,
  departmentId: Types.ObjectId
  auth: EsriAuthSchemaType,
  authError: EsriErrorSchemaType,
  fireMapperAuth: FireMapperAuthType,
  arcGISGroupIds: string[],
  arcGISAuth: EsriAuthSchemaType,
  arcGISMigrated: boolean,
  review: object,
  reviewRunAt: Date,
  maps: EsriMapType[],
  mapsProperties: MapPropertiesType[],
  mapLastUpdated: Date,
}

export interface EsriAuthPasswordType {
  iv: string,
  encryptedData: string,
}

export interface EsriAuthSchemaType {
  username: string,
  encrypted: EsriAuthPasswordType
}


export interface EsriErrorSchemaType {
  code: number,
  error: string,
  error_description: string,
  message: string,
}


export interface MapLayerType {
  layerId: string,
  itemId: string,
  title: string,
  layerType: string,
  url: string,
  visibility: boolean,
  opacity: number,
  access: string,
  owner: string,
}

export interface BaseMapType {
  baseMapLayers: MapLayerType[],
  title: string,
}

export interface SimpleMapSchemaType {
  itemId: string,
  title: string,
  url: string,
  access: string,
  owner: string,
  type: string,
  modified: number,
  modifiedAt: Date,
}

export interface OfflineMapType extends SimpleMapSchemaType { status: string }

export interface EsriMapType extends SimpleMapSchemaType {
  mapLayers: MapLayerType[]
  baseMap: BaseMapType
  offline: OfflineMapType[]
  tags: string[],
  development: boolean,
  size: number,
}

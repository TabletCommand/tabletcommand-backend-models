import {
  MongooseModule,
} from "../../helpers";

interface MapLayerType {
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

interface BaseMapType {
  baseMapLayers: MapLayerType[],
  title: string,
}

interface SimpleMapSchemaType {
  itemId: string,
  title: string,
  url: string,
  access: string,
  owner: string,
  type: string,
  modified: number,
  modifiedAt: Date,
}

interface OfflineMapType extends SimpleMapSchemaType { status: string }

export interface EsriMapType extends SimpleMapSchemaType {
  mapLayers: MapLayerType[]
  baseMap: BaseMapType
  offline: OfflineMapType[]
  tags: string[],
  development: boolean,
  size: number,
}

export default function EsriMapSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const MapLayer = new Schema<MapLayerType>({
    layerId: {
      type: String,
      default: "",
    },
    itemId: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    layerType: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    visibility: {
      type: Boolean,
      default: false,
    },
    opacity: {
      type: Number,
      default: 1,
    },
    access: {
      type: String,
      default: "",
    },
    owner: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const BaseMap = new Schema<BaseMapType>({
    baseMapLayers: {
      type: [MapLayer],
      default: [],
    },
    title: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  // Use a simpler set for Offline Maps
  const SimpleMapSchema = {
    itemId: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    access: {
      type: String,
      default: "",
    },
    owner: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    modified: {
      type: Number,
      default: 0,
    },
    modifiedAt: {
      type: Date,
    },
  };

  const OfflineMap = new Schema<OfflineMapType>({
    ...SimpleMapSchema,
    status: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const Map = new Schema<EsriMapType>({
    ...SimpleMapSchema,
    mapLayers: {
      type: [MapLayer],
      default: [],
    },
    baseMap: {
      type: BaseMap
    },
    offline: {
      type: [OfflineMap],
      default: [],
    },
    tags: {
      type: [String],
      default: [],
    },
    development: {
      type: Boolean,
      default: false,
    },
    size: {
      type: Number,
      default: 0,
    },
  }, {
    _id: false,
    id: false,
  });

  return Map;
}

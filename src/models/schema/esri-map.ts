import {
  createSchema,
  MongooseModule,
} from "../../helpers";

export default function EsriMapSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const MapLayer = createSchema(Schema, {
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
  }, {
    _id: false,
  });

  const BaseMap = createSchema(Schema, {
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
  };

  const OfflineMap = createSchema(Schema, {
    ...SimpleMapSchema,
    status: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
  });

  const Map = createSchema(Schema, {
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
    }
  }, {
    _id: false,
  });

  return Map;
}

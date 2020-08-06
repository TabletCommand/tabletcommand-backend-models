import {
  createSchema,
  MongooseModule,
} from "../../helpers";

export default function EsriMapModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const MapLayer = createSchema(Schema, {
    id: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    type: {
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
    styleUrl: {
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

  const Map = createSchema(Schema, {
    id: {
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
    tags: {
      type: [String],
      default: [],
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
    mapLayers: {
      type: [MapLayer],
      default: [],
    },
    baseMap: {
      type: BaseMap
    },
  }, {
    _id: false,
  });

  return Map;
}

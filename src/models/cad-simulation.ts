import {
  createModel,
  createSchema,
  currentDate,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  MongooseModule,
  ReplaceModelReturnType,
} from "../helpers";
import * as uuid from "uuid";

export async function CADSimulationModule(mongoose: MongooseModule) {
  const {
    Schema,
    Types,
  } = mongoose;

  const simComment = createSchema(Schema, {
    comment: {
      title: String,
      default: "",
    },
    source: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const simUnit = createSchema(Schema, {
    alarmLevelAtDispatch: {
      title: String,
      default: "",
    },
    units: {
      type: [String],
      default: [],
    },
  }, {
    _id: false,
    id: false,
  });

  const Sequence = createSchema(Schema, {
     _id: {
      type: Types.ObjectId,
      auto: true,
    },
    code: {
      title: String,
      default: "",
    },
    alarm: {
      type: String,
      default: "1",
    },
    sequenceId: {
      type: Number,
      default: 0,
    },
    unitsArray: {
      type: [simUnit],
      default: [],
    },
    comments: {
      type: [simComment],
      default: [],
    }
  }, {});

  const modelSchema = createSchema(Schema, {
    // Internal
    uuid: {
      type: String,
      index: true,
      default: uuid.v4,
    },
    departmentId: {
      type: String,
      default: "",
      required: true,
      index: true,
    },
    modifiedDate: {
      type: Number,
      default: 0,
      min: 1,
    },
    modified: {
      type: Date,
      default: currentDate,
    },
    active: {
      type: Boolean, 
      default: true
    },
    friendly_id: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    notes: {
      type: String,
      default: "",
    },
    simulation: {
      type: Boolean, 
      default: true,
    },
    notify: {
      type: Boolean,
      default: false,
    },
    rts: {
      type: Boolean, 
      default: false
    },
    tags: {
      type: [String], 
      default: []
    },
    incidentType: {
      type: String,
      default: "",
    },
    streetName: {
      type: String,
      default: "",
    },
    locationComment: {
      type: String,
      default: "",
    },
    suite: {
      type: String,
      default: "",
    },
    crossStreet1: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    lat: {
      type: String,
      default: "",
    },
    lon: {
      type: String,
      default: "",
    },
    firemap: {
      type: String,
      default: "",
    },
    mapPages: {
      type: String,
      default: "",
    },
    tacticalChannel: {
      type: String,
      default: "",
    },
    commandChannel: {
      type: String,
      default: "",
    },
    radioChannels: {
      type: [String],
      default: [],
    },
    closeDelay: {
      type: Number,
      default: 1800,
    },
    priorIncidents: {
      type: String,
      default: "",
    },
    randomPriorIncidents: {
      type: Boolean, 
      default: false
    },
    randomStaffing: {
      type: Boolean, 
      default: false
    },
    sequences: {
      type: [Sequence],
      default: [],
    },
    sortId: {
      type: Number,
      default: 1,
    },
  }, {
    collection: "massive_cad_simulation",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "CADSimulation", modelSchema);
}

export interface CADSimulation extends ItemTypeFromTypeSchemaFunction<typeof CADSimulationModule> { }
export interface CADSimulationModel extends ModelTypeFromTypeSchemaFunction<CADSimulation> { }
export default CADSimulationModule as ReplaceModelReturnType<typeof CADSimulationModule, CADSimulationModel>;

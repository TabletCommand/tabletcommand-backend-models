import { Model } from "mongoose";
import {
  currentDate,
  MongooseModule,
} from "../helpers";
import * as uuid from "uuid";
import { SimPriorCommentType, SimPriorIncidentType, SimRadioChannelType, SimCommentType, SimUnitType, SequenceType, CADSimulationType } from "../types/cad";

export interface CADSimulation extends CADSimulationType { }

export default async function CADSimulationModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const SimPriorComment = new Schema<SimPriorCommentType>({
    Comment: {
      type: String,
      default: "",
    },
    CommentSource: {
      type: String,
      default: "",
    },
    CommentDateTime: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const SimPriorIncident = new Schema<SimPriorIncidentType>({
    IncidentNumber: {
      type: String,
      default: "",
    },
    IncidentDateTime: {
      type: String,
      default: "",
    },
    Problem: {
      type: String,
      default: "",
    },
    Address: {
      type: String,
      default: "",
    },
    Suite: {
      type: String,
      default: "",
    },
    Comment: {
      type: [SimPriorComment],
      default: [],
    },
  }, {
    _id: false,
    id: false,
  });

  const SimRadioChannel = new Schema<SimRadioChannelType>({
    name: {
      type: String,
      default: "",
    },
    channel: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const SimComment = new Schema<SimCommentType>({
    comment: {
      type: String,
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

  const SimUnit = new Schema<SimUnitType>({
    alarmLevelAtDispatch: {
      type: String,
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

  const Sequence = new Schema<SequenceType>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    title: {
      type: String,
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
    unitsConfig: {
      type: SimUnit,
      default: {},
    },
    comments: {
      type: [SimComment],
      default: [],
    }
  }, {});

  const modelSchema = new Schema<CADSimulationType>({
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
    friendlyId: {
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
    CrossStreet1: {
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
      type: [SimRadioChannel],
      default: [],
    },
    closeDelay: {
      type: Number,
      default: 1800,
    },
    priorIncidents: {
      type: [SimPriorIncident],
      default: [],
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
    sendStatus: {
      type: Boolean,
      default: false,
    },
  }, {
    autoIndex: false,
  });

  return mongoose.model<CADSimulation>("CADSimulation", modelSchema, "massive_cad_simulation", { overwriteModels: true });
}

export interface CADSimulationModel extends Model<CADSimulation> { }
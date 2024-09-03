import { mongooseLeanVirtuals } from "mongoose-lean-virtuals";
import * as uuid from "uuid";
import {
  currentDate,
  MongooseModule,
} from "../helpers";
import {
  CADPersonSchema,
  RadioChannelSchema,
  RecordSchema,
  ReportNumberSchema,
  SharedSourceSchema,
  SharedToSchema,
} from "./schema/shared-incident";
import { Model } from "mongoose";
import {
  HistoryItemType,
  AssignmentItemType,
  IncidentUnitType,
  IncidentGroupType,
  IncidentHazardType,
  IncidentChecklistItemType,
  IncidentChecklistType,
  ManagedIncidentType,
} from "../types/managed-incident";

export interface ManagedIncident extends ManagedIncidentType, Record<string, unknown> { }

export default async function ManagedIncidentModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const CADPerson = CADPersonSchema(mongoose);
  const RadioChannel = RadioChannelSchema(mongoose);
  const RecordValue = RecordSchema(mongoose);
  const ReportNumber = ReportNumberSchema(mongoose);
  const SharedSource = SharedSourceSchema(mongoose);
  const SharedTo = SharedToSchema(mongoose);

  const HistoryItem = new Schema<HistoryItemType>({
    message: {
      type: String,
      default: "",
    },
    entity_type: {
      type: Number,
      default: 0,
    },
    time: {
      type: Number,
      default: 0,
    },
    entity_id: {
      type: String,
      default: "",
    },
    user: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const AssignmentItem = new Schema<AssignmentItemType>({
    name: {
      type: String,
      default: "",
    },
    uuid: {
      type: String,
      default: uuid.v4,
    },
    modified_date: {
      type: String,
      default: "",
    },
    modified_unix_date: {
      type: Number,
      default: 0,
    },
    built_in: {
      type: Boolean,
      default: false,
    },
    isMandatory: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      default: "",
    },
    active: {
      type: Boolean,
      default: true,
    },
    position: {
      type: Number,
      default: 0,
    },
  }, {
    _id: false,
    id: false,
  });

  const IncidentUnit = new Schema<IncidentUnitType>({
    UnitID: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    air_time: {
      type: String,
      default: "",
    },
    assignment: {
      type: AssignmentItem,
    },
    AlarmAtDispatch: {
      type: Number,
      default: 0,
    },
    api_unit_dispatch_number: {
      type: String,
      default: "",
    },
    checked: {
      type: Boolean,
      default: false,
    },
    column_position: {
      type: Number,
      default: 0,
    },
    group_position: {
      type: Number,
      default: 0,
    },
    incident_position: {
      type: Number,
      default: 0,
    },
    isSupervisor: {
      type: Boolean,
      default: false,
    },
    is_part_of_group: {
      type: Boolean,
      default: false,
    },
    location_on_map: {
      type: String,
      default: "",
    },
    // Currently not set
    // modified: {
    //   type: Date,
    //   default: currentDate,
    // },
    modified_date: {
      type: String,
      default: "",
    },
    modified_unix_date: {
      type: Number,
      default: 0,
    },
    note: {
      type: String,
      default: "",
    },
    personnelOnScene: {
      type: Number,
      default: 0,
    },
    Personnel: {
      type: [CADPerson],
      default: [],
    },
    status: {
      type: String,
      default: "",
    },
    status_unix_date: {
      type: Number,
      default: 0,
    },
    time: {
      type: String,
      default: "",
    },
    warning: {
      type: Number,
      default: 0,
    },
    uuid: {
      type: String,
      default: "",
    },
    parent_uuid: {
      type: String,
      default: "",
    },
    // may be deprecated
    local_id: {
      type: String,
    },
  }, {
    _id: false,
    id: false,
  });

  const IncidentGroup = new Schema<IncidentGroupType>({
    location_on_map: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    note: {
      type: String,
      default: "",
    },
    position: {
      type: Number,
      default: 0,
    },
    type: {
      type: Number,
      default: 0,
    },
    type_text: {
      type: String,
      default: "",
    },
    units: {
      type: [IncidentUnit],
      default: [],
    },
    uuid: {
      type: String,
      default: "",
    },
    incident_id: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const IncidentHazard = new Schema<IncidentHazardType>({
    location_on_scene: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    radius: {
      type: Number,
      default: 0,
    },
    time: {
      type: Number,
      default: 0,
    },
    uuid: {
      type: String,
      default: "",
    },
    active: {
      type: Boolean,
      default: true,
    },
    incident_id: {
      type: String,
      default: "",
    },
    // may be deprecated
    local_id: {
      type: String,
    },
    note: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const IncidentChecklistItem = new Schema<IncidentChecklistItemType>({
    active: {
      type: Boolean,
      default: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    isMandatory: {
      type: Boolean,
      default: false
    },
    modified_date: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    position: {
      type: Number,
      default: 0,
    },
    uuid: {
      type: String,
      default: "",
    },
    checklist_uuid: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    id: {
      type: String,
    },
  }, {
    _id: false,
    id: false,
  });

  const IncidentChecklist = new Schema<IncidentChecklistType>({
    active: {
      type: Boolean,
      default: true
    },
    built_in: {
      type: Boolean,
      default: false
    },
    isMandatory: {
      type: Boolean,
      default: false
    },
    items: {
      type: [IncidentChecklistItem],
      default: [],
    },
    modified_date: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    position: {
      type: Number,
      default: 0,
    },
    uuid: {
      type: String,
      default: "",
    },
    // may be deprecated
    local_id: {
      type: String,
    },
    id: {
      type: String,
    },
  }, {
    _id: false,
    id: false,
  });

  const modelSchema = new Schema<ManagedIncidentType>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    departmentId: {
      type: String,
      default: "",
      required: true,
      index: true,
    },
    userId: {
      type: String,
      required: true,
    },
    uuid: {
      type: String,
      default: uuid.v4,
    },

    start_unix_time: {
      type: Number,
      default: 0,
    },

    end_unix_time: Number,
    par_unix_time: Number,
    watch_unix_start_time: Number,
    watch_unix_pause_time: Number,
    start_time: {
      type: String,
    },
    end_time: {
      type: String,
    },
    modified_date: {
      type: String,
    },

    modified_unix_date: {
      type: Number,
      default: 0,
    },
    modified: {
      type: Date,
      default: currentDate,
    },

    channel_owner: {
      type: String,
      default: "",
    },
    channel: {
      type: String,
      default: "",
    },

    active: Boolean,
    address: String,
    api_incident_number: String,
    CallerNumber: String,
    CommandChannel: String,
    CommonPlaceName: String,
    cross_streets: String,
    deviceTime: {
      type: String,
      default: "",
    },
    extended: {
      type: Boolean,
      default: false
    },
    FireMap: {
      type: String,
      default: "",
    },
    is_closed: {
      type: Boolean,
      default: false
    },
    last_view: String,
    location: String,
    MapPages: {
      type: String,
      default: "",
    },
    managed: {
      type: Number,
      default: 1,
    },
    name: String,
    preference_location: String,
    serverTime: {
      type: String,
      default: "",
    },
    slave_map_changed: Boolean,
    source: String,
    TacticalAltChannel: String,
    TacticalChannel: String,

    checklists: {
      type: [IncidentChecklist],
      default: [],
    },
    groups: {
      type: [IncidentGroup],
      default: [],
    },
    hazards: {
      type: [IncidentHazard],
      default: [],
    },
    // Incident History
    history: {
      type: [HistoryItem],
      default: [],
    },
    // Incident Notes
    notes: {
      type: [HistoryItem],
      default: [],
    },

    units: {
      type: [IncidentUnit],
      default: [],
    },
    // Training
    simulation: {
      type: Boolean,
      default: false,
    },
    rts: {
      type: Boolean,
      default: true,
    },
    // may be deprecated
    local_id: {
      type: String,
    },
    AgencyID: {
      type: String,
      default: "",
    },
    isMandatory: {
      type: Boolean,
      default: false,
    },

    // Share incident properties
    radioChannels: {
      type: [RadioChannel],
      default: [],
    },
    record: {
      type: RecordValue,
    },
    ReportNumber: {
      type: [ReportNumber],
      default: [],
    },
    // Shared Incident, copied by iOS
    sharedTo: {
      type: [SharedTo],
      default: [],
    },
    // Include current department name, to share with external departments
    // other properties are set at output
    sharedSource: {
      type: SharedSource,
    },
  }, {
    autoIndex: false,
  });

  modelSchema.virtual("id").get(function(this: ManagedIncident) {
    return this._id.toHexString();
  });

  modelSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
  });


  modelSchema.plugin(mongooseLeanVirtuals);
  return mongoose.model<ManagedIncident>("ManagedIncident", modelSchema, "massive_incident_managed", { overwriteModels: true });
}

export interface ManagedIncidentModel extends Model<ManagedIncident> { }
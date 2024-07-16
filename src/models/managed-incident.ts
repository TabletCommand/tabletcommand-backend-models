import * as mongooseLeanVirtuals from "mongoose-lean-virtuals";
import * as uuid from "uuid";
import {
  currentDate,
  MongooseModule,
} from "../helpers";
import {
  CADPersonSchema,
  CADPersonSchemaType,
  RadioChannelSchema,
  RadioChannelSchemaType,
  RecordSchema,
  RecordSchemaType,
  ReportNumberSchema,
  ReportNumberSchemaType,
  SharedSourceSchema,
  SharedSourceSchemaType,
  SharedToSchema,
  SharedToSchemaType,
} from "./schema/shared-incident";
import { Model, Types } from "mongoose";

interface HistoryItemType extends Record<string, unknown> {
  message: string,
  entity_type: number,
  time: number,
  entity_id: string,
  user: string,
}

interface AssignmentItemType {
  name: string,
  uuid: string,
  modified_date: string,
  modified_unix_date: number,
  built_in: boolean,
  isMandatory: boolean,
  description: string,
  active: boolean,
  position: number,
}

interface IncidentUnitType extends Record<string, unknown> {
  UnitID: string,
  active: boolean,
  air_time: string,
  assignment: AssignmentItemType,
  AlarmAtDispatch: number,
  api_unit_dispatch_number: string,
  checked: boolean,
  column_position: number,
  group_position: number,
  incident_position: number,
  isSupervisor: boolean,
  is_part_of_group: boolean,
  location_on_map: string,
  modified_date: string,
  modified_unix_date: number,
  note: string,
  personnelOnScene: number,
  Personnel: CADPersonSchemaType[],
  status: string,
  status_unix_date: number,
  time: string,
  warning: number,
  uuid: string,
  parent_uuid: string,
  local_id: string,
}

interface IncidentGroupType {
  location_on_map: string,
  name: string,
  note: string,
  position: number,
  type: number,
  type_text: string,
  units: IncidentUnitType[],
  uuid: string,
  incident_id: string,
}

interface IncidentHazardType {
  location_on_scene: string,
  name: string,
  radius: number,
  time: number,
  uuid: string,
  active: boolean,
  incident_id: string,
  local_id: string,
  note: string,
}

interface IncidentChecklistItemType {
  active: boolean,
  checked: boolean,
  isMandatory: boolean,
  modified_date: string,
  name: string,
  position: number,
  uuid: string,
  checklist_uuid: string,
  description: string,
  id: string,
}

interface IncidentChecklistType {
  active: boolean,
  built_in: boolean,
  isMandatory: boolean,
  items: IncidentChecklistItemType[],
  modified_date: string,
  name: string,
  position: number,
  uuid: string,
  local_id: string,
  id: string,
}
export interface ManagedIncident extends Record<string, unknown> {
  _id: Types.ObjectId,
  id?: string,
  departmentId: string,
  userId: string,
  uuid: string,
  start_unix_time: number,
  end_unix_time: number,
  par_unix_time: number,
  watch_unix_start_time: number,
  watch_unix_pause_time: number,
  start_time: string,
  end_time: string,
  modified_date: string,
  modified_unix_date: number,
  modified: Date,
  channel_owner: string,
  channel: string,
  active: boolean,
  address: string,
  api_incident_number: string,
  CallerNumber: string,
  CommandChannel: string,
  CommonPlaceName: string,
  cross_streets: string,
  deviceTime: string,
  extended: boolean,
  FireMap: string,
  is_closed: boolean,
  last_view: string,
  location: string,
  MapPages: string,
  managed: number,
  name: string,
  preference_location: string,
  serverTime: string,
  slave_map_changed: boolean,
  source: string,
  TacticalAltChannel: string,
  TacticalChannel: string,
  checklists: IncidentChecklistType[]
  groups: IncidentGroupType[],
  hazards: IncidentHazardType[],
  history: HistoryItemType[],
  notes: HistoryItemType[],
  units: IncidentUnitType[],
  simulation: boolean,
  rts: boolean,
  local_id: string,
  AgencyID: string,
  isMandatory: boolean,
  radioChannels: RadioChannelSchemaType[],
  record: RecordSchemaType,
  ReportNumber: ReportNumberSchemaType[],
  sharedTo: SharedToSchemaType[],
  sharedSource: SharedSourceSchemaType,
}

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

  const modelSchema = new Schema<ManagedIncident>({
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
  });
  modelSchema.set("autoIndex", false);

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
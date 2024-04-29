import {
  createSchema,
  createModel,
  MongooseModule,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
  currentDate,
} from "../helpers";

export function PersonnelRosterSchema(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
      auto: true,
    },
    PersonnelID: {
      type: String,
      required: true,
    },
    PersonnelName: {
      type: String,
      required: true,
    },
    PersonnelRank: {
      type: String,
      default: ""
    },
    PersonnelWorkCode: {
      type: String,
      default: ""
    },
    PersonnelUUID: {
      type: String,
      default: ""
    },

    departmentId: {
      type: String,
    },

    action: {
      type: String,
      default: "add", // The options are "add", "remove"
    },
    radioName: {
      type: String,
      default: "",
    },

    shiftStart: {
      type: Date,
      default: currentDate,
    },
    shiftEnd: {
      type: Date,
      default: currentDate,
    },

    active: {
      type: Boolean,
      default: false,
    },
  }, {
    collection: "massive_personnel_roster",
    autoIndex: false,
    timestamps: true,
  });

  return modelSchema;
}

export async function PersonnelRosterModule(mongoose: MongooseModule) {
  const modelSchema = PersonnelRosterSchema(mongoose);
  return createModel(mongoose, "PersonnelRoster", modelSchema);
}

export interface PersonnelRoster extends ItemTypeFromTypeSchemaFunction<typeof PersonnelRosterModule> { }
export interface PersonnelRosterModel extends ModelTypeFromTypeSchemaFunction<PersonnelRoster> { }
export default PersonnelRosterModule as ReplaceModelReturnType<typeof PersonnelRosterModule, PersonnelRosterModel>;

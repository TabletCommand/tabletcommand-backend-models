import {
  createModel,
  createSchema,
  currentDate,
  ItemTypeFromTypeSchemaFunction,
  ModelTypeFromTypeSchemaFunction,
  MongooseModule,
  ReplaceModelReturnType,
} from "../helpers";

export async function UserRegistrationModule(mongoose: MongooseModule) {
  const Schema = mongoose.Schema;

  const modelSchema = createSchema(Schema, {
    email: {
      type: String,
      default: "",
      required: true,
      index: true,
    },
    name: {
      type: String,
      default: "",
      required: true,
    },
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    department: {
      type: String,
      default: "",
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "",
    },
    modifiedDate: {
      type: Number,
      required: true,
      default: 0,
      min: 1,
    },
    modified: {
      type: Date,
      default: currentDate,
    },
    presentedAt: {
      type: Number,
      default: 0,
    },
    managedIncidentsCount: {
      type: Number,
      default: 0,
    },
    checklistsCount: {
      type: Number,
      default: 0,
    },
    stage: {
      type: String,
      default: "",
    },
    firstIncidentUnixTime: {
      type: Number,
      default: 0,
    },
    lastIncidentLocation: {
      type: String,
      default: "",
    },
    lastIncidentUnixTime: {
      type: Number,
      default: 0,
    },
    syncedToHubSpot: {
      type: Boolean,
      default: false,
    },
  }, {
    collection: "massive_user_registration",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "UserRegistration", modelSchema);
}

export interface UserRegistration extends ItemTypeFromTypeSchemaFunction<typeof UserRegistrationModule> { }
export interface UserRegistrationModel extends ModelTypeFromTypeSchemaFunction<UserRegistration> { }
export default UserRegistrationModule as ReplaceModelReturnType<typeof UserRegistrationModule, UserRegistrationModel>;

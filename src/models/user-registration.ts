import { Model } from "mongoose";
import {
  currentDate,
  MongooseModule,
} from "../helpers";
import { UserRegistrationType } from "../types/user";

export interface UserRegistration extends UserRegistrationType { }

export default async function UserRegistrationModule(mongoose: MongooseModule) {
  const Schema = mongoose.Schema;

  const modelSchema = new Schema<UserRegistrationType>({
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
    autoIndex: false
  });

  return mongoose.model<UserRegistration>("UserRegistration", modelSchema, "massive_user_registration", { overwriteModels: true });
}

export interface UserRegistrationModel extends Model<UserRegistration> { }
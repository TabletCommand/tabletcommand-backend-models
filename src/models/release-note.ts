import { Model, Types } from "mongoose";
import {
  MongooseModule,
  currentDate,
} from "../helpers";

export interface ReleaseNote extends Record<string, unknown> {
  _id: Types.ObjectId
  title: string
  notes: string
  version: string
  releaseDate: Date
  status: string
  modified: Date
}

export default async function ReleaseNoteModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<ReleaseNote>({
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    title: {
      type: String,
      default: "",
    },
    notes: {
      type: String,
      default: "",
    },
    version: {
      type: String,
      default: "",
    },
    releaseDate: {
      type: Date,
    },
    status: {
      type: String,
      default: "draft"
    },
    modified: {
      type: Date,
      default: currentDate,
    },
  }, { autoIndex: false });
  return mongoose.model<ReleaseNote>("ReleaseNote", modelSchema, "massive_release_note", { overwriteModels: true });
}

export interface ReleaseNoteModel extends Model<ReleaseNote> { }

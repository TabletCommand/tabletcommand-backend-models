import { Model } from "mongoose";
import {
  MongooseModule,
  currentDate,
} from "../helpers";
import { ReleaseNoteType } from "../types/release-note";

export interface ReleaseNote extends ReleaseNoteType, Record<string, unknown> { }

export default async function ReleaseNoteModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const modelSchema = new Schema<ReleaseNoteType>({
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

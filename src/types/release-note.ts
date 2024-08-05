import { Types } from "mongoose";

export interface ReleaseNoteType {
  _id: Types.ObjectId
  title: string
  notes: string
  version: string
  releaseDate: Date
  status: string
  modified: Date
  devNotes: string
}

import {
  MongooseModule,
  createSchema,
  createModel,
  currentDate,
  ModelTypeFromTypeSchemaFunction,
  ItemTypeFromTypeSchemaFunction,
  ReplaceModelReturnType,
} from "../helpers";

export async function ReleaseNoteModule(mongoose: MongooseModule) {
  const { Schema, Types } = mongoose;

  const modelSchema = createSchema(Schema, {
    _id: {
      type: Types.ObjectId,
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
    devNotes: {
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
  }, {
    collection: "massive_release_note",
  });
  modelSchema.set("autoIndex", false);
  return createModel(mongoose, "ReleaseNote", modelSchema);
}

export interface ReleaseNote extends ItemTypeFromTypeSchemaFunction<typeof ReleaseNoteModule> { }
export interface ReleaseNoteModel extends ModelTypeFromTypeSchemaFunction<ReleaseNote> { }
export default ReleaseNoteModule as ReplaceModelReturnType<typeof ReleaseNoteModule, ReleaseNoteModel>;

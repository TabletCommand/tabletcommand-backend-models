/// <reference types="mongoose" />
import { MongooseModule, ModelTypeFromTypeSchemaFunction, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function ReleaseNoteModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("mongoose").Types.ObjectId;
    title: string;
    notes: string;
    devNotes: string;
    version: string;
    releaseDate: string;
    status: string;
    modified: string;
}, {}> & {
    __methods?: unknown;
}>;
export interface ReleaseNote extends ItemTypeFromTypeSchemaFunction<typeof ReleaseNoteModule> {
}
export interface ReleaseNoteModel extends ModelTypeFromTypeSchemaFunction<ReleaseNote> {
}
declare const _default: ReplaceModelReturnType<typeof ReleaseNoteModule, ReleaseNoteModel>;
export default _default;
//# sourceMappingURL=release-note.d.ts.map
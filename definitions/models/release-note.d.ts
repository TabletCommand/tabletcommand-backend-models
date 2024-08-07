/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from "mongoose";
import { MongooseModule } from "../helpers";
import { ReleaseNoteType } from "../types/release-note";
export interface ReleaseNote extends ReleaseNoteType, Record<string, unknown> {
}
export default function ReleaseNoteModule(mongoose: MongooseModule): Promise<Model<ReleaseNote, {}, {}, {}, import("mongoose").Document<unknown, {}, ReleaseNote> & ReleaseNote & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>>;
export interface ReleaseNoteModel extends Model<ReleaseNote> {
}
//# sourceMappingURL=release-note.d.ts.map
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
import { MongooseModule } from "../helpers";
import { Model } from "mongoose";
import { PersonnelKnownType } from "../types/personnel";
export interface PersonnelKnown extends PersonnelKnownType, Record<string, unknown> {
}
export declare function PersonnelKnownSchema(mongoose: MongooseModule): import("mongoose").Schema<PersonnelKnownType, Model<PersonnelKnownType, any, any, any, import("mongoose").Document<unknown, any, PersonnelKnownType> & PersonnelKnownType & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PersonnelKnownType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PersonnelKnownType>> & import("mongoose").FlatRecord<PersonnelKnownType> & Required<{
    _id: import("mongoose").Types.ObjectId;
}>>;
export default function PersonnelKnownModule(mongoose: MongooseModule): Promise<Model<PersonnelKnown, {}, {}, {}, import("mongoose").Document<unknown, {}, PersonnelKnown> & PersonnelKnown & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>>;
export interface PersonnelKnownModel extends Model<PersonnelKnown> {
}
//# sourceMappingURL=personnel-known.d.ts.map
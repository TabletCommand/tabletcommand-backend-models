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
import { PersonnelRosterType } from "../types/personnel";
export interface PersonnelRoster extends PersonnelRosterType {
}
export declare function PersonnelRosterSchema(mongoose: MongooseModule): import("mongoose").Schema<PersonnelRosterType, Model<PersonnelRosterType, any, any, any, import("mongoose").Document<unknown, any, PersonnelRosterType> & PersonnelRosterType & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PersonnelRosterType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PersonnelRosterType>> & import("mongoose").FlatRecord<PersonnelRosterType> & Required<{
    _id: import("mongoose").Types.ObjectId;
}>>;
export default function PersonnelRosterModule(mongoose: MongooseModule): Promise<Model<PersonnelRoster, {}, {}, {}, import("mongoose").Document<unknown, {}, PersonnelRoster> & PersonnelRoster & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>>;
export interface PersonnelRosterModel extends Model<PersonnelRoster> {
}
//# sourceMappingURL=personnel-roster.d.ts.map
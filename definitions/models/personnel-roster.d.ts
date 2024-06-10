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
import { Model, Types } from "mongoose";
import { MongooseModule } from "../helpers";
export interface PersonnelRoster {
    _id: Types.ObjectId;
    PersonnelID: string;
    PersonnelName: string;
    PersonnelRank: string;
    PersonnelWorkCode: string;
    PersonnelUUID: string;
    departmentId: string;
    modified: Date;
    action: string;
    radioName: string;
    shiftStart: Date;
    shiftEnd: Date;
    active: boolean;
}
export declare function PersonnelRosterSchema(mongoose: MongooseModule): import("mongoose").Schema<PersonnelRoster, Model<PersonnelRoster, any, any, any, import("mongoose").Document<unknown, any, PersonnelRoster> & PersonnelRoster & Required<{
    _id: Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PersonnelRoster, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PersonnelRoster>> & import("mongoose").FlatRecord<PersonnelRoster> & Required<{
    _id: Types.ObjectId;
}>>;
export default function PersonnelRosterModule(mongoose: MongooseModule): Promise<Model<PersonnelRoster, {}, {}, {}, import("mongoose").Document<unknown, {}, PersonnelRoster> & PersonnelRoster & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface PersonnelRosterModel extends Model<PersonnelRoster> {
}
//# sourceMappingURL=personnel-roster.d.ts.map
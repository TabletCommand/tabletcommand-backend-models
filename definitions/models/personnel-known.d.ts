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
import { Model, Types } from "mongoose";
interface RadioType {
    radioName: string;
    active: boolean;
}
export interface PersonnelKnown {
    _id: Types.ObjectId;
    PersonnelID: string;
    PersonnelName: string;
    PersonnelRank: string;
    PersonnelWorkCode: string;
    modified: Date;
    departmentId: string;
    uuid: string;
    radios: RadioType[];
    active: boolean;
    jurisdiction: string;
    agencyId: Types.ObjectId;
}
export declare function PersonnelKnownSchema(mongoose: MongooseModule): import("mongoose").Schema<PersonnelKnown, Model<PersonnelKnown, any, any, any, import("mongoose").Document<unknown, any, PersonnelKnown> & PersonnelKnown & Required<{
    _id: Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PersonnelKnown, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PersonnelKnown>> & import("mongoose").FlatRecord<PersonnelKnown> & Required<{
    _id: Types.ObjectId;
}>>;
export default function PersonnelKnownModule(mongoose: MongooseModule): Promise<Model<PersonnelKnown, {}, {}, {}, import("mongoose").Document<unknown, {}, PersonnelKnown> & PersonnelKnown & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface PersonnelKnownModel extends Model<PersonnelKnown> {
}
export {};
//# sourceMappingURL=personnel-known.d.ts.map
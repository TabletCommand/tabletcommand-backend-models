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
import { AgencyType } from "../types/agency";
export interface Agency extends AgencyType, Record<string, unknown> {
}
export declare function AgencySchema(mongoose: MongooseModule): import("mongoose").Schema<AgencyType, Model<AgencyType, any, any, any, import("mongoose").Document<unknown, any, AgencyType> & AgencyType & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AgencyType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<AgencyType>> & import("mongoose").FlatRecord<AgencyType> & Required<{
    _id: import("mongoose").Types.ObjectId;
}>>;
export default function AgencyModule(mongoose: MongooseModule): Promise<Model<Agency, {}, {}, {}, import("mongoose").Document<unknown, {}, Agency> & Agency & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>>;
export interface AgencyModel extends Model<Agency> {
}
//# sourceMappingURL=agency.d.ts.map
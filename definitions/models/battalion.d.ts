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
import { BattalionType } from "../types/battalion";
export interface Battalion extends BattalionType, Record<string, unknown> {
}
export declare function BattalionSchema(mongoose: MongooseModule): import("mongoose").Schema<BattalionType, Model<BattalionType, any, any, any, import("mongoose").Document<unknown, any, BattalionType> & BattalionType & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, BattalionType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<BattalionType>> & import("mongoose").FlatRecord<BattalionType> & Required<{
    _id: import("mongoose").Types.ObjectId;
}>>;
export default function BattalionModule(mongoose: MongooseModule): Promise<Model<Battalion, {}, {}, {}, import("mongoose").Document<unknown, {}, Battalion> & Battalion & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>>;
export interface BattalionModel extends Model<Battalion> {
}
//# sourceMappingURL=battalion.d.ts.map
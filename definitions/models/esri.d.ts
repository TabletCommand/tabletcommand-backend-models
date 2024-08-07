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
import { EsriType } from "../types/esri";
export interface Esri extends EsriType {
}
export declare function EsriSchema(mongoose: MongooseModule): import("mongoose").Schema<EsriType, Model<EsriType, any, any, any, import("mongoose").Document<unknown, any, EsriType> & EsriType & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, EsriType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<EsriType>> & import("mongoose").FlatRecord<EsriType> & Required<{
    _id: import("mongoose").Types.ObjectId;
}>>;
export default function EsriModule(mongoose: MongooseModule): Promise<Model<Esri, {}, {}, {}, import("mongoose").Document<unknown, {}, Esri> & Esri & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>>;
export interface EsriModel extends Model<Esri> {
}
//# sourceMappingURL=esri.d.ts.map
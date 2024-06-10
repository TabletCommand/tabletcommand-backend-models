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
import { EsriAuthSchemaType } from "./schema/esri-auth";
import { EsriErrorSchemaType } from "./schema/esri-error";
import { EsriMapType } from "./schema/esri-map";
import { FireMapperAuthType } from "./schema/firemapper-auth";
interface MapPropertiesType {
    itemId: string;
    download: boolean;
}
export interface Esri {
    _id: Types.ObjectId;
    runAt: Date;
    departmentId: Types.ObjectId;
    auth: EsriAuthSchemaType;
    authError: EsriErrorSchemaType;
    fireMapperAuth: FireMapperAuthType;
    arcGISGroupIds: string[];
    arcGISAuth: EsriAuthSchemaType;
    arcGISMigrated: boolean;
    review: object;
    reviewRunAt: Date;
    maps: EsriMapType[];
    mapsProperties: MapPropertiesType[];
    mapLastUpdated: Date;
}
export declare function EsriSchema(mongoose: MongooseModule): import("mongoose").Schema<Esri, Model<Esri, any, any, any, import("mongoose").Document<unknown, any, Esri> & Esri & Required<{
    _id: Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Esri, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Esri>> & import("mongoose").FlatRecord<Esri> & Required<{
    _id: Types.ObjectId;
}>>;
export default function EsriModule(mongoose: MongooseModule): Promise<Model<Esri, {}, {}, {}, import("mongoose").Document<unknown, {}, Esri> & Esri & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface EsriModel extends Model<Esri> {
}
export {};
//# sourceMappingURL=esri.d.ts.map
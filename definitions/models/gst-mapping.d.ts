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
export interface GSTMapping {
    _id: Types.ObjectId;
    departmentId: string;
    gstAgency: string;
    deviceType: string;
    unitId: string;
    location: {
        longitude: number;
        latitude: number;
    };
    modified_unix_date: number;
    modified: Date;
    active: boolean;
    mapHidden: boolean;
    remoteAddress: string;
    uuid: string;
    note: string;
}
export default function GSTMappingModule(mongoose: MongooseModule): Promise<Model<GSTMapping, {}, {}, {}, import("mongoose").Document<unknown, {}, GSTMapping> & GSTMapping & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface GSTMappingModel extends Model<GSTMapping> {
}
//# sourceMappingURL=gst-mapping.d.ts.map
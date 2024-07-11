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
import { Types, Model } from "mongoose";
export interface BeaconLog {
    _id: Types.ObjectId;
    departmentId: string;
    userId: string;
    object: object;
    createdAt: Date;
    modified_unix_date: number;
}
export default function BeaconLogModule(mongoose: MongooseModule): Promise<Model<BeaconLog, {}, {}, {}, import("mongoose").Document<unknown, {}, BeaconLog> & BeaconLog & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface BeaconLogModel extends Model<BeaconLog> {
}
//# sourceMappingURL=beacon-log.d.ts.map
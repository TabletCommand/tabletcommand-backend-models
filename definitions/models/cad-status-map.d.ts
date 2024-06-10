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
interface ToStatusIdType {
    statusId: number;
    userEnabled: boolean;
    position: number;
}
export interface CADStatusMap {
    departmentId: string;
    modifiedDate: number;
    modified: Date;
    fromStatusId: number;
    toStatusIds: ToStatusIdType[];
    backupDate: Date;
}
export default function CADStatusMapModule(mongoose: MongooseModule): Promise<Model<CADStatusMap, {}, {}, {}, import("mongoose").Document<unknown, {}, CADStatusMap> & CADStatusMap & {
    _id: import("mongoose").Types.ObjectId;
}, any>>;
export interface CADStatusMapModel extends Model<CADStatusMap> {
}
export {};
//# sourceMappingURL=cad-status-map.d.ts.map
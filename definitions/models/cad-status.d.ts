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
import { ColorSchemaType } from "./schema/color";
import { Model } from "mongoose";
interface StatusOptionValueType {
    name: string;
    type: string;
    visible: boolean;
    value: string;
    favorite: boolean;
    position: number;
    isDefault: boolean;
    latitude: number;
    longitude: number;
    time: number;
}
export interface CADStatus {
    uuid: string;
    departmentId: string;
    modifiedDate: number;
    modified: Date;
    statusId: number;
    code: string;
    codeDisplay: string;
    status: string;
    name: string;
    normalized: string;
    selfAssignable: boolean;
    roaming: boolean;
    options: StatusOptionValueType;
    color: ColorSchemaType;
    backupDate: Date;
}
export default function CADStatusModule(mongoose: MongooseModule): Promise<Model<CADStatus, {}, {}, {}, import("mongoose").Document<unknown, {}, CADStatus> & CADStatus & {
    _id: import("mongoose").Types.ObjectId;
}, any>>;
export interface CADStatusModel extends Model<CADStatus> {
}
export {};
//# sourceMappingURL=cad-status.d.ts.map
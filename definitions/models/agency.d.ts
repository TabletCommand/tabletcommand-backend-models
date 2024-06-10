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
import { AgencyCronConfigType } from "./schema/agency-cron-config";
import { AgencySAMLSchemaType } from "./schema/agency-saml";
import { Model, Types } from "mongoose";
interface CrossStaffedUnitType {
    radioName: string;
    crossStaffedUnits: string[];
    alwaysCrossStaff: boolean;
}
export interface Agency {
    _id: Types.ObjectId;
    code: string;
    name: string;
    domain: string;
    personnelApiKey: string;
    agencyApiKey: string;
    uuid: string;
    modified_unix_date: number;
    modified: Date;
    active: boolean;
    departmentId: Types.ObjectId;
    administrators: Types.ObjectId[];
    personnelIntegration: boolean;
    personnelMonitorHours: number;
    crossStaffing: CrossStaffedUnitType[];
    licensing: object;
    cronConfig: AgencyCronConfigType;
    saml: AgencySAMLSchemaType[];
    activeUserCount: number;
}
export declare function AgencySchema(mongoose: MongooseModule): import("mongoose").Schema<Agency, Model<Agency, any, any, any, import("mongoose").Document<unknown, any, Agency> & Agency & Required<{
    _id: Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Agency, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Agency>> & import("mongoose").FlatRecord<Agency> & Required<{
    _id: Types.ObjectId;
}>>;
export default function AgencyModule(mongoose: MongooseModule): Promise<Model<Agency, {}, {}, {}, import("mongoose").Document<unknown, {}, Agency> & Agency & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface AgencyModel extends Model<Agency> {
}
export {};
//# sourceMappingURL=agency.d.ts.map
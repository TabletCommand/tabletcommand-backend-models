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
interface ChartItemType {
    email: string;
    dateAt: Date;
    os: string;
    osSemVer: string;
    app: string;
    appSemVer: string;
}
export interface ChartDeviceStats {
    _id: Types.ObjectId;
    id: string;
    dateAt: Date;
    departmentId: string;
    items: ChartItemType[];
}
export default function ChartDeviceStatsModule(mongoose: MongooseModule): Promise<Model<ChartDeviceStats, {}, {}, {}, import("mongoose").Document<unknown, {}, ChartDeviceStats> & ChartDeviceStats & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface ChartDeviceStatsModel extends Model<ChartDeviceStats> {
}
export {};
//# sourceMappingURL=chart-device-stats.d.ts.map
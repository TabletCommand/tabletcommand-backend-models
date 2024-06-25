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
interface ChartItemType {
    item: string;
    dateAt: Date;
}
export interface ChartManagedIncident {
    _id: Types.ObjectId;
    id?: string;
    dateAt: Date;
    departmentId: string;
    userId: string;
    count: number;
    items: ChartItemType[];
}
export default function ChartManagedIncidentModule(mongoose: MongooseModule): Promise<Model<ChartManagedIncident, {}, {}, {}, import("mongoose").Document<unknown, {}, ChartManagedIncident> & ChartManagedIncident & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface ChartManagedIncidentModel extends Model<ChartManagedIncident> {
}
export {};
//# sourceMappingURL=chart-managed-incident.d.ts.map
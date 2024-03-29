/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function MonitorModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("mongoose").Types.ObjectId;
    departmentId: string;
    agencyId: string;
    notificationType: string;
    status: string;
    sentUnixDate: number;
    sentAt: string;
    ticketId: string;
    count: number;
}, {}> & {
    __methods?: unknown;
}>;
export interface Monitor extends ItemTypeFromTypeSchemaFunction<typeof MonitorModule> {
}
export interface MonitorModel extends ModelTypeFromTypeSchemaFunction<Monitor> {
}
declare const _default: ReplaceModelReturnType<typeof MonitorModule, MonitorModel>;
export default _default;
//# sourceMappingURL=monitor.d.ts.map
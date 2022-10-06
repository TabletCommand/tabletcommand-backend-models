/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function JobLogModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectID;
    host: string;
    bidDate: string;
    startDate: string;
    completedDate: string;
    state: string;
    forceClosed: boolean;
}, {}> & {
    __methods?: unknown;
}>;
export interface JobLog extends ItemTypeFromTypeSchemaFunction<typeof JobLogModule> {
}
export interface JobLogModel extends ModelTypeFromTypeSchemaFunction<JobLog> {
}
declare const _default: ReplaceModelReturnType<typeof JobLogModule, JobLogModel>;
export default _default;
//# sourceMappingURL=job_log.d.ts.map
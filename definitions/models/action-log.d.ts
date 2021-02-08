/// <reference types="mongoose" />
import { MongooseModule, ModelTypeFromTypeSchemaFunction, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function ActionLogModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    departmentId: string;
    email: string;
    userId: string;
    action: string;
    object: any;
    createdAt: string;
    modified_unix_date: number;
}, {}> & {
    __methods?: unknown;
}>;
export interface ActionLog extends ItemTypeFromTypeSchemaFunction<typeof ActionLogModule> {
}
export interface ActionLogModel extends ModelTypeFromTypeSchemaFunction<ActionLog> {
}
declare const _default: ReplaceModelReturnType<typeof ActionLogModule, ActionLogModel>;
export default _default;
//# sourceMappingURL=action-log.d.ts.map
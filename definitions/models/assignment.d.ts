/// <reference types="mongoose" />
import { MongooseModule, ModelTypeFromTypeSchemaFunction, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function AssignmentModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    position: number;
    userId: string;
    uuid: string;
    isMandatory: boolean;
    modified_date: string;
    modified_unix_date: number;
    departmentId: string;
    active: boolean;
    name: string;
    description: string;
}, {}> & {
    __methods?: unknown;
}>;
export interface Assignment extends ItemTypeFromTypeSchemaFunction<typeof AssignmentModule> {
}
export interface AssignmentModel extends ModelTypeFromTypeSchemaFunction<Assignment> {
}
declare const _default: ReplaceModelReturnType<typeof AssignmentModule, AssignmentModel>;
export default _default;
//# sourceMappingURL=assignment.d.ts.map
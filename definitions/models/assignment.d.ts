/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function AssignmentModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectID;
    uuid: string;
    active: boolean;
    userId: string;
    departmentId: string;
    isMandatory: boolean;
    modified: string;
    modified_date: string;
    modified_unix_date: number;
    position: number;
    name: string;
    description: string;
    full_description: string;
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
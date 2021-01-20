/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function ChecklistModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    position: number;
    local_id: number;
    userId: string;
    uuid: string;
    isMandatory: boolean;
    modified_date: string;
    modified_unix_date: number;
    departmentId: string;
    active: boolean;
    name: string;
    agencyId: {
        type: never;
        ref: never;
        default: never;
    };
}, {}> & {
    __methods?: unknown;
}>;
export interface Checklist extends ItemTypeFromTypeSchemaFunction<typeof ChecklistModule> {
}
export interface ChecklistModel extends ModelTypeFromTypeSchemaFunction<Checklist> {
}
declare const _default: ReplaceModelReturnType<typeof ChecklistModule, ChecklistModel>;
export default _default;
//# sourceMappingURL=checklist.d.ts.map
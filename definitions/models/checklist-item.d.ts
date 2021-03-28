/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function ChecklistItemModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any, {}> & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    position: number;
    checked: number;
    local_id: number;
    userId: string;
    uuid: string;
    checklist_uuid: string;
    api_checklist_id: string;
    isMandatory: boolean;
    modified_date: string;
    modified_unix_date: number;
    departmentId: string;
    active: boolean;
    name: string;
    agencyId: import("mongoose").Schema.Types.ObjectId;
    description: string;
}, {}> & {
    __methods?: unknown;
}>;
export interface ChecklistItem extends ItemTypeFromTypeSchemaFunction<typeof ChecklistItemModule> {
}
export interface ChecklistItemModel extends ModelTypeFromTypeSchemaFunction<ChecklistItem> {
}
declare const _default: ReplaceModelReturnType<typeof ChecklistItemModule, ChecklistItemModel>;
export default _default;
//# sourceMappingURL=checklist-item.d.ts.map
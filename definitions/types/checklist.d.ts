import { Types } from "mongoose";
export interface ChecklistType {
    _id: Types.ObjectId;
    id?: string;
    position: number;
    userId: string;
    uuid: string;
    isMandatory: boolean;
    modified_date: string;
    modified_unix_date: number;
    modified: Date;
    departmentId: string;
    active: boolean;
    name: string;
    agencyId: Types.ObjectId;
    items: ChecklistItemType[];
}
export interface ChecklistItemType {
    _id: Types.ObjectId;
    id?: string;
    position: number;
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
    description: string;
}
//# sourceMappingURL=checklist.d.ts.map
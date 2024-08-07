import { Types } from "mongoose";
export interface AssignmentType {
    _id: Types.ObjectId;
    id: string;
    uuid: string;
    active: boolean;
    userId: string;
    departmentId: string;
    isMandatory: boolean;
    modified: Date;
    modified_date: string;
    modified_unix_date: number;
    position: number;
    name: string;
    description: string;
    full_description: string;
}
//# sourceMappingURL=assignment.d.ts.map
import { Types } from "mongoose";
export interface ActionLogType {
    _id: Types.ObjectId;
    departmentId: string;
    email: string;
    userId: string;
    action: string;
    object: object;
    before: object;
    after: object;
    delta: object;
    message: string;
    createdAt: Date;
    modified_unix_date: number;
}
//# sourceMappingURL=action-log.d.ts.map
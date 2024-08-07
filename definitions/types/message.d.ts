import { Types } from "mongoose";
import { ColorSchemaType } from "./color";
export interface TypeSchemaType {
    type: string;
    typeOpts: object;
}
export interface MessageType {
    _id: Types.ObjectId;
    departmentId: string;
    userId: string;
    session: string;
    active: boolean;
    uuid: string;
    requestId: string;
    title: string;
    body: string;
    actionTitle: string;
    created: Date;
    updated: Date;
    color: ColorSchemaType;
    url: string;
    priority: number;
    type: TypeSchemaType;
}
//# sourceMappingURL=message.d.ts.map
/// <reference types="mongoose" />
import * as uuid from "uuid";
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType, retrieveCurrentUnixTime } from "../helpers";
export declare function ChecklistItemSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../helpers").MongooseInterface<{
        _id: {
            type: import("mongoose").Types.ObjectIdConstructor;
            auto: boolean;
        };
        position: {
            type: NumberConstructor;
            default: number;
        };
        userId: StringConstructor;
        uuid: {
            type: StringConstructor;
            default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
        };
        checklist_uuid: {
            type: StringConstructor;
        };
        api_checklist_id: {
            type: StringConstructor;
        };
        isMandatory: {
            type: BooleanConstructor;
            default: boolean;
        };
        modified_date: {
            type: StringConstructor;
        };
        modified_unix_date: {
            type: NumberConstructor;
            default: typeof retrieveCurrentUnixTime;
        };
        departmentId: {
            type: StringConstructor;
            required: boolean;
            index: true;
        };
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        name: {
            type: StringConstructor;
            required: boolean;
        };
        agencyId: {
            type: typeof import("mongoose").Schema.Types.ObjectId;
            ref: string;
            default: null;
        };
        description: {
            type: StringConstructor;
            default: string;
        };
    }>;
    _methods: unknown;
};
export declare function ChecklistItemModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectId;
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
    agencyId: {
        type: never;
        ref: never;
        default: never;
    };
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
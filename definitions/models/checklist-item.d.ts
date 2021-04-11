import * as uuid from "uuid";
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType, retrieveCurrentUnixTime } from "../helpers";
import { Document, Model } from "mongoose";
export declare function ChecklistItemModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: import("mongoose").Types.ObjectIdConstructor;
        auto: true;
    };
    position: {
        type: NumberConstructor;
        default: number;
    };
    checked: {
        type: NumberConstructor;
    };
    local_id: {
        type: NumberConstructor;
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
        required: true;
        index: true;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        required: true;
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
}>, unknown>>;
export interface ChecklistItem extends Document, ItemTypeFromTypeSchemaFunction<typeof ChecklistItemModule> {
}
export interface ChecklistItemModel extends Model<ChecklistItem> {
}
declare const _default: ReplaceModelReturnType<typeof ChecklistItemModule, ChecklistItemModel>;
export default _default;

import * as uuid from "uuid";
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType, currentDate } from "../helpers";
import { Document, Model } from "mongoose";
export declare function MessageModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: import("mongoose").Types.ObjectIdConstructor;
        auto: true;
    };
    departmentId: {
        type: StringConstructor;
        default: string;
        required: true;
        index: true;
    };
    userId: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    uuid: {
        type: StringConstructor;
        default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    body: {
        type: StringConstructor;
        default: string;
    };
    actionTitle: {
        type: StringConstructor;
        default: string;
    };
    createdAt: {
        type: DateConstructor;
        default: typeof currentDate;
    };
    color: {
        type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            background: {
                type: StringConstructor;
                default: string;
            };
            text: {
                type: StringConstructor;
                default: string;
            };
        }>, unknown>;
        default: null;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    priority: {
        type: NumberConstructor;
        default: number;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    trigger: {
        type: ObjectConstructor;
        default: {};
    };
}>, unknown>>;
export interface Message extends Document, ItemTypeFromTypeSchemaFunction<typeof MessageModule> {
}
export interface MessageModel extends Model<Message> {
}
declare const _default: ReplaceModelReturnType<typeof MessageModule, MessageModel>;
export default _default;

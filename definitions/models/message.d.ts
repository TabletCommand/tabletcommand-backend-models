/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function MessageModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    departmentId: string;
    userId: string;
    session: string;
    active: boolean;
    uuid: string;
    requestId: string;
    title: string;
    body: string;
    actionTitle: string;
    created: string;
    color: import("../helpers").MongooseInterface<{
        background: {
            type: StringConstructor;
            default: string;
        };
        text: {
            type: StringConstructor;
            default: string;
        };
    }>;
    url: string;
    priority: number;
    type: import("../helpers").MongooseInterface<{
        type: {
            type: StringConstructor;
            default: string;
        };
        typeOpts: {
            type: ObjectConstructor;
            default: {};
        };
    }>;
}, {}> & {
    __methods?: unknown;
}>;
export interface Message extends ItemTypeFromTypeSchemaFunction<typeof MessageModule> {
}
export interface MessageModel extends ModelTypeFromTypeSchemaFunction<Message> {
}
declare const _default: ReplaceModelReturnType<typeof MessageModule, MessageModel>;
export default _default;
//# sourceMappingURL=message.d.ts.map
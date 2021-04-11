import { MongooseModule, ReplaceModelReturnType, ItemTypeFromTypeSchemaFunction } from "../helpers";
import * as uuid from "uuid";
import { Document, Model } from "mongoose";
export declare function SessionModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: StringConstructor;
        default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
    };
    nick: StringConstructor;
    email: StringConstructor;
    user: StringConstructor;
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    token: {
        type: StringConstructor;
        default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
    };
    source: {
        type: StringConstructor;
        default: string;
    };
    departmentId: {
        type: StringConstructor;
        default: string;
        required: (this: {
            myField: unknown;
        }) => boolean;
        index: true;
    };
    why: {
        type: StringConstructor;
        default: string;
    };
    when: StringConstructor;
    ended: StringConstructor;
    userAgent: {
        type: StringConstructor;
        default: string;
    };
    remoteAddress: {
        type: StringConstructor;
        default: string;
    };
    deviceId: {
        type: StringConstructor;
        default: string;
    };
}>, unknown>>;
export interface Session extends Document, ItemTypeFromTypeSchemaFunction<typeof SessionModule> {
}
export interface SessionModel extends Model<Session> {
}
declare const _default: ReplaceModelReturnType<typeof SessionModule, SessionModel>;
export default _default;

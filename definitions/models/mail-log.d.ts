import { MongooseModule, retrieveCurrentUnixTime, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
import { Document, Model } from "mongoose";
export declare function MailLogModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: import("mongoose").Types.ObjectIdConstructor;
        auto: true;
    };
    mailId: {
        type: StringConstructor;
        default: string;
    };
    event: {
        type: StringConstructor;
        default: string;
    };
    timestamp: {
        type: NumberConstructor;
    };
    recipient: {
        type: StringConstructor;
        default: string;
    };
    recipientDomain: {
        type: StringConstructor;
        default: string;
    };
    tags: {
        type: StringConstructor[];
        default: never[];
    };
    deliveryStatus: {
        type: ObjectConstructor;
        default: {};
    };
    message: {
        type: ObjectConstructor;
        default: {};
    };
    flags: {
        type: ObjectConstructor;
        default: {};
    };
    envelope: {
        type: ObjectConstructor;
        default: {};
    };
    logLevel: {
        type: StringConstructor;
        default: string;
    };
    reason: {
        type: StringConstructor;
        default: string;
    };
    severity: {
        type: StringConstructor;
        default: string;
    };
    modified_unix_date: {
        type: NumberConstructor;
        default: typeof retrieveCurrentUnixTime;
    };
}>, unknown>>;
export interface MailLog extends Document, ItemTypeFromTypeSchemaFunction<typeof MailLogModule> {
}
export interface MailLogModel extends Model<MailLog> {
}
declare const _default: ReplaceModelReturnType<typeof MailLogModule, MailLogModel>;
export default _default;

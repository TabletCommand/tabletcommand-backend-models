/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function MailLogModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    mailId: string;
    event: string;
    timestamp: number;
    recipient: string;
    recipientDomain: string;
    tags: string[];
    deliveryStatus: any;
    message: any;
    flags: any;
    envelope: any;
    logLevel: string;
    reason: string;
    severity: string;
    modified_unix_date: number;
}, {}> & {
    __methods?: unknown;
}>;
export interface MailLog extends ItemTypeFromTypeSchemaFunction<typeof MailLogModule> {
}
export interface MailLogModel extends ModelTypeFromTypeSchemaFunction<MailLog> {
}
declare const _default: ReplaceModelReturnType<typeof MailLogModule, MailLogModel>;
export default _default;
//# sourceMappingURL=mail-log.d.ts.map
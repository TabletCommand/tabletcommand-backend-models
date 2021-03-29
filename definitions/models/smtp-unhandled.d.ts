/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function SMTPUnhandledModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any> & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    email: string;
    message: string;
}> & {
    __methods?: unknown;
}>;
export interface SMTPUnhandled extends ItemTypeFromTypeSchemaFunction<typeof SMTPUnhandledModule> {
}
export interface SMTPUnhandledModel extends ModelTypeFromTypeSchemaFunction<SMTPUnhandled> {
}
declare const _default: ReplaceModelReturnType<typeof SMTPUnhandledModule, SMTPUnhandledModel>;
export default _default;
//# sourceMappingURL=smtp-unhandled.d.ts.map
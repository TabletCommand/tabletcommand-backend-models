/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function RateLimitModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("mongoose").Types.ObjectId;
    username: string;
    modified_unix_date: number;
    modified: string;
    count: number;
    remoteAddress: string;
}, {}> & {
    __methods?: unknown;
}>;
export interface RateLimit extends ItemTypeFromTypeSchemaFunction<typeof RateLimitModule> {
}
export interface RateLimitModel extends ModelTypeFromTypeSchemaFunction<RateLimit> {
}
declare const _default: ReplaceModelReturnType<typeof RateLimitModule, RateLimitModel>;
export default _default;
//# sourceMappingURL=rate-limit.d.ts.map
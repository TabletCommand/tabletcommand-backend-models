/// <reference types="mongoose" />
import { ModelItemType, MongooseModule, UnboxPromise } from "../helpers";
export declare function RateLimitModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    _id: import("bson").ObjectId;
    username: string;
    modified_unix_date: number;
    count: number;
}, {}>>;
export default RateLimitModule;
export declare type RateLimitModel = UnboxPromise<ReturnType<typeof RateLimitModule>>;
export declare type RateLimit = ModelItemType<RateLimitModel>;
//# sourceMappingURL=rate-limit.d.ts.map
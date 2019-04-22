/// <reference types="mongoose" />
import { MongooseModule, UnboxPromise } from "./types";
export declare function RateLimitModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    _id: import("bson").ObjectId;
    username: string;
    modified_unix_date: number;
    count: number;
}, {}>>;
export default RateLimitModule;
export declare type RateLimit = UnboxPromise<ReturnType<typeof RateLimitModule>>;

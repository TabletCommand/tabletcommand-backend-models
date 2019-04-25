/// <reference types="mongoose" />
/// <reference types="bson" />
import { MongooseModule, UnboxPromise } from "./helpers";
export declare function RateLimitModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    _id: {
        type: {
            prototype: {} | {
                [x: string]: {} | any | {}[];
            } | {}[];
            cacheHexString?: undefined;
            createFromHexString: {};
            createFromTime: {};
            isValid: {};
            generate: {};
        };
        auto: never;
    };
    username: string;
    modified_unix_date: number;
    count: number;
}, {}>>;
export default RateLimitModule;
export declare type RateLimit = UnboxPromise<ReturnType<typeof RateLimitModule>>;

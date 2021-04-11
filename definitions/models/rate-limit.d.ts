import { MongooseModule, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
import { Document, Model } from "mongoose";
export declare function RateLimitModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: import("mongoose").Types.ObjectIdConstructor;
        auto: true;
    };
    username: StringConstructor;
    modified_unix_date: {
        type: NumberConstructor;
        default: number;
    };
    count: {
        type: NumberConstructor;
        default: number;
    };
}>, unknown>>;
export interface RateLimit extends Document, ItemTypeFromTypeSchemaFunction<typeof RateLimitModule> {
}
export interface RateLimitModel extends Model<RateLimit> {
}
declare const _default: ReplaceModelReturnType<typeof RateLimitModule, RateLimitModel>;
export default _default;

/// <reference types="mongoose" />
/// <reference types="bson" />
import { MongooseModule, UnboxPromise, ModelItemType } from "./helpers";
export declare function ActionLogModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
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
    departmentId: string;
    email: string;
    action: string;
    object: any;
    modified_unix_date: number;
}, {}>>;
export default ActionLogModule;
export declare type ActionLogModel = UnboxPromise<ReturnType<typeof ActionLogModule>>;
export declare type ActionLog = ModelItemType<ActionLogModel>;

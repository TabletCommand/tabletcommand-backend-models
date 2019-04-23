/// <reference types="mongoose" />
import { MongooseModule, UnboxPromise } from "./types";
export declare function ActionLogModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    _id: import("bson").ObjectId;
    departmentId: string;
    email: string;
    action: string;
    object: any;
    modified_unix_date: number;
}, {}>>;
export default ActionLogModule;
export declare type ActionLog = UnboxPromise<ReturnType<typeof ActionLogModule>>;

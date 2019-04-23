/// <reference types="mongoose" />
import { MongooseModule, UnboxPromise } from "./types";
export declare function CADStatusMapModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    departmentId: string;
    modifiedDate: number;
    fromStatusId: number;
    toStatusIds: {
        statusId: number;
        userEnabled: boolean;
    }[];
}, {}>>;
export default CADStatusMapModule;
export declare type CADStatusMap = UnboxPromise<ReturnType<typeof CADStatusMapModule>>;

/// <reference types="mongoose" />
import { MongooseModule, UnboxPromise, ModelItemType } from "../helpers";
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
export declare type CADStatusMapModel = UnboxPromise<ReturnType<typeof CADStatusMapModule>>;
export declare type CADStatusMap = ModelItemType<CADStatusMapModel>;
//# sourceMappingURL=cad-status-map.d.ts.map
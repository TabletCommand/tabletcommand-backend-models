/// <reference types="mongoose" />
import { ModelItemType, MongooseModule, UnboxPromise } from "../helpers";
export declare function IncidentTakeoverModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    _id: import("bson").ObjectId;
    departmentId: string;
    uuid: string;
    incident_id: string;
    incident_name: string;
    old_owner: string;
    new_owner: string;
    owner: string;
    status: string;
    request_time: number;
    last_response_time: number;
    response_time: number;
}, {}>>;
export default IncidentTakeoverModule;
export declare type IncidentTakeoverModel = UnboxPromise<ReturnType<typeof IncidentTakeoverModule>>;
export declare type IncidentTakeover = ModelItemType<IncidentTakeoverModel>;
//# sourceMappingURL=incident-takeover.d.ts.map
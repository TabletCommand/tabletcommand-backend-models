/// <reference types="mongoose" />
import { MongooseModule, UnboxPromise } from "./types";
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
export declare type IncidentTakeover = UnboxPromise<ReturnType<typeof IncidentTakeoverModule>>;

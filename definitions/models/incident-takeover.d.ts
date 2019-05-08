/// <reference types="mongoose" />
/// <reference types="bson" />
import { ModelItemType } from "./helpers";
import { MongooseModule, UnboxPromise } from "./helpers";
export declare function IncidentTakeoverModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
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

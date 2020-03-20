/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function IncidentEventModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    _id: import("bson").ObjectId;
    departmentId: string;
    IncidentNumber: string;
    modified_unix_date: number;
    message: string;
    location: {
        longitude: number;
        latitude: number;
    };
    type: string;
    user: {
        username: string;
        email: string;
        radioName: string;
        userId: string;
    };
    serverTime: number;
    userTime: number;
    uuid: string;
    opts: any;
}, {}> & {
    __methods?: unknown;
}>;
export interface IncidentEvent extends ItemTypeFromTypeSchemaFunction<typeof IncidentEventModule> {
}
export interface IncidentEventModel extends ModelTypeFromTypeSchemaFunction<IncidentEvent> {
}
declare const _default: ReplaceModelReturnType<typeof IncidentEventModule, IncidentEventModel>;
export default _default;
//# sourceMappingURL=incident-event.d.ts.map
/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function IncidentEventModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any> & Record<string, unknown> & {
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
    user: import("../helpers").MongooseInterface<{
        username: {
            type: StringConstructor;
            default: string;
        };
        email: {
            type: StringConstructor;
            default: string;
        };
        radioName: {
            type: StringConstructor;
            default: string;
        };
        userId: {
            type: StringConstructor;
            default: string;
        };
    }>;
    serverTime: number;
    userTime: number;
    uuid: string;
    opts: any;
    archived: boolean;
}> & {
    __methods?: unknown;
}>;
export interface IncidentEvent extends ItemTypeFromTypeSchemaFunction<typeof IncidentEventModule> {
}
export interface IncidentEventModel extends ModelTypeFromTypeSchemaFunction<IncidentEvent> {
}
declare const _default: ReplaceModelReturnType<typeof IncidentEventModule, IncidentEventModel>;
export default _default;
//# sourceMappingURL=incident-event.d.ts.map
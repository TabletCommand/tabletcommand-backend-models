/// <reference types="mongoose" />
import { currentDate, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType, retrieveCurrentUnixTime } from "../helpers";
export declare function IncidentEventModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    departmentId: string;
    IncidentNumber: string;
    modified_unix_date: number;
    modified: string;
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
}, {}> & {
    __methods?: unknown;
}>;
export declare function IncidentEventSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../helpers").MongooseInterface<{
        _id: {
            type: import("mongoose").Types.ObjectIdConstructor;
            auto: boolean;
        };
        departmentId: {
            type: StringConstructor;
            default: string;
            required: boolean;
            index: true;
        };
        IncidentNumber: {
            type: StringConstructor;
            default: string;
            required: boolean;
            index: true;
        };
        modified_unix_date: {
            type: NumberConstructor;
            default: typeof retrieveCurrentUnixTime;
        };
        modified: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        message: {
            type: StringConstructor;
            default: string;
        };
        location: {
            longitude: {
                type: NumberConstructor;
                default: number;
            };
            latitude: {
                type: NumberConstructor;
                default: number;
            };
        };
        type: {
            type: StringConstructor;
            default: string;
        };
        user: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
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
                _methods: unknown;
            };
            default: {};
        };
        serverTime: {
            type: NumberConstructor;
            default: typeof retrieveCurrentUnixTime;
            min: number;
        };
        userTime: {
            type: NumberConstructor;
            required: boolean;
            default: number;
            min: number;
        };
        uuid: {
            type: StringConstructor;
            require: boolean;
        };
        opts: {
            type: ObjectConstructor;
            default: {};
        };
        archived: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>;
    _methods: unknown;
};
export interface IncidentEvent extends ItemTypeFromTypeSchemaFunction<typeof IncidentEventModule> {
}
export interface IncidentEventModel extends ModelTypeFromTypeSchemaFunction<IncidentEvent> {
}
declare const _default: ReplaceModelReturnType<typeof IncidentEventModule, IncidentEventModel>;
export default _default;
//# sourceMappingURL=incident-event.d.ts.map
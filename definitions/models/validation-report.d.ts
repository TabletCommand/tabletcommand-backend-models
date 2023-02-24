/// <reference types="mongoose" />
import { currentDate, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function ValidationReportSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../helpers").MongooseInterface<{
        _id: {
            type: import("mongoose").Types.ObjectIdConstructor;
            auto: boolean;
        };
        departmentId: {
            type: import("mongoose").Types.ObjectIdConstructor;
            ref: string;
            required: boolean;
            unique: boolean;
        };
        location: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    message: {
                        type: StringConstructor;
                        default: string;
                    };
                    firstSeenAt: {
                        type: DateConstructor;
                        default: typeof currentDate;
                    };
                    lastSeenAt: {
                        type: DateConstructor;
                        default: typeof currentDate;
                    };
                    clearedAt: {
                        type: DateConstructor;
                        default: undefined;
                    };
                    payload: {
                        type: ObjectConstructor;
                        default: {};
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        statusMap: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    message: {
                        type: StringConstructor;
                        default: string;
                    };
                    firstSeenAt: {
                        type: DateConstructor;
                        default: typeof currentDate;
                    };
                    lastSeenAt: {
                        type: DateConstructor;
                        default: typeof currentDate;
                    };
                    clearedAt: {
                        type: DateConstructor;
                        default: undefined;
                    };
                    payload: {
                        type: ObjectConstructor;
                        default: {};
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        status: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    message: {
                        type: StringConstructor;
                        default: string;
                    };
                    firstSeenAt: {
                        type: DateConstructor;
                        default: typeof currentDate;
                    };
                    lastSeenAt: {
                        type: DateConstructor;
                        default: typeof currentDate;
                    };
                    clearedAt: {
                        type: DateConstructor;
                        default: undefined;
                    };
                    payload: {
                        type: ObjectConstructor;
                        default: {};
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        vehicleStatus: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    message: {
                        type: StringConstructor;
                        default: string;
                    };
                    firstSeenAt: {
                        type: DateConstructor;
                        default: typeof currentDate;
                    };
                    lastSeenAt: {
                        type: DateConstructor;
                        default: typeof currentDate;
                    };
                    clearedAt: {
                        type: DateConstructor;
                        default: undefined;
                    };
                    payload: {
                        type: ObjectConstructor;
                        default: {};
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        vehicle: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    message: {
                        type: StringConstructor;
                        default: string;
                    };
                    firstSeenAt: {
                        type: DateConstructor;
                        default: typeof currentDate;
                    };
                    lastSeenAt: {
                        type: DateConstructor;
                        default: typeof currentDate;
                    };
                    clearedAt: {
                        type: DateConstructor;
                        default: undefined;
                    };
                    payload: {
                        type: ObjectConstructor;
                        default: {};
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        incident: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    message: {
                        type: StringConstructor;
                        default: string;
                    };
                    firstSeenAt: {
                        type: DateConstructor;
                        default: typeof currentDate;
                    };
                    lastSeenAt: {
                        type: DateConstructor;
                        default: typeof currentDate;
                    };
                    clearedAt: {
                        type: DateConstructor;
                        default: undefined;
                    };
                    payload: {
                        type: ObjectConstructor;
                        default: {};
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        personnel: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    message: {
                        type: StringConstructor;
                        default: string;
                    };
                    firstSeenAt: {
                        type: DateConstructor;
                        default: typeof currentDate;
                    };
                    lastSeenAt: {
                        type: DateConstructor;
                        default: typeof currentDate;
                    };
                    clearedAt: {
                        type: DateConstructor;
                        default: undefined;
                    };
                    payload: {
                        type: ObjectConstructor;
                        default: {};
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        modified: {
            type: DateConstructor;
            default: typeof currentDate;
        };
    }>;
    _methods: unknown;
};
export declare function ValidationReportModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("mongoose").Types.ObjectId;
    departmentId: import("mongoose").Types.ObjectId;
    location: import("../helpers").MongooseInterface<{
        message: {
            type: StringConstructor;
            default: string;
        };
        firstSeenAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        lastSeenAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        clearedAt: {
            type: DateConstructor;
            default: undefined;
        };
        payload: {
            type: ObjectConstructor;
            default: {};
        };
    }>[];
    statusMap: import("../helpers").MongooseInterface<{
        message: {
            type: StringConstructor;
            default: string;
        };
        firstSeenAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        lastSeenAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        clearedAt: {
            type: DateConstructor;
            default: undefined;
        };
        payload: {
            type: ObjectConstructor;
            default: {};
        };
    }>[];
    status: import("../helpers").MongooseInterface<{
        message: {
            type: StringConstructor;
            default: string;
        };
        firstSeenAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        lastSeenAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        clearedAt: {
            type: DateConstructor;
            default: undefined;
        };
        payload: {
            type: ObjectConstructor;
            default: {};
        };
    }>[];
    vehicleStatus: import("../helpers").MongooseInterface<{
        message: {
            type: StringConstructor;
            default: string;
        };
        firstSeenAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        lastSeenAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        clearedAt: {
            type: DateConstructor;
            default: undefined;
        };
        payload: {
            type: ObjectConstructor;
            default: {};
        };
    }>[];
    vehicle: import("../helpers").MongooseInterface<{
        message: {
            type: StringConstructor;
            default: string;
        };
        firstSeenAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        lastSeenAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        clearedAt: {
            type: DateConstructor;
            default: undefined;
        };
        payload: {
            type: ObjectConstructor;
            default: {};
        };
    }>[];
    incident: import("../helpers").MongooseInterface<{
        message: {
            type: StringConstructor;
            default: string;
        };
        firstSeenAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        lastSeenAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        clearedAt: {
            type: DateConstructor;
            default: undefined;
        };
        payload: {
            type: ObjectConstructor;
            default: {};
        };
    }>[];
    personnel: import("../helpers").MongooseInterface<{
        message: {
            type: StringConstructor;
            default: string;
        };
        firstSeenAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        lastSeenAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        clearedAt: {
            type: DateConstructor;
            default: undefined;
        };
        payload: {
            type: ObjectConstructor;
            default: {};
        };
    }>[];
    modified: string;
}, {}> & {
    __methods?: unknown;
}>;
export interface ValidationReport extends ItemTypeFromTypeSchemaFunction<typeof ValidationReportModule> {
}
export interface ValidationReportModel extends ModelTypeFromTypeSchemaFunction<ValidationReport> {
}
declare const _default: ReplaceModelReturnType<typeof ValidationReportModule, ValidationReportModel>;
export default _default;
//# sourceMappingURL=validation-report.d.ts.map
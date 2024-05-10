/// <reference types="mongoose" />
import { MongooseModule, currentDate } from "../../helpers";
export declare function CADPersonSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../../helpers").MongooseInterface<{
        PersonnelID: {
            type: StringConstructor;
        };
        PersonnelName: {
            type: StringConstructor;
        };
        PersonnelRank: {
            type: StringConstructor;
            default: string;
        };
        PersonnelWorkCode: {
            type: StringConstructor;
            default: string;
        };
        PersonnelNote: {
            type: StringConstructor;
            default: string;
        };
    }>;
    _methods: unknown;
};
export declare function RadioChannelSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
            default: string;
        };
        channel: {
            type: StringConstructor;
            default: string;
        };
        url: {
            type: StringConstructor;
            default: string;
        };
        channelDescription: {
            type: StringConstructor;
            default: string;
        };
    }>;
    _methods: unknown;
};
export declare function RecordSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
            default: string;
        };
        value: {
            type: StringConstructor;
            default: string;
        };
    }>;
    _methods: unknown;
};
export declare function ReportNumberSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
            default: string;
        };
        number: {
            type: StringConstructor;
            default: string;
        };
    }>;
    _methods: unknown;
};
export declare function ShareReasonSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
            default: string;
        };
        date: {
            type: DateConstructor;
            default: typeof currentDate;
        };
    }>;
    _methods: unknown;
};
export declare function SharedToSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../../helpers").MongooseInterface<{
        departmentId: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        startAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        expireAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        reasons: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../../helpers").MongooseInterface<{
                    name: {
                        type: StringConstructor;
                        default: string;
                    };
                    date: {
                        type: DateConstructor;
                        default: typeof currentDate;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
    }>;
    _methods: unknown;
};
export declare function SharedSourceSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
            default: string;
        };
        isExternal: {
            type: BooleanConstructor;
            default: boolean;
        };
        startAt: {
            type: DateConstructor;
        };
        expireAt: {
            type: DateConstructor;
        };
        reasons: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../../helpers").MongooseInterface<{
                    name: {
                        type: StringConstructor;
                        default: string;
                    };
                    date: {
                        type: DateConstructor;
                        default: typeof currentDate;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
    }>;
    _methods: unknown;
};
//# sourceMappingURL=shared-incident.d.ts.map
/// <reference types="mongoose" />
import * as uuid from "uuid";
import { MongooseModule, retrieveCurrentUnixTime, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function AgencySchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../helpers").MongooseInterface<{
        _id: {
            type: import("mongoose").Types.ObjectIdConstructor;
            auto: boolean;
        };
        code: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        domain: {
            type: StringConstructor;
            default: string;
        };
        personnelApiKey: {
            type: StringConstructor;
            default: string;
            select: boolean;
        };
        agencyApiKey: {
            type: StringConstructor;
            default: string;
            select: boolean;
        };
        uuid: {
            type: StringConstructor;
            default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
        };
        modified_unix_date: {
            type: NumberConstructor;
            default: typeof retrieveCurrentUnixTime;
        };
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        departmentId: {
            type: import("mongoose").Types.ObjectIdConstructor;
            ref: string;
            required: boolean;
        };
        administrators: {
            type: import("mongoose").Types.ObjectIdConstructor[];
            ref: string;
            default: never[];
        };
        personnelIntegration: {
            type: BooleanConstructor;
            default: boolean;
        };
        personnelMonitorHours: {
            type: NumberConstructor;
            default: number;
        };
        crossStaffing: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    radioName: {
                        type: StringConstructor;
                        default: string;
                    };
                    crossStaffedUnits: {
                        type: StringConstructor[];
                        default: never[];
                    };
                    alwaysCrossStaff: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        licensing: {
            type: ObjectConstructor;
            default: {
                tcPro: number;
                tcStatus: number;
                tcMobile: number;
                tcWeb: number;
                fireMapperPro: number;
                locationToCAD: number;
            };
        };
    }>;
    _methods: unknown;
};
export declare function AgencyModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectID;
    code: string;
    name: string;
    domain: string;
    personnelApiKey: string;
    agencyApiKey: string;
    uuid: string;
    modified_unix_date: number;
    active: boolean;
    departmentId: import("bson").ObjectID;
    administrators: {
        type: never;
        ref: never;
        default: unknown[];
    };
    personnelIntegration: boolean;
    personnelMonitorHours: number;
    crossStaffing: import("../helpers").MongooseInterface<{
        radioName: {
            type: StringConstructor;
            default: string;
        };
        crossStaffedUnits: {
            type: StringConstructor[];
            default: never[];
        };
        alwaysCrossStaff: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>[];
    licensing: any;
}, {}> & {
    __methods?: unknown;
}>;
export interface Agency extends ItemTypeFromTypeSchemaFunction<typeof AgencyModule> {
}
export interface AgencyModel extends ModelTypeFromTypeSchemaFunction<Agency> {
}
declare const _default: ReplaceModelReturnType<typeof AgencyModule, AgencyModel>;
export default _default;
//# sourceMappingURL=agency.d.ts.map
/// <reference types="mongoose" />
import * as uuid from "uuid";
import { MongooseModule, currentDate, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType, retrieveCurrentUnixTime } from "../helpers";
export declare function ChecklistSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../helpers").MongooseInterface<{
        _id: {
            type: import("mongoose").Types.ObjectIdConstructor;
            auto: boolean;
        };
        position: {
            type: NumberConstructor;
            default: number;
        };
        userId: {
            type: StringConstructor;
            default: string;
        };
        uuid: {
            type: StringConstructor;
            default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
        };
        isMandatory: {
            type: BooleanConstructor;
            default: boolean;
        };
        modified_date: {
            type: StringConstructor;
        };
        modified_unix_date: {
            type: NumberConstructor;
            default: typeof retrieveCurrentUnixTime;
        };
        modified: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        departmentId: {
            type: StringConstructor;
            required: boolean;
            index: true;
        };
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        name: {
            type: StringConstructor;
            required: boolean;
        };
        agencyId: {
            type: import("mongoose").Types.ObjectIdConstructor;
            ref: string;
            default: null;
        };
        items: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    _id: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        auto: boolean;
                    };
                    position: {
                        type: NumberConstructor;
                        default: number;
                    };
                    userId: StringConstructor;
                    uuid: {
                        type: StringConstructor;
                        default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
                    };
                    checklist_uuid: {
                        type: StringConstructor;
                    };
                    api_checklist_id: {
                        type: StringConstructor;
                    };
                    isMandatory: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    modified_date: {
                        type: StringConstructor;
                    };
                    modified_unix_date: {
                        type: NumberConstructor;
                        default: typeof retrieveCurrentUnixTime;
                    };
                    departmentId: {
                        type: StringConstructor;
                        required: boolean;
                        index: true;
                    };
                    active: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    name: {
                        type: StringConstructor;
                        required: boolean;
                    };
                    agencyId: {
                        type: typeof import("mongoose").Schema.Types.ObjectId;
                        ref: string;
                        default: null;
                    };
                    description: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
    }>;
    _methods: unknown;
};
export declare function ChecklistModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("mongoose").Types.ObjectId;
    position: number;
    userId: string;
    uuid: string;
    isMandatory: boolean;
    modified_date: string;
    modified_unix_date: number;
    modified: string;
    departmentId: string;
    active: boolean;
    name: string;
    agencyId: import("mongoose").Types.ObjectId;
    items: import("../helpers").MongooseInterface<{
        _id: {
            type: import("mongoose").Types.ObjectIdConstructor;
            auto: boolean;
        };
        position: {
            type: NumberConstructor;
            default: number;
        };
        userId: StringConstructor;
        uuid: {
            type: StringConstructor;
            default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
        };
        checklist_uuid: {
            type: StringConstructor;
        };
        api_checklist_id: {
            type: StringConstructor;
        };
        isMandatory: {
            type: BooleanConstructor;
            default: boolean;
        };
        modified_date: {
            type: StringConstructor;
        };
        modified_unix_date: {
            type: NumberConstructor;
            default: typeof retrieveCurrentUnixTime;
        };
        departmentId: {
            type: StringConstructor;
            required: boolean;
            index: true;
        };
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        name: {
            type: StringConstructor;
            required: boolean;
        };
        agencyId: {
            type: typeof import("mongoose").Schema.Types.ObjectId;
            ref: string;
            default: null;
        };
        description: {
            type: StringConstructor;
            default: string;
        };
    }>[];
}, {}> & {
    __methods?: unknown;
}>;
export interface Checklist extends ItemTypeFromTypeSchemaFunction<typeof ChecklistModule> {
}
export interface ChecklistModel extends ModelTypeFromTypeSchemaFunction<Checklist> {
}
declare const _default: ReplaceModelReturnType<typeof ChecklistModule, ChecklistModel>;
export default _default;
//# sourceMappingURL=checklist.d.ts.map
/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function CADStatusModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    uuid: string;
    departmentId: string;
    modifiedDate: number;
    modified: string;
    statusId: number;
    code: string;
    codeDisplay: string;
    status: string;
    name: string;
    normalized: string;
    selfAssignable: boolean;
    roaming: boolean;
    options: import("../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
            default: string;
        };
        position: {
            type: NumberConstructor;
            default: number;
        };
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        cadKey: {
            type: StringConstructor;
            default: string;
        };
        cadValues: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    name: {
                        type: StringConstructor;
                        default: string;
                    };
                    type: {
                        type: StringConstructor;
                        default: string;
                    };
                    visible: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    value: {
                        type: StringConstructor;
                        default: string;
                    };
                    favorite: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    position: {
                        type: NumberConstructor;
                        default: number;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
    }>[];
    color: import("../helpers").MongooseInterface<{
        background: {
            type: StringConstructor;
            default: string;
        };
        text: {
            type: StringConstructor;
            default: string;
        };
    }>;
    backupDate: string;
}, {}> & {
    __methods?: unknown;
}>;
export interface CADStatus extends ItemTypeFromTypeSchemaFunction<typeof CADStatusModule> {
}
export interface CADStatusModel extends ModelTypeFromTypeSchemaFunction<CADStatus> {
}
declare const _default: ReplaceModelReturnType<typeof CADStatusModule, CADStatusModel>;
export default _default;
//# sourceMappingURL=cad-status.d.ts.map
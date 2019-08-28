/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function CADStatusModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    uuid: string;
    departmentId: string;
    modifiedDate: number;
    statusId: number;
    code: string;
    status: string;
    name: string;
    normalized: string;
    selfAssignable: boolean;
    roaming: boolean;
    options: {
        name: string;
        position: number;
        visible: boolean;
        cadKey: string;
        cadValues: {
            name: string;
            type: string;
            visible: boolean;
            value: string;
            favorite: boolean;
            position: number;
        }[];
    }[];
    color: {
        background: string;
        text: string;
    };
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
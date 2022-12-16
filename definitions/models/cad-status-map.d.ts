/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function CADStatusMapModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    departmentId: string;
    modifiedDate: number;
    modified: string;
    fromStatusId: number;
    toStatusIds: import("../helpers").MongooseInterface<{
        statusId: {
            type: NumberConstructor;
            default: number;
            required: boolean;
            min: number;
        };
        userEnabled: {
            type: BooleanConstructor;
        };
    }>[];
    backupDate: string;
}, {}> & {
    __methods?: unknown;
}>;
export interface CADStatusMap extends ItemTypeFromTypeSchemaFunction<typeof CADStatusMapModule> {
}
export interface CADStatusMapModel extends ModelTypeFromTypeSchemaFunction<CADStatusMap> {
}
declare const _default: ReplaceModelReturnType<typeof CADStatusMapModule, CADStatusMapModel>;
export default _default;
//# sourceMappingURL=cad-status-map.d.ts.map
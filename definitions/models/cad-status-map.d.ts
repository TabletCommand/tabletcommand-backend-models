/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function CADStatusMapModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any, {}> & Record<string, unknown> & {
    departmentId: string;
    modifiedDate: number;
    fromStatusId: number;
    toStatusIds: import("../helpers").MongooseInterface<{
        statusId: {
            type: NumberConstructor;
            default: number;
            required: true;
            min: number;
        };
        userEnabled: {
            type: BooleanConstructor;
        };
    }>[];
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
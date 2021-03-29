/// <reference types="mongoose" />
<<<<<<< HEAD
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function CADStatusMapModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
=======
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
<<<<<<< HEAD
export declare function CADStatusMapModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any> & Record<string, unknown> & {
>>>>>>> 3af52d1 (Upgraded mongoose uuid and ts packages.)
=======
export declare function CADStatusMapModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any, {}> & Record<string, unknown> & {
>>>>>>> a8e26f7 (Upgraded TS and monggose.)
    departmentId: string;
    modifiedDate: number;
    modified: string;
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
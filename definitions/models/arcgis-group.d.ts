/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function ArcGISGroupModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    groupId: string;
    title: string;
    protected: boolean;
    owner: string;
    access: string;
    users: import("../helpers").MongooseInterface<{
        username: {
            type: StringConstructor;
            default: string;
        };
        fullName: {
            type: StringConstructor;
            default: string;
        };
        memberType: {
            type: StringConstructor;
            default: string;
        };
        orgId: {
            type: StringConstructor;
            default: string;
        };
    }>[];
    outsiders: import("../helpers").MongooseInterface<{
        username: {
            type: StringConstructor;
            default: string;
        };
        fullName: {
            type: StringConstructor;
            default: string;
        };
        memberType: {
            type: StringConstructor;
            default: string;
        };
        orgId: {
            type: StringConstructor;
            default: string;
        };
    }>[];
    externalOrgIds: string[];
    departmentIds: string[];
    modified: string;
}, {}> & {
    __methods?: unknown;
}>;
export interface ArcGISGroup extends ItemTypeFromTypeSchemaFunction<typeof ArcGISGroupModule> {
}
export interface ArcGISGroupModel extends ModelTypeFromTypeSchemaFunction<ArcGISGroup> {
}
declare const _default: ReplaceModelReturnType<typeof ArcGISGroupModule, ArcGISGroupModel>;
export default _default;
//# sourceMappingURL=arcgis-group.d.ts.map
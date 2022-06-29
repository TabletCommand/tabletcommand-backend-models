/// <reference types="mongoose" />
import { currentDate, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function ArcGISGroupModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    groupId: string;
    title: string;
    protected: boolean;
    owner: string;
    access: string;
    membershipAccess: string;
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
    invited: import("../helpers").MongooseInterface<{
        username: {
            type: StringConstructor;
            default: string;
        };
        atDate: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        invitedBy: {
            type: StringConstructor;
            default: string;
        };
    }>[];
    linkedDepartments: import("../helpers").MongooseInterface<{
        department: {
            type: StringConstructor;
            default: string;
        };
        departmentId: {
            type: StringConstructor;
            default: string;
        };
        authUsername: {
            type: StringConstructor;
            default: string;
        };
        authError: {
            type: StringConstructor;
            default: string;
        };
        users: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    username: {
                        type: StringConstructor;
                        default: string;
                    };
                    email: {
                        type: StringConstructor;
                        default: string;
                    };
                    userId: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
    }>[];
    modified: string;
    createdBy: string;
    runAt: string;
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
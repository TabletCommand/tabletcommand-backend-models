/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from "mongoose";
import { MongooseModule } from "../helpers";
interface ArcGISGroupUserType {
    username: string;
    fullName: string;
    memberType: string;
    orgId: string;
}
interface ArcGISUserInvitationType {
    username: string;
    atDate: Date;
    invitedBy: string;
}
interface ArcGISDepartmentUserType {
    username: string;
    email: string;
    userId: string;
}
interface ArcGISDepartmentType {
    department: string;
    departmentId: string;
    authUsername: string;
    authError: string;
    users: ArcGISDepartmentUserType[];
}
export interface ArcGISGroup {
    groupId: string;
    title: string;
    protected: boolean;
    owner: string;
    access: string;
    membershipAccess: string;
    users: ArcGISGroupUserType[];
    outsiders: ArcGISGroupUserType[];
    removableUsers: ArcGISGroupUserType[];
    externalOrgIds: string[];
    invited: ArcGISUserInvitationType[];
    linkedDepartments: ArcGISDepartmentType[];
    modified: Date;
    createdBy: string;
    runAt: Date | string;
}
export default function ArcGISGroupModule(mongoose: MongooseModule): Promise<Model<ArcGISGroup, {}, {}, {}, import("mongoose").Document<unknown, {}, ArcGISGroup> & ArcGISGroup & {
    _id: import("mongoose").Types.ObjectId;
}, any>>;
export interface ArcGISGroupModel extends Model<ArcGISGroup> {
}
export {};
//# sourceMappingURL=arcgis-group.d.ts.map
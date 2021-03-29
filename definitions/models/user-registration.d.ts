/// <reference types="mongoose" />
<<<<<<< HEAD
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function UserRegistrationModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
=======
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function UserRegistrationModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any> & Record<string, unknown> & {
>>>>>>> 3af52d1 (Upgraded mongoose uuid and ts packages.)
    email: string;
    name: string;
    firstName: string;
    lastName: string;
    department: string;
    title: string;
    status: string;
    modifiedDate: number;
    modified: string;
    presentedAt: number;
    managedIncidentsCount: number;
    checklistsCount: number;
    stage: string;
    firstIncidentUnixTime: number;
    lastIncidentLocation: string;
    lastIncidentUnixTime: number;
}> & {
    __methods?: unknown;
}>;
export interface UserRegistration extends ItemTypeFromTypeSchemaFunction<typeof UserRegistrationModule> {
}
export interface UserRegistrationModel extends ModelTypeFromTypeSchemaFunction<UserRegistration> {
}
declare const _default: ReplaceModelReturnType<typeof UserRegistrationModule, UserRegistrationModel>;
export default _default;
//# sourceMappingURL=user-registration.d.ts.map
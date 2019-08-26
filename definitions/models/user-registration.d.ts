/// <reference types="mongoose" />
import { ModelItemType, MongooseModule, UnboxPromise } from "../helpers";
export declare function UserRegistrationModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    email: string;
    name: string;
    firstName: string;
    lastName: string;
    department: string;
    title: string;
    status: string;
    modifiedDate: number;
    presentedAt: number;
    managedIncidentsCount: number;
    checklistsCount: number;
    stage: string;
    firstIncidentUnixTime: number;
    lastIncidentLocation: string;
    lastIncidentUnixTime: number;
}, {}>>;
export default UserRegistrationModule;
export declare type UserRegistrationModel = UnboxPromise<ReturnType<typeof UserRegistrationModule>>;
export declare type UserRegistration = ModelItemType<UserRegistrationModel>;
//# sourceMappingURL=user-registration.d.ts.map
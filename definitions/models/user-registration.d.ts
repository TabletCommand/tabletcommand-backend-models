import { MongooseModule, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
import { Document, Model } from "mongoose";
export declare function UserRegistrationModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    email: {
        type: StringConstructor;
        default: string;
        required: true;
        index: true;
    };
    name: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    firstName: {
        type: StringConstructor;
        default: string;
    };
    lastName: {
        type: StringConstructor;
        default: string;
    };
    department: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    status: {
        type: StringConstructor;
        default: string;
    };
    modifiedDate: {
        type: NumberConstructor;
        required: true;
        default: number;
        min: number;
    };
    presentedAt: {
        type: NumberConstructor;
        default: number;
    };
    managedIncidentsCount: {
        type: NumberConstructor;
        default: number;
    };
    checklistsCount: {
        type: NumberConstructor;
        default: number;
    };
    stage: {
        type: StringConstructor;
        default: string;
    };
    firstIncidentUnixTime: {
        type: NumberConstructor;
        default: number;
    };
    lastIncidentLocation: {
        type: StringConstructor;
        default: string;
    };
    lastIncidentUnixTime: {
        type: NumberConstructor;
        default: number;
    };
}>, unknown>>;
export interface UserRegistration extends Document, ItemTypeFromTypeSchemaFunction<typeof UserRegistrationModule> {
}
export interface UserRegistrationModel extends Model<UserRegistration> {
}
declare const _default: ReplaceModelReturnType<typeof UserRegistrationModule, UserRegistrationModel>;
export default _default;

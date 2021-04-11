import { ItemTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType, retrieveCurrentUnixTime } from "../helpers";
import { Document, Model } from "mongoose";
export declare function IncidentEventModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: import("mongoose").Types.ObjectIdConstructor;
        auto: true;
    };
    departmentId: {
        type: StringConstructor;
        default: string;
        required: true;
        index: true;
    };
    IncidentNumber: {
        type: StringConstructor;
        default: string;
        required: true;
        index: true;
    };
    modified_unix_date: {
        type: NumberConstructor;
        default: typeof retrieveCurrentUnixTime;
    };
    message: {
        type: StringConstructor;
        default: string;
    };
    location: {
        longitude: {
            type: NumberConstructor;
            default: number;
        };
        latitude: {
            type: NumberConstructor;
            default: number;
        };
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    user: {
        type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            username: {
                type: StringConstructor;
                default: string;
            };
            email: {
                type: StringConstructor;
                default: string;
            };
            radioName: {
                type: StringConstructor;
                default: string;
            };
            userId: {
                type: StringConstructor;
                default: string;
            };
        }>, unknown>;
        default: {};
    };
    serverTime: {
        type: NumberConstructor;
        default: typeof retrieveCurrentUnixTime;
        min: number;
    };
    userTime: {
        type: NumberConstructor;
        required: true;
        default: number;
        min: number;
    };
    uuid: {
        type: StringConstructor;
        require: boolean;
    };
    opts: {
        type: ObjectConstructor;
        default: {};
    };
    archived: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, unknown>>;
export interface IncidentEvent extends Document, ItemTypeFromTypeSchemaFunction<typeof IncidentEventModule> {
}
export interface IncidentEventModel extends Model<IncidentEvent> {
}
declare const _default: ReplaceModelReturnType<typeof IncidentEventModule, IncidentEventModel>;
export default _default;

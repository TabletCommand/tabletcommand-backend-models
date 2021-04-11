import { MongooseModule, retrieveCurrentUnixTime, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
import { Document, Model } from "mongoose";
export declare function ActionLogModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: import("mongoose").Types.ObjectIdConstructor;
        auto: true;
    };
    departmentId: {
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
    action: {
        type: StringConstructor;
        default: string;
    };
    object: {
        type: ObjectConstructor;
        default: {};
    };
    modified_unix_date: {
        type: NumberConstructor;
        default: typeof retrieveCurrentUnixTime;
    };
}>, unknown>>;
export interface ActionLog extends Document, ItemTypeFromTypeSchemaFunction<typeof ActionLogModule> {
}
export interface ActionLogModel extends Model<ActionLog> {
}
declare const _default: ReplaceModelReturnType<typeof ActionLogModule, ActionLogModel>;
export default _default;

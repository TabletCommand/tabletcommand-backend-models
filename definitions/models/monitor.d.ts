import { ItemTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType, retrieveCurrentUnixTime } from "../helpers";
import { Document, Model } from "mongoose";
export declare function MonitorModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
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
    agencyId: {
        type: StringConstructor;
        default: string;
    };
    notificationType: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    status: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    sentUnixDate: {
        type: NumberConstructor;
        default: typeof retrieveCurrentUnixTime;
    };
}>, unknown>>;
export interface Monitor extends Document, ItemTypeFromTypeSchemaFunction<typeof MonitorModule> {
}
export interface MonitorModel extends Model<Monitor> {
}
declare const _default: ReplaceModelReturnType<typeof MonitorModule, MonitorModel>;
export default _default;

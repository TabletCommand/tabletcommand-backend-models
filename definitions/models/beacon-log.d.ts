import { MongooseModule, retrieveCurrentUnixTime, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
import { Document, Model } from "mongoose";
export declare function BeaconLogModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: import("mongoose").Types.ObjectIdConstructor;
        auto: true;
    };
    departmentId: {
        type: StringConstructor;
        default: string;
        index: true;
    };
    userId: {
        type: StringConstructor;
        default: string;
    };
    object: {
        type: ObjectConstructor;
    };
    modified_unix_date: {
        type: NumberConstructor;
        default: typeof retrieveCurrentUnixTime;
    };
}>, unknown>>;
export interface BeaconLog extends Document, ItemTypeFromTypeSchemaFunction<typeof BeaconLogModule> {
}
export interface BeaconLogModel extends Model<BeaconLog> {
}
declare const _default: ReplaceModelReturnType<typeof BeaconLogModule, BeaconLogModel>;
export default _default;

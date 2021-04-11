import { MongooseModule, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
import { Document, Model } from "mongoose";
export declare function ChartUserModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: import("mongoose").Types.ObjectIdConstructor;
        auto: true;
    };
    date: {
        type: NumberConstructor;
        default: number;
    };
    departmentId: {
        type: StringConstructor;
        default: string;
        required: true;
        index: true;
    };
    count: {
        type: NumberConstructor;
        default: number;
    };
    items: {
        type: StringConstructor[];
        default: never[];
    };
}>, unknown>>;
export interface ChartUser extends Document, ItemTypeFromTypeSchemaFunction<typeof ChartUserModule> {
}
export interface ChartUserModel extends Model<ChartUser> {
}
declare const _default: ReplaceModelReturnType<typeof ChartUserModule, ChartUserModel>;
export default _default;

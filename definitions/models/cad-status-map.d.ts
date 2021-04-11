import { MongooseModule, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
import { Document, Model } from "mongoose";
export declare function CADStatusMapModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    departmentId: {
        type: StringConstructor;
        default: string;
        required: true;
        index: true;
    };
    modifiedDate: {
        type: NumberConstructor;
        default: number;
        min: number;
    };
    fromStatusId: {
        type: NumberConstructor;
        default: number;
        required: true;
        min: number;
    };
    toStatusIds: {
        type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            statusId: {
                type: NumberConstructor;
                default: number;
                required: true;
                min: number;
            };
            userEnabled: {
                type: BooleanConstructor;
            };
        }>, unknown>)[];
        required: true;
    };
}>, unknown>>;
export interface CADStatusMap extends Document, ItemTypeFromTypeSchemaFunction<typeof CADStatusMapModule> {
}
export interface CADStatusMapModel extends Model<CADStatusMap> {
}
declare const _default: ReplaceModelReturnType<typeof CADStatusMapModule, CADStatusMapModel>;
export default _default;

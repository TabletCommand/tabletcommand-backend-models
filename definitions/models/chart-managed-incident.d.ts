import { MongooseModule, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
import { Document, Model } from "mongoose";
export declare function ChartManagedIncidentModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
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
        type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            item: {
                type: StringConstructor;
                default: string;
            };
            date: {
                type: NumberConstructor;
                default: number;
            };
        }>, unknown>)[];
        default: never[];
    };
}>, unknown>>;
export interface ChartManagedIncident extends Document, ItemTypeFromTypeSchemaFunction<typeof ChartManagedIncidentModule> {
}
export interface ChartManagedIncidentModel extends Model<ChartManagedIncident> {
}
declare const _default: ReplaceModelReturnType<typeof ChartManagedIncidentModule, ChartManagedIncidentModel>;
export default _default;

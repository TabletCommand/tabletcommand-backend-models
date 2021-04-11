import { MongooseModule, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType, retrieveCurrentUnixTime } from "../helpers";
import { Document, Model } from "mongoose";
export declare function IncidentNotifiedModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
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
        required: true;
    };
    incidentTypes: {
        type: StringConstructor[];
        default: never[];
    };
    units: {
        type: StringConstructor[];
        default: never[];
    };
    date: {
        type: NumberConstructor;
        default: typeof retrieveCurrentUnixTime;
    };
}>, unknown>>;
export interface IncidentNotified extends Document, ItemTypeFromTypeSchemaFunction<typeof IncidentNotifiedModule> {
}
export interface IncidentNotifiedModel extends Model<IncidentNotified> {
}
declare const _default: ReplaceModelReturnType<typeof IncidentNotifiedModule, IncidentNotifiedModel>;
export default _default;

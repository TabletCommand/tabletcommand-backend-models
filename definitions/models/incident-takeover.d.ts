import * as uuid from "uuid";
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
import { Document, Model } from "mongoose";
export declare function IncidentTakeoverModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
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
    uuid: {
        type: StringConstructor;
        default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
    };
    incident_id: {
        type: StringConstructor;
        required: true;
    };
    incident_name: {
        type: StringConstructor;
        required: true;
    };
    incident_number: {
        type: StringConstructor;
        default: string;
    };
    old_owner: {
        type: StringConstructor;
        required: true;
    };
    new_owner: {
        type: StringConstructor;
        required: true;
    };
    owner: {
        type: StringConstructor;
        default: string;
    };
    status: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    request_time: {
        type: NumberConstructor;
        required: true;
        default: number;
        min: number;
    };
    last_response_time: {
        type: NumberConstructor;
        default: number;
    };
    response_time: {
        type: NumberConstructor;
        default: number;
    };
}>, unknown>>;
export interface IncidentTakeover extends Document, ItemTypeFromTypeSchemaFunction<typeof IncidentTakeoverModule> {
}
export interface IncidentTakeoverModel extends Model<IncidentTakeover> {
}
declare const _default: ReplaceModelReturnType<typeof IncidentTakeoverModule, IncidentTakeoverModel>;
export default _default;

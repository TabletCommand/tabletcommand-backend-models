import { MongooseModule, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType, currentDate } from "../helpers";
import { Document, Model } from "mongoose";
import * as uuid from "uuid";
export declare function CADIncidentStreamModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: import("mongoose").Types.ObjectIdConstructor;
        auto: true;
    };
    uuid: {
        type: StringConstructor;
        default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
    };
    tag: {
        type: StringConstructor;
        default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
    };
    departmentId: {
        type: StringConstructor;
        default: string;
        required: true;
        index: true;
    };
    incidentNumber: {
        type: StringConstructor;
        required: true;
    };
    createdAt: {
        type: DateConstructor;
        default: typeof currentDate;
    };
    payload: {
        type: ObjectConstructor;
        default: {};
    };
}>, unknown>>;
export interface CADIncidentStream extends Document, ItemTypeFromTypeSchemaFunction<typeof CADIncidentStreamModule> {
}
export interface CADIncidentStreamModel extends Model<CADIncidentStream> {
}
declare const _default: ReplaceModelReturnType<typeof CADIncidentStreamModule, CADIncidentStreamModel>;
export default _default;

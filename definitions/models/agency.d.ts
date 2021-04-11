import * as uuid from "uuid";
import { MongooseModule, retrieveCurrentUnixTime, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
import { Document, Model } from "mongoose";
export declare function AgencyModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: import("mongoose").Types.ObjectIdConstructor;
        auto: true;
    };
    code: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    domain: {
        type: StringConstructor;
        default: string;
    };
    personnelApiKey: {
        type: StringConstructor;
        default: string;
        select: false;
    };
    agencyApiKey: {
        type: StringConstructor;
        default: string;
        select: false;
    };
    uuid: {
        type: StringConstructor;
        default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
    };
    modified_unix_date: {
        type: NumberConstructor;
        default: typeof retrieveCurrentUnixTime;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    departmentId: {
        type: typeof import("mongoose").Schema.Types.ObjectId;
        ref: string;
        required: true;
    };
    administrators: {
        type: typeof import("mongoose").Schema.Types.ObjectId[];
        ref: string;
        default: never[];
    };
    personnelIntegration: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, unknown>>;
export interface Agency extends Document, ItemTypeFromTypeSchemaFunction<typeof AgencyModule> {
}
export interface AgencyModel extends Model<Agency> {
}
declare const _default: ReplaceModelReturnType<typeof AgencyModule, AgencyModel>;
export default _default;

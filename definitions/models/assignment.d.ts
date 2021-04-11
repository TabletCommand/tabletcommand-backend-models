import * as uuid from "uuid";
import { MongooseModule, retrieveCurrentUnixTime, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
import { Document, Model } from "mongoose";
export declare function AssignmentModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: import("mongoose").Types.ObjectIdConstructor;
        auto: true;
    };
    position: {
        type: NumberConstructor;
        default: number;
    };
    userId: StringConstructor;
    uuid: {
        type: StringConstructor;
        default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
    };
    isMandatory: {
        type: BooleanConstructor;
        default: boolean;
    };
    modified_date: {
        type: StringConstructor;
    };
    modified_unix_date: {
        type: NumberConstructor;
        default: typeof retrieveCurrentUnixTime;
    };
    departmentId: {
        type: StringConstructor;
        required: true;
        index: true;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
}>, unknown>>;
export interface Assignment extends Document, ItemTypeFromTypeSchemaFunction<typeof AssignmentModule> {
}
export interface AssignmentModel extends Model<Assignment> {
}
declare const _default: ReplaceModelReturnType<typeof AssignmentModule, AssignmentModel>;
export default _default;

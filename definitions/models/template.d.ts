import * as uuid from "uuid";
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType, retrieveCurrentUnixTime } from "../helpers";
import { Document, Model } from "mongoose";
export declare function TemplateModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
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
    checklist: {
        type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            name: {
                type: StringConstructor;
                default: string;
            };
            position: {
                type: NumberConstructor;
                default: number;
            };
            id: {
                type: StringConstructor;
                default: string;
            };
        }>, unknown>)[];
        default: never[];
    };
    group: {
        type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            name: {
                type: StringConstructor;
                default: string;
            };
            position: {
                type: NumberConstructor;
                default: number;
            };
        }>, unknown>)[];
        default: never[];
    };
    agencyId: {
        type: typeof import("mongoose").Schema.Types.ObjectId;
        ref: string;
        default: null;
    };
}>, unknown>>;
export interface Template extends Document, ItemTypeFromTypeSchemaFunction<typeof TemplateModule> {
}
export interface TemplateModel extends Model<Template> {
}
declare const _default: ReplaceModelReturnType<typeof TemplateModule, TemplateModel>;
export default _default;

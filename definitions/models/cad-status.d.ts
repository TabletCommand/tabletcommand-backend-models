import * as uuid from "uuid";
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
import { Document, Model } from "mongoose";
export declare function CADStatusModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    uuid: {
        type: StringConstructor;
        index: true;
        default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
    };
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
    statusId: {
        type: NumberConstructor;
        default: number;
        required: true;
        min: number;
    };
    code: {
        type: StringConstructor;
        default: string;
        required: true;
        minlength: number;
    };
    codeDisplay: {
        type: StringConstructor;
        default: string;
    };
    status: {
        type: StringConstructor;
        default: string;
        required: true;
        minlength: number;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    normalized: {
        type: StringConstructor;
        default: string;
    };
    selfAssignable: {
        type: BooleanConstructor;
        default: boolean;
    };
    roaming: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            name: {
                type: StringConstructor;
                default: string;
            };
            position: {
                type: NumberConstructor;
                default: number;
            };
            visible: {
                type: BooleanConstructor;
                default: boolean;
            };
            cadKey: {
                type: StringConstructor;
                default: string;
            };
            cadValues: {
                type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
                    name: {
                        type: StringConstructor;
                        default: string;
                    };
                    type: {
                        type: StringConstructor;
                        default: string;
                    };
                    visible: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    value: {
                        type: StringConstructor;
                        default: string;
                    };
                    favorite: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    position: {
                        type: NumberConstructor;
                        default: number;
                    };
                }>, unknown>)[];
                default: never[];
            };
        }>, unknown>)[];
        default: never[];
    };
    color: {
        type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            background: {
                type: StringConstructor;
                default: string;
            };
            text: {
                type: StringConstructor;
                default: string;
            };
        }>, unknown>;
        default: null;
    };
}>, unknown>>;
export interface CADStatus extends Document, ItemTypeFromTypeSchemaFunction<typeof CADStatusModule> {
}
export interface CADStatusModel extends Model<CADStatus> {
}
declare const _default: ReplaceModelReturnType<typeof CADStatusModule, CADStatusModel>;
export default _default;

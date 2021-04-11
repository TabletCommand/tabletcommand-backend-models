import * as uuid from "uuid";
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType, retrieveCurrentUnixTime } from "../helpers";
import { Document, Model } from "mongoose";
export declare function BattalionModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: import("mongoose").Types.ObjectIdConstructor;
        auto: true;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    active: {
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
    isMandatory: {
        type: BooleanConstructor;
        default: boolean;
    };
    userId: StringConstructor;
    uuid: {
        type: StringConstructor;
        default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
    };
    departmentId: {
        type: StringConstructor;
        required: true;
        index: true;
    };
    agencyId: {
        type: typeof import("mongoose").Schema.Types.ObjectId;
        ref: string;
        default: null;
    };
    position: {
        type: NumberConstructor;
        default: number;
    };
    units: {
        type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            _id: {
                type: import("mongoose").Types.ObjectIdConstructor;
                auto: true;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            friendly_id: {
                type: StringConstructor;
                default: string;
            };
            local_id: {
                type: NumberConstructor;
            };
            personnel: {
                type: NumberConstructor;
                default: number;
            };
            position: {
                type: NumberConstructor;
                default: number;
            };
            active: {
                type: BooleanConstructor;
                default: boolean;
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
            uuid: {
                type: StringConstructor;
                default: () => string;
            };
            departmentId: {
                type: StringConstructor;
            };
            userId: {
                type: StringConstructor;
            };
            api_battalion_id: {
                type: StringConstructor;
            };
            battalion_uuid: {
                type: StringConstructor;
            };
            battalion_name: {
                type: StringConstructor;
            };
            unit_type_id: {
                type: NumberConstructor;
            };
        }>, unknown>)[];
        default: never[];
    };
}>, unknown>>;
export interface Battalion extends Document, ItemTypeFromTypeSchemaFunction<typeof BattalionModule> {
}
export interface BattalionModel extends Model<Battalion> {
}
declare const _default: ReplaceModelReturnType<typeof BattalionModule, BattalionModel>;
export default _default;

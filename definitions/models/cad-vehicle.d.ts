import { MongooseModule, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
import * as uuid from "uuid";
import { Document, Model } from "mongoose";
export declare function CADVehicleModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
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
    vehicleId: {
        type: StringConstructor;
        default: string;
        required: true;
        minlength: number;
    };
    radioName: {
        type: StringConstructor;
        default: string;
        required: true;
        minlength: number;
    };
    station: {
        type: import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
            code: {
                type: StringConstructor;
                default: string;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
        }>, unknown>;
        default: null;
    };
    mapHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    capability: {
        type: StringConstructor;
        default: string;
    };
}>, unknown>>;
export interface CADVehicle extends Document, ItemTypeFromTypeSchemaFunction<typeof CADVehicleModule> {
}
export interface CADVehicleModel extends Model<CADVehicle> {
}
declare const _default: ReplaceModelReturnType<typeof CADVehicleModule, CADVehicleModel>;
export default _default;

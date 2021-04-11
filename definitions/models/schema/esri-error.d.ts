/// <reference types="mongoose" />
import { MongooseModule } from "../../helpers";
export default function EsriErrorModule(mongoose: MongooseModule): import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & import("../../helpers").PrivateSchemaInfo<import("../../helpers").MongooseInterface<{
    code: {
        type: NumberConstructor;
        default: number;
    };
    error: {
        type: StringConstructor;
        default: string;
    };
    error_description: {
        type: StringConstructor;
        default: string;
    };
    message: {
        type: StringConstructor;
        default: string;
    };
}>, unknown>;

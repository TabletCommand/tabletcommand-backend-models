/// <reference types="mongoose" />
import { MongooseModule } from "../../helpers";
export default function GeoJSONPointModule(mongoose: MongooseModule): import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & import("../../helpers").PrivateSchemaInfo<import("../../helpers").MongooseInterface<{
    type: {
        type: StringConstructor;
        required: true;
        enum: string[];
        default: string;
    };
    coordinates: {
        type: NumberConstructor[];
        required: true;
        default: never[];
    };
}>, unknown>;

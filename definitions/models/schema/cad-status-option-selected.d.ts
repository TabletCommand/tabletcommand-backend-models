/// <reference types="mongoose" />
import { MongooseModule } from "../../helpers";
export default function CADStatusOptionSelected(mongoose: MongooseModule): import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & import("../../helpers").PrivateSchemaInfo<import("../../helpers").MongooseInterface<{
    name: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    value: {
        type: StringConstructor;
        default: string;
    };
    key: {
        type: StringConstructor;
        default: string;
    };
}>, unknown>;

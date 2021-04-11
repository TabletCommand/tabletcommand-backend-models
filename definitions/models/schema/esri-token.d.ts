/// <reference types="mongoose" />
import { MongooseModule } from "../../helpers";
export default function EsriTokenModule(mongoose: MongooseModule): import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & import("../../helpers").PrivateSchemaInfo<import("../../helpers").MongooseInterface<{
    access_token: {
        type: StringConstructor;
        default: string;
    };
    refresh_token: {
        type: StringConstructor;
        default: string;
    };
    username: {
        type: StringConstructor;
        default: string;
    };
    ssl: {
        type: BooleanConstructor;
        default: boolean;
    };
    expires_in: {
        type: NumberConstructor;
        default: number;
    };
}>, unknown>;

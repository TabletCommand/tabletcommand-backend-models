/// <reference types="mongoose" />
import { MongooseModule } from "../../helpers";
export default function FireMapperAuthModule(mongoose: MongooseModule): import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & import("../../helpers").PrivateSchemaInfo<import("../../helpers").MongooseInterface<{
    username: {
        type: StringConstructor;
        default: string;
    };
    encrypted: {
        type: import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & import("../../helpers").PrivateSchemaInfo<import("../../helpers").MongooseInterface<{
            iv: {
                type: StringConstructor;
                default: string;
            };
            encryptedData: {
                type: StringConstructor;
                default: string;
            };
        }>, unknown>;
        default: null;
    };
    encryptedAccessCode: {
        type: import("mongoose").Schema<import("mongoose").Document<any, {}>, import("mongoose").Model<any, any>, undefined> & import("../../helpers").PrivateSchemaInfo<import("../../helpers").MongooseInterface<{
            iv: {
                type: StringConstructor;
                default: string;
            };
            encryptedData: {
                type: StringConstructor;
                default: string;
            };
        }>, unknown>;
        default: null;
    };
}>, unknown>;

import { ItemTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
import { Document, Model } from "mongoose";
export declare function SMTPUnhandledModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: import("mongoose").Types.ObjectIdConstructor;
        auto: true;
    };
    email: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    message: {
        type: StringConstructor;
        default: string;
        required: true;
    };
}>, unknown>>;
export interface SMTPUnhandled extends Document, ItemTypeFromTypeSchemaFunction<typeof SMTPUnhandledModule> {
}
export interface SMTPUnhandledModel extends Model<SMTPUnhandled> {
}
declare const _default: ReplaceModelReturnType<typeof SMTPUnhandledModule, SMTPUnhandledModel>;
export default _default;

/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { MongooseModule } from "../helpers";
import { Model, Types } from "mongoose";
import { UserType } from "../types/user";
export interface User extends UserType, Record<string, unknown> {
}
export declare function UserSchema(mongoose: MongooseModule): import("mongoose").Schema<UserType, Model<UserType, any, any, any, import("mongoose").Document<unknown, any, UserType> & UserType & Required<{
    _id: Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<UserType>> & import("mongoose").FlatRecord<UserType> & Required<{
    _id: Types.ObjectId;
}>>;
export default function UserModule(mongoose: MongooseModule): Promise<Model<User, {}, {}, {}, import("mongoose").Document<unknown, {}, User> & User & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface UserModel extends Model<User> {
}
//# sourceMappingURL=user.d.ts.map
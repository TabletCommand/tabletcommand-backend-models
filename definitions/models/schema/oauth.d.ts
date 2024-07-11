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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { MongooseModule } from "../../helpers";
export interface OAuthSchemaType {
    accessToken: string;
    refreshToken: string;
    expireAt: Date;
}
export default function OAuthSchema(mongoose: MongooseModule): import("mongoose").Schema<OAuthSchemaType, import("mongoose").Model<OAuthSchemaType, any, any, any, import("mongoose").Document<unknown, any, OAuthSchemaType> & OAuthSchemaType & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OAuthSchemaType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OAuthSchemaType>> & import("mongoose").FlatRecord<OAuthSchemaType> & {
    _id: import("mongoose").Types.ObjectId;
}>;
//# sourceMappingURL=oauth.d.ts.map
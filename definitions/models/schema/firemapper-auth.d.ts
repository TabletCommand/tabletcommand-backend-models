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
interface FireMapperEncryptedType {
    iv: string;
    encryptedData: string;
}
export interface FireMapperAuthType {
    username: string;
    encrypted: FireMapperEncryptedType;
    encryptedAccessCode: FireMapperEncryptedType;
}
export default function FireMapperAuthSchema(mongoose: MongooseModule): import("mongoose").Schema<FireMapperAuthType, import("mongoose").Model<FireMapperAuthType, any, any, any, import("mongoose").Document<unknown, any, FireMapperAuthType> & FireMapperAuthType & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FireMapperAuthType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FireMapperAuthType>> & import("mongoose").FlatRecord<FireMapperAuthType> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export {};
//# sourceMappingURL=firemapper-auth.d.ts.map
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
export interface RemoteFileSchemaType {
    originalName: string;
    encoding: string;
    mimeType: string;
    fieldname: string;
    localPath: string;
    remotePath: string;
    hostname: string;
    size: number;
    received: Date;
    remoteFilePath: string;
}
export default function RemoteFileSchema(mongoose: MongooseModule): import("mongoose").Schema<RemoteFileSchemaType, import("mongoose").Model<RemoteFileSchemaType, any, any, any, import("mongoose").Document<unknown, any, RemoteFileSchemaType> & RemoteFileSchemaType & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RemoteFileSchemaType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<RemoteFileSchemaType>> & import("mongoose").FlatRecord<RemoteFileSchemaType> & {
    _id: import("mongoose").Types.ObjectId;
}>;
//# sourceMappingURL=remote-file.d.ts.map
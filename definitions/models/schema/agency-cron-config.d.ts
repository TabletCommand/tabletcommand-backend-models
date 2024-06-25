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
interface EncryptedDataType {
    iv: string;
    encryptedData: string;
}
export interface CronConfigSourceType extends Record<string, unknown> {
    protocol: string;
    username: string;
    hostname: string;
    filePath: string;
}
interface CronConfigAuthType {
    password: EncryptedDataType | null;
    sshPrivateKey: EncryptedDataType | null;
    sshPublicKey: EncryptedDataType | null;
    useSSHKey: boolean;
}
interface CronConfigCSVFieldMapType {
    PersonnelID: string;
    PersonnelName: string;
    PersonnelRank: string;
    PersonnelWorkCode: string;
    PersonnelNote: string;
    StartTime: string;
    EndTime: string;
    UnitName: string;
    TimeFormat: string;
}
interface ReconcileTimeOptionsType {
    enabled: boolean;
    startTime: string;
    endTime: string;
}
export interface AgencyCronConfigType extends Record<string, unknown> {
    enabled: boolean;
    source: CronConfigSourceType;
    auth: CronConfigAuthType;
    processPath: string;
    completedPath: string;
    importType: string;
    timezone: string;
    customApiPath: string;
    alterChunkSize: boolean;
    reconcileEnabled: boolean;
    reconcileTimeOptions: ReconcileTimeOptionsType;
    hasLabelCustomization: boolean;
    assignmentOverride: boolean;
    csvFieldMap: CronConfigCSVFieldMapType;
}
export default function AgencyCronSchema(mongoose: MongooseModule): import("mongoose").Schema<AgencyCronConfigType, import("mongoose").Model<AgencyCronConfigType, any, any, any, import("mongoose").Document<unknown, any, AgencyCronConfigType> & AgencyCronConfigType & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AgencyCronConfigType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<AgencyCronConfigType>> & import("mongoose").FlatRecord<AgencyCronConfigType> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export {};
//# sourceMappingURL=agency-cron-config.d.ts.map
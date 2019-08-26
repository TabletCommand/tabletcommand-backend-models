/// <reference types="mongoose" />
import { ModelItemType, MongooseModule, UnboxPromise } from "../helpers";
export declare function PersonnelImportModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    _id: import("bson").ObjectId;
    PersonnelID: string;
    PersonnelName: string;
    PersonnelRank: string;
    PersonnelWorkCode: string;
    PersonnelNote: string;
    departmentId: string;
    radioName: string;
    shiftStartTime: number;
    shiftEndTime: number;
    modified_unix_date: number;
}, {}>>;
export default PersonnelImportModule;
export declare type PersonnelImportModel = UnboxPromise<ReturnType<typeof PersonnelImportModule>>;
export declare type PersonnelImport = ModelItemType<PersonnelImportModel>;
//# sourceMappingURL=personnel-import.d.ts.map
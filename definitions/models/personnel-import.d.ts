import { MongooseModule, retrieveCurrentUnixTime, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
import { Document, Model } from "mongoose";
export declare function PersonnelImportModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: import("mongoose").Types.ObjectIdConstructor;
        auto: true;
    };
    PersonnelID: {
        type: StringConstructor;
        required: true;
    };
    PersonnelName: {
        type: StringConstructor;
        required: true;
    };
    PersonnelRank: {
        type: StringConstructor;
        default: string;
    };
    PersonnelWorkCode: {
        type: StringConstructor;
        default: string;
    };
    PersonnelNote: {
        type: StringConstructor;
        default: string;
    };
    departmentId: {
        type: StringConstructor;
    };
    radioNames: {
        type: StringConstructor[];
        default: never[];
    };
    shiftStartTime: {
        type: NumberConstructor;
        default: number;
    };
    shiftEndTime: {
        type: NumberConstructor;
        default: number;
    };
    modified_unix_date: {
        type: NumberConstructor;
        default: typeof retrieveCurrentUnixTime;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    agencyName: {
        type: StringConstructor;
        default: string;
    };
    agencyCode: {
        type: StringConstructor;
        default: string;
    };
    agencyId: {
        type: typeof import("mongoose").Schema.Types.ObjectId;
        ref: string;
        default: null;
    };
    importNotes: {
        type: StringConstructor;
        default: string;
    };
}>, unknown>>;
export interface PersonnelImport extends Document, ItemTypeFromTypeSchemaFunction<typeof PersonnelImportModule> {
}
export interface PersonnelImportModel extends Model<PersonnelImport> {
}
declare const _default: ReplaceModelReturnType<typeof PersonnelImportModule, PersonnelImportModel>;
export default _default;

import { Types } from "mongoose";
export interface RadioType {
    radioName: string;
    active: boolean;
    source: string;
}
export interface PersonnelImportType {
    _id: Types.ObjectId;
    PersonnelID: string;
    PersonnelName: string;
    PersonnelRank: string;
    PersonnelWorkCode: string;
    PersonnelNote: string;
    departmentId: string;
    radioNames: string[];
    radios: RadioType[];
    shiftStartTime: number;
    shiftEndTime: number;
    shiftStart: Date;
    shiftEnd: Date;
    modified_unix_date: number;
    modified: Date;
    active: boolean;
    agencyName: string;
    agencyCode: string;
    agencyId: Types.ObjectId;
    importNotes: string;
}
export interface PersonnelRosterType {
    _id: Types.ObjectId;
    PersonnelID: string;
    PersonnelName: string;
    PersonnelRank: string;
    PersonnelWorkCode: string;
    PersonnelUUID: string;
    departmentId: string;
    modified: Date;
    action: string;
    radioName: string;
    shiftStart: Date;
    shiftEnd: Date;
    active: boolean;
}
export interface RadioType {
    radioName: string;
    active: boolean;
}
export interface PersonnelKnownType {
    _id: Types.ObjectId;
    PersonnelID: string;
    PersonnelName: string;
    PersonnelRank: string;
    PersonnelWorkCode: string;
    modified: Date;
    departmentId: string;
    uuid: string;
    radios: RadioType[];
    active: boolean;
    jurisdiction: string;
    agencyId: Types.ObjectId;
    source: string;
}
//# sourceMappingURL=personnel.d.ts.map
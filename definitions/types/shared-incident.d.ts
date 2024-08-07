export interface CADPersonSchemaType {
    PersonnelID: string;
    PersonnelName: string;
    PersonnelRank: string;
    PersonnelWorkCode: string;
    PersonnelNote: string;
}
export interface RadioChannelSchemaType extends Record<string, unknown> {
    name: string;
    channel: string;
    url: string;
    channelDescription: string;
}
export interface RecordSchemaType {
    name: string;
    value: string;
}
export interface ReportNumberSchemaType {
    name: string;
    number: string;
}
export interface ShareReasonSchemaType {
    name: string;
    date: Date;
}
export interface SharedToSchemaType extends Record<string, unknown> {
    departmentId: string;
    name: string;
    startAt: Date;
    expireAt: Date;
    active: boolean;
    reasons: ShareReasonSchemaType[];
}
export interface SharedSourceSchemaType extends Record<string, unknown> {
    name: string;
    isExternal: boolean;
    startAt?: Date;
    expireAt?: Date;
    reasons: ShareReasonSchemaType[];
}
//# sourceMappingURL=shared-incident.d.ts.map
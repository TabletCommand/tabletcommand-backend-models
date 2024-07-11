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
export declare function CADPersonSchema(mongoose: MongooseModule): import("mongoose").Schema<CADPersonSchemaType, import("mongoose").Model<CADPersonSchemaType, any, any, any, import("mongoose").Document<unknown, any, CADPersonSchemaType> & CADPersonSchemaType & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CADPersonSchemaType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<CADPersonSchemaType>> & import("mongoose").FlatRecord<CADPersonSchemaType> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare function RadioChannelSchema(mongoose: MongooseModule): import("mongoose").Schema<RadioChannelSchemaType, import("mongoose").Model<RadioChannelSchemaType, any, any, any, import("mongoose").Document<unknown, any, RadioChannelSchemaType> & RadioChannelSchemaType & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RadioChannelSchemaType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<RadioChannelSchemaType>> & import("mongoose").FlatRecord<RadioChannelSchemaType> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare function RecordSchema(mongoose: MongooseModule): import("mongoose").Schema<RecordSchemaType, import("mongoose").Model<RecordSchemaType, any, any, any, import("mongoose").Document<unknown, any, RecordSchemaType> & RecordSchemaType & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RecordSchemaType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<RecordSchemaType>> & import("mongoose").FlatRecord<RecordSchemaType> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare function ReportNumberSchema(mongoose: MongooseModule): import("mongoose").Schema<ReportNumberSchemaType, import("mongoose").Model<ReportNumberSchemaType, any, any, any, import("mongoose").Document<unknown, any, ReportNumberSchemaType> & ReportNumberSchemaType & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ReportNumberSchemaType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ReportNumberSchemaType>> & import("mongoose").FlatRecord<ReportNumberSchemaType> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare function ShareReasonSchema(mongoose: MongooseModule): import("mongoose").Schema<ShareReasonSchemaType, import("mongoose").Model<ShareReasonSchemaType, any, any, any, import("mongoose").Document<unknown, any, ShareReasonSchemaType> & ShareReasonSchemaType & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ShareReasonSchemaType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ShareReasonSchemaType>> & import("mongoose").FlatRecord<ShareReasonSchemaType> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare function SharedToSchema(mongoose: MongooseModule): import("mongoose").Schema<SharedToSchemaType, import("mongoose").Model<SharedToSchemaType, any, any, any, import("mongoose").Document<unknown, any, SharedToSchemaType> & SharedToSchemaType & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SharedToSchemaType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<SharedToSchemaType>> & import("mongoose").FlatRecord<SharedToSchemaType> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare function SharedSourceSchema(mongoose: MongooseModule): import("mongoose").Schema<SharedSourceSchemaType, import("mongoose").Model<SharedSourceSchemaType, any, any, any, import("mongoose").Document<unknown, any, SharedSourceSchemaType> & SharedSourceSchemaType & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SharedSourceSchemaType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<SharedSourceSchemaType>> & import("mongoose").FlatRecord<SharedSourceSchemaType> & {
    _id: import("mongoose").Types.ObjectId;
}>;
//# sourceMappingURL=shared-incident.d.ts.map
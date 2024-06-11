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
import { EsriAuthSchemaType } from "./schema/esri-auth";
import { EsriErrorSchemaType } from "./schema/esri-error";
import { PubNubTokenSchemaType } from "./schema/pubnub-token";
import { Model, Types } from "mongoose";
interface VehicleSchemaType {
    radioName: string;
    vehicleId: string;
}
export interface User {
    _id: Types.ObjectId;
    nick: string;
    email: string;
    name: string;
    uuid: string;
    departmentId: string;
    modified_date: Date;
    when: Date;
    agencyId: Types.ObjectId;
    managedAgencies: Types.ObjectId[];
    active: boolean;
    admin: boolean;
    superuser: boolean;
    isPro: boolean;
    isIncidentManager: boolean;
    mobileAccess: boolean;
    webAccess: boolean;
    cadSimulatorAccess: boolean;
    canAddRemoveVehicle: boolean;
    beaconEnabled: boolean;
    userContributionEnabled: boolean;
    syncLoggingExpireDate: Date;
    beacons: string[];
    salt: string;
    pass: string;
    auth: string[];
    mapHidden: boolean;
    mapId: string;
    vehicle: VehicleSchemaType;
    sessionCountiPhone: number;
    sessionCountiPad: number;
    rtsAuthKey: string;
    pubNubV2: PubNubTokenSchemaType;
    pubNubV3: PubNubTokenSchemaType;
    socketIO: PubNubTokenSchemaType;
    token: string;
    tokenExpireAt: Date;
    shareLocationPhone: boolean;
    shareLocationTablet: boolean;
    offlineMapsEnabled: boolean;
    fireMapperProEnabled: boolean;
    arcGISAuth: EsriAuthSchemaType;
    arcGISAuthError: EsriErrorSchemaType;
    offDutyEnabled: boolean;
    webMapSettings: {
        defaultZoomLevel: number;
        defaultCenter: number[];
        defaultMap: string;
    };
    locationToCAD: boolean;
    logOffEnabled: boolean;
    restrictedCommentsEnabled: boolean;
}
export declare function UserSchema(mongoose: MongooseModule): import("mongoose").Schema<User, Model<User, any, any, any, import("mongoose").Document<unknown, any, User> & User & Required<{
    _id: Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & Required<{
    _id: Types.ObjectId;
}>>;
export default function UserModule(mongoose: MongooseModule): Promise<Model<User, {}, {}, {}, import("mongoose").Document<unknown, {}, User> & User & Required<{
    _id: Types.ObjectId;
}>, any>>;
export interface UserModel extends Model<User> {
}
export {};
//# sourceMappingURL=user.d.ts.map
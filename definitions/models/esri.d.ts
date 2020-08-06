/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function EsriModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    modified_unix_date: number;
    departmentId: import("bson").ObjectId;
    tokenDateExpiry: number;
    token: import("../helpers").MongooseInterface<{
        access_token: {
            type: StringConstructor;
            default: string;
        };
        refresh_token: {
            type: StringConstructor;
            default: string;
        };
        username: {
            type: StringConstructor;
            default: string;
        };
        ssl: {
            type: BooleanConstructor;
            default: boolean;
        };
        expires_in: {
            type: NumberConstructor;
            default: number;
        };
    }>;
    error: import("../helpers").MongooseInterface<{
        code: {
            type: NumberConstructor;
            default: number;
        };
        error: {
            type: StringConstructor;
            default: string;
        };
        error_description: {
            type: StringConstructor;
            default: string;
        };
        message: {
            type: StringConstructor;
            default: string;
        };
    }>;
    auth: import("../helpers").MongooseInterface<{
        username: {
            type: StringConstructor;
            default: string;
        };
        encrypted: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    iv: {
                        type: StringConstructor;
                        default: string;
                    };
                    encryptedData: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            };
            default: null;
        };
    }>;
    fireMapperAuth: import("../helpers").MongooseInterface<{
        username: {
            type: StringConstructor;
            default: string;
        };
        encrypted: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    iv: {
                        type: StringConstructor;
                        default: string;
                    };
                    encryptedData: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            };
            default: null;
        };
    }>;
}, {}> & {
    __methods?: unknown;
}>;
export interface Esri extends ItemTypeFromTypeSchemaFunction<typeof EsriModule> {
}
export interface EsriModel extends ModelTypeFromTypeSchemaFunction<Esri> {
}
declare const _default: ReplaceModelReturnType<typeof EsriModule, EsriModel>;
export default _default;
//# sourceMappingURL=esri.d.ts.map
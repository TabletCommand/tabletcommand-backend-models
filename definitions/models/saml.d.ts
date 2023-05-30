/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function SAMLSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../helpers").MongooseInterface<{
        _id: {
            type: import("mongoose").Types.ObjectIdConstructor;
            auto: boolean;
        };
        departmentId: {
            type: import("mongoose").Types.ObjectIdConstructor;
            ref: string;
            required: boolean;
            unique: boolean;
        };
        metadata: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    selector: {
                        type: StringConstructor;
                        required: boolean;
                        unique: boolean;
                    };
                    idp: {
                        type: StringConstructor;
                        default: string;
                    };
                    sp: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
    }>;
    _methods: unknown;
};
export declare function SAMLModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("mongoose").Types.ObjectId;
    departmentId: import("mongoose").Types.ObjectId;
    metadata: import("../helpers").MongooseInterface<{
        selector: {
            type: StringConstructor;
            required: boolean;
            unique: boolean;
        };
        idp: {
            type: StringConstructor;
            default: string;
        };
        sp: {
            type: StringConstructor;
            default: string;
        };
    }>[];
}, {}> & {
    __methods?: unknown;
}>;
export interface SAML extends ItemTypeFromTypeSchemaFunction<typeof SAMLModule> {
}
export interface SAMLModel extends ModelTypeFromTypeSchemaFunction<SAML> {
}
declare const _default: ReplaceModelReturnType<typeof SAMLModule, SAMLModel>;
export default _default;
//# sourceMappingURL=saml.d.ts.map
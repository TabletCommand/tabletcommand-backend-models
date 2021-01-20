/// <reference types="mongoose" />
import { MongooseModule } from "../../helpers";
export default function FireMapperAuthModule(mongoose: MongooseModule): import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
    _interface: import("../../helpers").MongooseInterface<{
        username: {
            type: StringConstructor;
            default: string;
        };
        encrypted: {
            type: import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
                _interface: import("../../helpers").MongooseInterface<{
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
        encryptedAccessCode: {
            type: import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
                _interface: import("../../helpers").MongooseInterface<{
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
    _methods: unknown;
};
//# sourceMappingURL=firemapper-auth.d.ts.map
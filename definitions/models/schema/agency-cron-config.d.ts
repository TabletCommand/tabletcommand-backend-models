/// <reference types="mongoose" />
import { MongooseModule } from "../../helpers";
export default function AgencyCronSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../../helpers").MongooseInterface<{
        enabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        sourcePath: {
            type: import("mongoose").Schema<any> & {
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
        processPath: {
            type: StringConstructor;
            default: string;
        };
        completedPath: {
            type: StringConstructor;
            default: string;
        };
        importType: {
            type: StringConstructor;
            default: string;
        };
        sshPrivateKey: {
            type: import("mongoose").Schema<any> & {
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
        sshPublicKey: {
            type: import("mongoose").Schema<any> & {
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
        useSSHKey: {
            type: BooleanConstructor;
            default: boolean;
        };
        timezone: {
            type: StringConstructor;
            default: string;
        };
        customApiPath: {
            type: StringConstructor;
            default: string;
        };
    }>;
    _methods: unknown;
};
//# sourceMappingURL=agency-cron-config.d.ts.map
/// <reference types="mongoose" />
import { MongooseModule } from "../../helpers";
export default function AgencyCronSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../../helpers").MongooseInterface<{
        enabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        source: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../../helpers").MongooseInterface<{
                    protocol: {
                        type: StringConstructor;
                        default: string;
                    };
                    username: {
                        type: StringConstructor;
                        default: string;
                    };
                    hostname: {
                        type: StringConstructor;
                        default: string;
                    };
                    filePath: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            };
            default: {
                protocol: string;
                username: string;
                hostname: string;
                filePath: string;
            };
        };
        auth: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../../helpers").MongooseInterface<{
                    password: {
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
                }>;
                _methods: unknown;
            };
            default: {
                password: null;
                sshPrivateKey: null;
                sshPublicKey: null;
                useSSHKey: boolean;
            };
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
        timezone: {
            type: StringConstructor;
            default: string;
        };
        customApiPath: {
            type: StringConstructor;
            default: string;
        };
        alterChunkSize: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>;
    _methods: unknown;
};
//# sourceMappingURL=agency-cron-config.d.ts.map
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
        reconcileEnabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        reconcileTimeOptions: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../../helpers").MongooseInterface<{
                    enabled: {
                        type: BooleanConstructor;
                    };
                    startTime: {
                        type: StringConstructor;
                    };
                    endTime: {
                        type: StringConstructor;
                    };
                }>;
                _methods: unknown;
            };
            default: {
                enabled: boolean;
                startTime: string;
                endTime: string;
            };
        };
        hasLabelCustomization: {
            type: BooleanConstructor;
            default: boolean;
        };
        csvFieldMap: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../../helpers").MongooseInterface<{
                    PersonnelID: {
                        type: StringConstructor;
                    };
                    PersonnelName: {
                        type: StringConstructor;
                    };
                    PersonnelRank: {
                        type: StringConstructor;
                    };
                    PersonnelWorkCode: {
                        type: StringConstructor;
                    };
                    PersonnelNote: {
                        type: StringConstructor;
                    };
                    StartTime: {
                        type: StringConstructor;
                    };
                    EndTime: {
                        type: StringConstructor;
                    };
                    UnitName: {
                        type: StringConstructor;
                    };
                    TimeFormat: {
                        type: StringConstructor;
                    };
                }>;
                _methods: unknown;
            };
            default: {
                PersonnelID: string;
                PersonnelName: string;
                PersonnelRank: string;
                PersonnelWorkCode: string;
                PersonnelNote: string;
                StartTime: string;
                EndTime: string;
                UnitName: string;
                TimeFormat: string;
            };
        };
    }>;
    _methods: unknown;
};
//# sourceMappingURL=agency-cron-config.d.ts.map
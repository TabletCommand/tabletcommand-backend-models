/// <reference types="mongoose" />
import { MongooseModule } from "../../helpers";
export default function EsriGroupModule(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../../helpers").MongooseInterface<{
        groupId: {
            type: StringConstructor;
            default: string;
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        protected: {
            type: BooleanConstructor;
            default: boolean;
        };
        owner: {
            type: StringConstructor;
            default: string;
        };
        access: {
            type: StringConstructor;
            default: string;
        };
        users: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../../helpers").MongooseInterface<{
                    username: {
                        type: StringConstructor;
                        default: string;
                    };
                    fullName: {
                        type: StringConstructor;
                        default: string;
                    };
                    memberType: {
                        type: StringConstructor;
                        default: string;
                    };
                    orgId: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        outsiders: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../../helpers").MongooseInterface<{
                    username: {
                        type: StringConstructor;
                        default: string;
                    };
                    fullName: {
                        type: StringConstructor;
                        default: string;
                    };
                    memberType: {
                        type: StringConstructor;
                        default: string;
                    };
                    orgId: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        externalOrgIds: {
            type: StringConstructor[];
            default: never[];
        };
    }>;
    _methods: unknown;
};
//# sourceMappingURL=esri-group.d.ts.map
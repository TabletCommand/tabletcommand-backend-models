/// <reference types="mongoose" />
import { MongooseModule } from "../../helpers";
export default function AgencySAMLSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../../helpers").MongooseInterface<{
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
        env: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
    }>;
    _methods: unknown;
};
//# sourceMappingURL=agency-saml.d.ts.map
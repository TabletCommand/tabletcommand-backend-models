/// <reference types="mongoose" />
import { MongooseModule } from "../../helpers";
export default function EsriTokenModule(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../../helpers").MongooseInterface<{
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
    _methods: unknown;
};
//# sourceMappingURL=esri-token.d.ts.map
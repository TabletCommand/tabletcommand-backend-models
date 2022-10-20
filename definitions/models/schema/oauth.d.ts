/// <reference types="mongoose" />
import { MongooseModule } from "../../helpers";
export default function OAuthSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../../helpers").MongooseInterface<{
        accessToken: {
            type: StringConstructor;
            default: string;
        };
        refreshToken: {
            type: StringConstructor;
            default: string;
        };
        expireAt: {
            type: DateConstructor;
            default: Date;
        };
    }>;
    _methods: unknown;
};
//# sourceMappingURL=oauth.d.ts.map
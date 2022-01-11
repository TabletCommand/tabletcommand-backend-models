/// <reference types="mongoose" />
import { MongooseModule, currentDate } from "../../helpers";
export default function PubNubTokenSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../../helpers").MongooseInterface<{
        token: {
            type: StringConstructor;
            default: string;
        };
        expireAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        runAt: {
            type: DateConstructor;
            default: string;
        };
    }>;
    _methods: unknown;
};
//# sourceMappingURL=pubnub-token.d.ts.map
/// <reference types="mongoose" />
import { MongooseModule } from "../../helpers";
export declare function RateLimitModule(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: {
        background: string;
        text: string;
    };
    _methods: unknown;
};
//# sourceMappingURL=cad-status-color.d.ts.map
/// <reference types="mongoose" />
import { MongooseModule } from "../types";
export declare function RateLimitModule(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: {
        background: string;
        text: string;
    };
    _methods: {};
};

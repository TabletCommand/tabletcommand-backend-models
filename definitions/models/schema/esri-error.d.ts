/// <reference types="mongoose" />
import { MongooseModule } from "../../helpers";
export default function EsriErrorModule(mongoose: MongooseModule): import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
    _interface: import("../../helpers").MongooseInterface<{
        code: {
            type: NumberConstructor;
            default: number;
        };
        error: {
            type: StringConstructor;
            default: string;
        };
        error_description: {
            type: StringConstructor;
            default: string;
        };
        message: {
            type: StringConstructor;
            default: string;
        };
    }>;
    _methods: unknown;
};
//# sourceMappingURL=esri-error.d.ts.map
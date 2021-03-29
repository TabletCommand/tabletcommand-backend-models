/// <reference types="mongoose" />
import { MongooseModule } from "../../helpers";
export default function ColorModule(mongoose: MongooseModule): import("mongoose").Schema<import("mongoose").Document<any>, import("mongoose").Model<import("mongoose").Document<any>>> & {
    _interface: import("../../helpers").MongooseInterface<{
        background: {
            type: StringConstructor;
            default: string;
        };
        text: {
            type: StringConstructor;
            default: string;
        };
    }>;
    _methods: unknown;
};
//# sourceMappingURL=color.d.ts.map
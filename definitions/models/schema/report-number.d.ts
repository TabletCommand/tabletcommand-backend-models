/// <reference types="mongoose" />
import { MongooseModule } from "../../helpers";
export default function ReportNumberModule(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
            default: string;
        };
        number: {
            type: StringConstructor;
            default: string;
        };
    }>;
    _methods: unknown;
};
//# sourceMappingURL=report-number.d.ts.map
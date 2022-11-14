/// <reference types="mongoose" />
import { MongooseModule, currentDate } from "../../helpers";
export default function ValidationErrorItemSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../../helpers").MongooseInterface<{
        message: {
            type: StringConstructor;
            default: string;
        };
        firstSeenAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        lastSeenAt: {
            type: DateConstructor;
            default: typeof currentDate;
        };
        clearedAt: {
            type: DateConstructor;
            default: undefined;
        };
        payload: {
            type: ObjectConstructor;
            default: {};
        };
    }>;
    _methods: unknown;
};
//# sourceMappingURL=validation-error-item.d.ts.map
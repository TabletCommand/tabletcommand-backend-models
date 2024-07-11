/// <reference types="mongoose" />
import { MongooseModule, currentDate } from "../../helpers";
export default function RemoteFileSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../../helpers").MongooseInterface<{
        originalName: {
            type: StringConstructor;
            default: string;
        };
        encoding: {
            type: StringConstructor;
            default: string;
        };
        mimeType: {
            type: StringConstructor;
            default: string;
        };
        fieldname: {
            type: StringConstructor;
            default: string;
        };
        localPath: {
            type: StringConstructor;
            default: string;
        };
        remoteFilePath: {
            type: StringConstructor;
            default: string;
        };
        hostname: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: NumberConstructor;
            default: number;
        };
        received: {
            type: DateConstructor;
            default: typeof currentDate;
        };
    }>;
    _methods: unknown;
};
//# sourceMappingURL=remote-file.d.ts.map
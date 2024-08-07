import { Types } from "mongoose";
export interface CSVImportType {
    _id: Types.ObjectId;
    batchId: string;
    importCreated: Date;
    importEnded: Date;
    status: string;
    departmentId: string;
    agencyId: string;
    importType: string;
    fileType: string;
    fileName: string;
    fileSize: string;
    fileLastModified: Date;
    records: object[];
    modifiedDate: Date;
    userId: string;
    sendNotification: boolean;
}
//# sourceMappingURL=csv-import.d.ts.map
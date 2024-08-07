import { Types } from "mongoose";
export interface RateLimitType {
    _id: Types.ObjectId;
    username: string;
    modified_unix_date: number;
    modified: Date;
    count: number;
    remoteAddress: string;
}
//# sourceMappingURL=rate-limit.d.ts.map
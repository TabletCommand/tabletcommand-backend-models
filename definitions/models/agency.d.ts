/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function AgencyModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any, {}> & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    code: string;
    name: string;
    domain: string;
    personnelApiKey: string;
    agencyApiKey: string;
    uuid: string;
    modified_unix_date: number;
    active: boolean;
    departmentId: import("mongoose").Schema.Types.ObjectId;
    administrators: import("mongoose").Schema.Types.ObjectId[];
    personnelIntegration: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
    personnelMonitorHours: number;
}, {}> & {
=======
}> & {
>>>>>>> 3af52d1 (Upgraded mongoose uuid and ts packages.)
=======
}, {}> & {
>>>>>>> a8e26f7 (Upgraded TS and monggose.)
    __methods?: unknown;
}>;
export interface Agency extends ItemTypeFromTypeSchemaFunction<typeof AgencyModule> {
}
export interface AgencyModel extends ModelTypeFromTypeSchemaFunction<Agency> {
}
declare const _default: ReplaceModelReturnType<typeof AgencyModule, AgencyModel>;
export default _default;
//# sourceMappingURL=agency.d.ts.map
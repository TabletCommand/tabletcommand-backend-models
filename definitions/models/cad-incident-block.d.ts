/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function CADIncidentBlockModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("mongoose").Types.ObjectId;
    departmentId: string;
    source: string;
    IncidentNumber: string;
    AgencyIncidentCallTypeDescription: string;
    EntryDateTime: string;
    ClosedDateTime: string;
    ReportNumber: import("../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
            default: string;
        };
        number: {
            type: StringConstructor;
            default: string;
        };
    }>[];
}, {}> & {
    __methods?: unknown;
}>;
export interface CADIncidentBlock extends ItemTypeFromTypeSchemaFunction<typeof CADIncidentBlockModule> {
}
export interface CADIncidentBlockModel extends ModelTypeFromTypeSchemaFunction<CADIncidentBlock> {
}
declare const _default: ReplaceModelReturnType<typeof CADIncidentBlockModule, CADIncidentBlockModel>;
export default _default;
//# sourceMappingURL=cad-incident-block.d.ts.map
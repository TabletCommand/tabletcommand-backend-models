/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function CADIncidentDeltaModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    departmentId: string;
    incidentNumber: string;
    createdAt: string;
    toLegacy: any;
    toFlat: any;
}, {}> & {
    __methods?: unknown;
}>;
export interface CADIncidentDelta extends ItemTypeFromTypeSchemaFunction<typeof CADIncidentDeltaModule> {
}
export interface CADIncidentDeltaModel extends ModelTypeFromTypeSchemaFunction<CADIncidentDelta> {
}
declare const _default: ReplaceModelReturnType<typeof CADIncidentDeltaModule, CADIncidentDeltaModel>;
export default _default;
//# sourceMappingURL=cad-incident-delta.d.ts.map
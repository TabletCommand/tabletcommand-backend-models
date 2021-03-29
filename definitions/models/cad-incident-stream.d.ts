/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function CADIncidentStreamModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any, {}> & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    uuid: string;
    tag: string;
    departmentId: string;
    incidentNumber: string;
    createdAt: string;
    payload: any;
}, {}> & {
    __methods?: unknown;
}>;
export interface CADIncidentStream extends ItemTypeFromTypeSchemaFunction<typeof CADIncidentStreamModule> {
}
export interface CADIncidentStreamModel extends ModelTypeFromTypeSchemaFunction<CADIncidentStream> {
}
declare const _default: ReplaceModelReturnType<typeof CADIncidentStreamModule, CADIncidentStreamModel>;
export default _default;
//# sourceMappingURL=cad-incident-stream.d.ts.map
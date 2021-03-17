/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function TemplateModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    position: number;
    userId: string;
    uuid: string;
    isMandatory: boolean;
    modified_date: string;
    modified_unix_date: number;
    modified: string;
    departmentId: string;
    active: boolean;
    name: string;
    checklist: import("../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
            default: string;
        };
        position: {
            type: NumberConstructor;
            default: number;
        };
        id: {
            type: StringConstructor;
            default: string;
        };
    }>[];
    group: import("../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
            default: string;
        };
        position: {
            type: NumberConstructor;
            default: number;
        };
    }>[];
    agencyId: {
        type: never;
        ref: never;
        default: never;
    };
}, {}> & {
    __methods?: unknown;
}>;
export interface Template extends ItemTypeFromTypeSchemaFunction<typeof TemplateModule> {
}
export interface TemplateModel extends ModelTypeFromTypeSchemaFunction<Template> {
}
declare const _default: ReplaceModelReturnType<typeof TemplateModule, TemplateModel>;
export default _default;
//# sourceMappingURL=template.d.ts.map
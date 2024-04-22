/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function Mark43IncidentRetryModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    departmentId: string;
    created: string;
    modified: string;
    active: boolean;
    attempts: number;
    retryPayload: import("../helpers").MongooseInterface<{
        departmentId: {
            type: NumberConstructor;
            default: number;
        };
        activityType: {
            type: StringConstructor;
            default: string;
        };
        relatedEvent: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    mark43Id: {
                        type: NumberConstructor;
                        default: number;
                    };
                    cadAgencyEventNumber: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            };
        };
    }>;
    mark43IncidentId: number;
    incidentNumber: string;
}, {}> & {
    __methods?: unknown;
}>;
export interface Mark43IncidentRetry extends ItemTypeFromTypeSchemaFunction<typeof Mark43IncidentRetryModule> {
}
export interface Mark43IncidentRetryModel extends ModelTypeFromTypeSchemaFunction<Mark43IncidentRetry> {
}
declare const _default: ReplaceModelReturnType<typeof Mark43IncidentRetryModule, Mark43IncidentRetryModel>;
export default _default;
//# sourceMappingURL=mark43-incident-retry.d.ts.map
/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function CADSimulationModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    uuid: string;
    departmentId: string;
    modifiedDate: number;
    modified: string;
    active: boolean;
    friendlyId: string;
    title: string;
    notes: string;
    simulation: boolean;
    notify: boolean;
    rts: boolean;
    tags: string[];
    incidentType: string;
    streetName: string;
    locationComment: string;
    suite: string;
    CrossStreet1: string;
    city: string;
    state: string;
    lat: string;
    lon: string;
    firemap: string;
    mapPages: string;
    tacticalChannel: string;
    commandChannel: string;
    radioChannels: import("../helpers").MongooseInterface<{
        name: {
            type: StringConstructor;
            default: string;
        };
        channel: {
            type: StringConstructor;
            default: string;
        };
    }>[];
    closeDelay: number;
    priorIncidents: import("../helpers").MongooseInterface<{
        IncidentNumber: {
            type: StringConstructor;
            default: string;
        };
        IncidentDateTime: {
            type: StringConstructor;
            default: string;
        };
        Problem: {
            type: StringConstructor;
            default: string;
        };
        Address: {
            type: StringConstructor;
            default: string;
        };
        Suite: {
            type: StringConstructor;
            default: string;
        };
        Comment: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    Comment: {
                        type: StringConstructor;
                        default: string;
                    };
                    CommentSource: {
                        type: StringConstructor;
                        default: string;
                    };
                    CommentDateTime: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
    }>[];
    randomPriorIncidents: boolean;
    randomStaffing: boolean;
    sequences: import("../helpers").MongooseInterface<{
        _id: {
            type: import("mongoose").Types.ObjectIdConstructor;
            auto: boolean;
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        alarm: {
            type: StringConstructor;
            default: string;
        };
        sequenceId: {
            type: NumberConstructor;
            default: number;
        };
        unitsConfig: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    alarmLevelAtDispatch: {
                        type: StringConstructor;
                        default: string;
                    };
                    units: {
                        type: StringConstructor[];
                        default: never[];
                    };
                }>;
                _methods: unknown;
            };
            default: {};
        };
        comments: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    comment: {
                        type: StringConstructor;
                        default: string;
                    };
                    source: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
    }>[];
    sortId: number;
    sendStatus: boolean;
}, {}> & {
    __methods?: unknown;
}>;
export interface CADSimulation extends ItemTypeFromTypeSchemaFunction<typeof CADSimulationModule> {
}
export interface CADSimulationModel extends ModelTypeFromTypeSchemaFunction<CADSimulation> {
}
declare const _default: ReplaceModelReturnType<typeof CADSimulationModule, CADSimulationModel>;
export default _default;
//# sourceMappingURL=cad-simulation.d.ts.map
/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function CADSimulationModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    uuid: string;
    departmentId: string;
    modifiedDate: number;
    modified: string;
    active: boolean;
    friendly_id: string;
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
    crossStreet1: string;
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
            title: StringConstructor;
            default: string;
        };
        channel: {
            type: StringConstructor;
            default: string;
        };
    }>[];
    closeDelay: number;
    priorIncidents: string;
    randomPriorIncidents: boolean;
    randomStaffing: boolean;
    sequences: import("../helpers").MongooseInterface<{
        _id: {
            type: import("mongoose").Types.ObjectIdConstructor;
            auto: boolean;
        };
        code: {
            title: StringConstructor;
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
        unitsArray: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    alarmLevelAtDispatch: {
                        title: StringConstructor;
                        default: string;
                    };
                    units: {
                        type: StringConstructor[];
                        default: never[];
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        comments: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    comment: {
                        title: StringConstructor;
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
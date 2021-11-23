/// <reference types="mongoose" />
import * as uuid from "uuid";
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function ManagedIncidentModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectID;
    departmentId: string;
    userId: string;
    uuid: string;
    start_unix_time: number;
    end_unix_time: number;
    par_unix_time: number;
    watch_unix_start_time: number;
    watch_unix_pause_time: number;
    start_time: string;
    end_time: string;
    modified_date: string;
    modified_unix_date: number;
    modified: string;
    channel_owner: string;
    channel: string;
    active: boolean;
    address: string;
    api_incident_number: string;
    CallerNumber: string;
    CommandChannel: string;
    CommonPlaceName: string;
    cross_streets: string;
    extended: boolean;
    is_closed: boolean;
    last_view: string;
    location: string;
    managed: boolean;
    name: string;
    preference_location: string;
    slave_map_changed: boolean;
    source: string;
    TacticalAltChannel: string;
    TacticalChannel: string;
    groups: import("../helpers").MongooseInterface<{
        location_on_map: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        note: {
            type: StringConstructor;
            default: string;
        };
        position: {
            type: NumberConstructor;
            default: number;
        };
        type: {
            type: NumberConstructor;
            default: number;
        };
        type_text: {
            type: StringConstructor;
            default: string;
        };
        units: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    active: {
                        type: NumberConstructor;
                        default: number;
                    };
                    air_time: {
                        type: StringConstructor;
                        default: string;
                    };
                    assignment: {
                        type: import("mongoose").Schema<any> & {
                            _interface: import("../helpers").MongooseInterface<{
                                name: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                uuid: {
                                    type: StringConstructor;
                                    default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
                                };
                            }>;
                            _methods: unknown;
                        };
                    };
                    AlarmAtDispatch: {
                        type: StringConstructor;
                        default: string;
                    };
                    api_unit_dispatch_number: {
                        type: StringConstructor;
                        default: string;
                    };
                    checked: {
                        type: NumberConstructor;
                        default: number;
                    };
                    column_position: {
                        type: NumberConstructor;
                        default: number;
                    };
                    group_position: {
                        type: NumberConstructor;
                        default: number;
                    };
                    incident_position: {
                        type: NumberConstructor;
                        default: number;
                    };
                    isSupervisor: {
                        type: NumberConstructor;
                        default: number;
                    };
                    is_part_of_group: {
                        type: NumberConstructor;
                        default: number;
                    };
                    location_on_map: {
                        type: StringConstructor;
                        default: string;
                    };
                    modified_date: {
                        type: StringConstructor;
                        default: string;
                    };
                    modified_unix_date: {
                        type: NumberConstructor;
                        default: number;
                    };
                    note: {
                        type: StringConstructor;
                        default: string;
                    };
                    personnelOnScene: {
                        type: NumberConstructor;
                        default: number;
                    };
                    status: {
                        type: StringConstructor;
                        default: string;
                    };
                    status_unix_date: {
                        type: NumberConstructor;
                        default: number;
                    };
                    time: {
                        type: StringConstructor;
                        default: string;
                    };
                    UnitID: {
                        type: StringConstructor;
                        default: string;
                    };
                    warning: {
                        type: NumberConstructor;
                        default: number;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        uuid: {
            type: StringConstructor;
            default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
        };
    }>[];
    history: import("../helpers").MongooseInterface<{
        message: {
            type: StringConstructor;
            default: string;
        };
        entity_type: {
            type: NumberConstructor;
            default: number;
        };
        time: {
            type: NumberConstructor;
            default: number;
        };
        entity_id: {
            type: NumberConstructor;
            default: number;
        };
    }>[];
    notes: import("../helpers").MongooseInterface<{
        message: {
            type: StringConstructor;
            default: string;
        };
        entity_type: {
            type: NumberConstructor;
            default: number;
        };
        time: {
            type: NumberConstructor;
            default: number;
        };
        entity_id: {
            type: NumberConstructor;
            default: number;
        };
    }>[];
    units: import("../helpers").MongooseInterface<{
        active: {
            type: NumberConstructor;
            default: number;
        };
        air_time: {
            type: StringConstructor;
            default: string;
        };
        assignment: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    name: {
                        type: StringConstructor;
                        default: string;
                    };
                    uuid: {
                        type: StringConstructor;
                        default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
                    };
                }>;
                _methods: unknown;
            };
        };
        AlarmAtDispatch: {
            type: StringConstructor;
            default: string;
        };
        api_unit_dispatch_number: {
            type: StringConstructor;
            default: string;
        };
        checked: {
            type: NumberConstructor;
            default: number;
        };
        column_position: {
            type: NumberConstructor;
            default: number;
        };
        group_position: {
            type: NumberConstructor;
            default: number;
        };
        incident_position: {
            type: NumberConstructor;
            default: number;
        };
        isSupervisor: {
            type: NumberConstructor;
            default: number;
        };
        is_part_of_group: {
            type: NumberConstructor;
            default: number;
        };
        location_on_map: {
            type: StringConstructor;
            default: string;
        };
        modified_date: {
            type: StringConstructor;
            default: string;
        };
        modified_unix_date: {
            type: NumberConstructor;
            default: number;
        };
        note: {
            type: StringConstructor;
            default: string;
        };
        personnelOnScene: {
            type: NumberConstructor;
            default: number;
        };
        status: {
            type: StringConstructor;
            default: string;
        };
        status_unix_date: {
            type: NumberConstructor;
            default: number;
        };
        time: {
            type: StringConstructor;
            default: string;
        };
        UnitID: {
            type: StringConstructor;
            default: string;
        };
        warning: {
            type: NumberConstructor;
            default: number;
        };
    }>[];
    simulation: boolean;
    rts: boolean;
}, {}> & {
    __methods?: unknown;
}>;
export interface ManagedIncident extends ItemTypeFromTypeSchemaFunction<typeof ManagedIncidentModule> {
}
export interface ManagedIncidentModel extends ModelTypeFromTypeSchemaFunction<ManagedIncident> {
}
declare const _default: ReplaceModelReturnType<typeof ManagedIncidentModule, ManagedIncidentModel>;
export default _default;
//# sourceMappingURL=managed-incident.d.ts.map
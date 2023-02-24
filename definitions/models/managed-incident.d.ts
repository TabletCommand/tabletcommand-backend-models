/// <reference types="mongoose" />
import * as uuid from "uuid";
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType } from "../helpers";
export declare function ManagedIncidentModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("mongoose").Types.ObjectId;
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
    deviceTime: string;
    extended: boolean;
    FireMap: string;
    is_closed: boolean;
    last_view: string;
    location: string;
    MapPages: string;
    managed: boolean;
    name: string;
    preference_location: string;
    serverTime: string;
    slave_map_changed: boolean;
    source: string;
    TacticalAltChannel: string;
    TacticalChannel: string;
    checklists: import("../helpers").MongooseInterface<{
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        built_in: {
            type: BooleanConstructor;
            default: boolean;
        };
        isMandatory: {
            type: BooleanConstructor;
            default: boolean;
        };
        items: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    active: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    checked: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    isMandatory: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    modified_date: {
                        type: StringConstructor;
                        default: string;
                    };
                    name: {
                        type: StringConstructor;
                        default: string;
                    };
                    position: {
                        type: NumberConstructor;
                        default: number;
                    };
                    uuid: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        modified_date: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        position: {
            type: NumberConstructor;
            default: number;
        };
        uuid: {
            type: StringConstructor;
            default: string;
        };
    }>[];
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
                        type: BooleanConstructor;
                        default: boolean;
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
                        type: NumberConstructor;
                        default: number;
                    };
                    api_unit_dispatch_number: {
                        type: StringConstructor;
                        default: string;
                    };
                    checked: {
                        type: BooleanConstructor;
                        default: boolean;
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
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    is_part_of_group: {
                        type: BooleanConstructor;
                        default: boolean;
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
                    Personnel: {
                        type: (import("mongoose").Schema<any> & {
                            _interface: import("../helpers").MongooseInterface<{
                                PersonnelID: {
                                    type: StringConstructor;
                                    required: boolean;
                                };
                                PersonnelName: {
                                    type: StringConstructor;
                                    required: boolean;
                                };
                                PersonnelRank: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                PersonnelWorkCode: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                PersonnelNote: {
                                    type: StringConstructor;
                                    default: string;
                                };
                            }>;
                            _methods: unknown;
                        })[];
                        default: never[];
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
    hazards: import("../helpers").MongooseInterface<{
        location_on_scene: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        radius: {
            type: NumberConstructor;
            default: number;
        };
        time: {
            type: NumberConstructor;
            default: number;
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
        user: {
            type: StringConstructor;
            default: string;
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
        user: {
            type: StringConstructor;
            default: string;
        };
    }>[];
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
    units: import("../helpers").MongooseInterface<{
        active: {
            type: BooleanConstructor;
            default: boolean;
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
            type: NumberConstructor;
            default: number;
        };
        api_unit_dispatch_number: {
            type: StringConstructor;
            default: string;
        };
        checked: {
            type: BooleanConstructor;
            default: boolean;
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
            type: BooleanConstructor;
            default: boolean;
        };
        is_part_of_group: {
            type: BooleanConstructor;
            default: boolean;
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
        Personnel: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    PersonnelID: {
                        type: StringConstructor;
                        required: boolean;
                    };
                    PersonnelName: {
                        type: StringConstructor;
                        required: boolean;
                    };
                    PersonnelRank: {
                        type: StringConstructor;
                        default: string;
                    };
                    PersonnelWorkCode: {
                        type: StringConstructor;
                        default: string;
                    };
                    PersonnelNote: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
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
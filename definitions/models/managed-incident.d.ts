import * as uuid from "uuid";
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
import { Document, Model } from "mongoose";
export declare function ManagedIncidentModule(mongoose: MongooseModule): Promise<Model<Document<any, {}>, {}> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
    _id: {
        type: import("mongoose").Types.ObjectIdConstructor;
        auto: true;
    };
    departmentId: {
        type: StringConstructor;
        default: string;
        required: true;
        index: true;
    };
    userId: {
        type: StringConstructor;
        required: true;
    };
    uuid: {
        type: StringConstructor;
        default: (<T extends ArrayLike<number>>(options: uuid.V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: uuid.V4Options | undefined) => string);
    };
    start_unix_time: {
        type: NumberConstructor;
        default: number;
    };
    end_unix_time: NumberConstructor;
    par_unix_time: NumberConstructor;
    watch_unix_start_time: NumberConstructor;
    watch_unix_pause_time: NumberConstructor;
    modified_unix_date: {
        type: NumberConstructor;
        default: number;
    };
    channel_owner: {
        type: StringConstructor;
        default: string;
    };
    channel: {
        type: StringConstructor;
        default: string;
    };
    location: StringConstructor;
    last_view: StringConstructor;
    preference_location: StringConstructor;
    address: StringConstructor;
    name: StringConstructor;
    cross_streets: StringConstructor;
    api_incident_number: StringConstructor;
    CommonPlaceName: StringConstructor;
    TacticalChannel: StringConstructor;
    TacticalAltChannel: StringConstructor;
    active: BooleanConstructor;
    slave_map_changed: BooleanConstructor;
    managed: BooleanConstructor;
    is_closed: BooleanConstructor;
    source: StringConstructor;
    CallerNumber: StringConstructor;
    CommandChannel: StringConstructor;
    extended: {
        type: BooleanConstructor;
        default: boolean;
    };
    notes: {
        type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
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
        }>, unknown>)[];
    };
    history: {
        type: (import("mongoose").Schema<Document<any, {}>, Model<any, any>, undefined> & import("../helpers").PrivateSchemaInfo<import("../helpers").MongooseInterface<{
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
        }>, unknown>)[];
    };
}>, unknown>>;
export interface ManagedIncident extends Document, ItemTypeFromTypeSchemaFunction<typeof ManagedIncidentModule> {
}
export interface ManagedIncidentModel extends Model<ManagedIncident> {
}
declare const _default: ReplaceModelReturnType<typeof ManagedIncidentModule, ManagedIncidentModel>;
export default _default;

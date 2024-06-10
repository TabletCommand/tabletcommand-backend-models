/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model, Types } from "mongoose";
import { MongooseModule } from "../helpers";
interface SimPriorCommentType {
    Comment?: string;
    CommentSource?: string;
    CommentDateTime?: string;
}
interface SimPriorIncidentType {
    IncidentNumber: string;
    IncidentDateTime: string;
    Problem: string;
    Address: string;
    Suite: string;
    Comment: SimPriorCommentType[];
}
interface SimRadioChannelType {
    name: string;
    channel: string;
}
interface SimCommentType {
    comment: string;
    source: string;
}
interface SimUnitType {
    alarmLevelAtDispatch: string;
    units: string[];
}
interface SequenceType {
    _id: Types.ObjectId;
    title: string;
    alarm: string;
    sequenceId: number;
    unitsConfig: SimUnitType;
    comments: SimCommentType[];
}
export interface CADSimulation {
    uuid: string;
    departmentId: string;
    modifiedDate: number;
    modified: Date;
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
    radioChannels: SimRadioChannelType[];
    closeDelay: number;
    priorIncidents: SimPriorIncidentType[];
    randomPriorIncidents: boolean;
    randomStaffing: boolean;
    sequences: SequenceType[];
    sortId: number;
    sendStatus: boolean;
}
export default function CADSimulationModule(mongoose: MongooseModule): Promise<Model<CADSimulation, {}, {}, {}, import("mongoose").Document<unknown, {}, CADSimulation> & CADSimulation & {
    _id: Types.ObjectId;
}, any>>;
export interface CADSimulationModel extends Model<CADSimulation> {
}
export {};
//# sourceMappingURL=cad-simulation.d.ts.map
/// <reference types="mongoose" />
import { MongooseModule } from "./types";
export declare function CADStatusModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    uuid: string;
    departmentId: string;
    modifiedDate: number;
    statusId: number;
    code: string;
    status: string;
    name: string;
    normalized: string;
    selfAssignable: boolean;
    roaming: boolean;
    options: {
        name: string;
        position: number;
        visible: boolean;
        cadKey: string;
        cadValues: {
            name: string;
            type: string;
            visible: boolean;
            value: string;
            favorite: boolean;
            position: number;
        }[];
    }[];
    color: {
        background: string;
        text: string;
    };
}, {}>>;
export default CADStatusModule;
export declare type CADStatus = ReturnType<typeof CADStatusModule>;
import { Types } from "mongoose";
import { GeoJSONPointType } from "./geojson-point";
import { ColorSchemaType } from "./color";
export interface LocationType {
    _id: Types.ObjectId;
    id?: string;
    departmentId: string;
    userId: string;
    uuid: string;
    username: string;
    device_type: string;
    active: boolean;
    deleteAfterDate: Date;
    modified: Date;
    movedAt: Date;
    propsChangedAt: Date;
    version: number;
    session: string;
    altitude: number;
    heading: number;
    speed: number;
    esriId: number;
    locationGeoJSON: GeoJSONPointType;
    opAreaCode: string;
    opAreaName: string;
    agencyCode: string;
    agencyName: string;
    shared: boolean;
    state: string;
    sendToCAD: boolean;
    color: ColorSchemaType;
    colorChangedAt: Date;
    source: string;
    kindType: string;
    typeDetails: object;
}
//# sourceMappingURL=location.d.ts.map
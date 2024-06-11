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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { MongooseModule } from "../../helpers";
interface MapLayerType {
    layerId: string;
    itemId: string;
    title: string;
    layerType: string;
    url: string;
    visibility: boolean;
    opacity: number;
    access: string;
    owner: string;
}
interface BaseMapType {
    baseMapLayers: MapLayerType[];
    title: string;
}
interface SimpleMapSchemaType {
    itemId: string;
    title: string;
    url: string;
    access: string;
    owner: string;
    type: string;
    modified: number;
    modifiedAt: Date;
}
interface OfflineMapType extends SimpleMapSchemaType {
    status: string;
}
export interface EsriMapType extends SimpleMapSchemaType {
    mapLayers: MapLayerType[];
    baseMap: BaseMapType;
    offline: OfflineMapType[];
    tags: string[];
    development: boolean;
    size: number;
}
export default function EsriMapSchema(mongoose: MongooseModule): import("mongoose").Schema<EsriMapType, import("mongoose").Model<EsriMapType, any, any, any, import("mongoose").Document<unknown, any, EsriMapType> & EsriMapType & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, EsriMapType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<EsriMapType>> & import("mongoose").FlatRecord<EsriMapType> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export {};
//# sourceMappingURL=esri-map.d.ts.map
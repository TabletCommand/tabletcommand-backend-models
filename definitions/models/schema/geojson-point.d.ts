/// <reference types="mongoose" />
import { MongooseModule } from "../../helpers";
export default function GeoJSONPointSchema(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../../helpers").MongooseInterface<{
        type: {
            type: StringConstructor;
            required: boolean;
            enum: string[];
            default: string;
        };
        coordinates: {
            type: NumberConstructor[];
            required: boolean;
            default: never[];
        };
    }>;
    _methods: unknown;
};
//# sourceMappingURL=geojson-point.d.ts.map
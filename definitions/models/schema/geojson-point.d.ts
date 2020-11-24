/// <reference types="mongoose" />
import { MongooseModule } from "../../helpers";
export default function GeoJSONPointModule(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../../helpers").MongooseInterface<{
        type: {
            type: StringConstructor;
            default: string;
        };
        coordinates: {
            type: NumberConstructor[];
            default: never[];
        };
    }>;
    _methods: unknown;
};
//# sourceMappingURL=geojson-point.d.ts.map
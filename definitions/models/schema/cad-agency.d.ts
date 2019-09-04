/// <reference types="mongoose" />
import { MongooseModule } from "../../helpers";
export declare function CADAgency(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: {
        code: string;
        name: string;
        domain: string;
        personnelApiKey: string;
    };
    _methods: unknown;
};
//# sourceMappingURL=cad-agency.d.ts.map
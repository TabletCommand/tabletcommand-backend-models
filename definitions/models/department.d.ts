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
import { Model } from "mongoose";
import { MongooseModule } from "../helpers";
import { ColorSchemaType } from "../types/color";
import { DepartmentType, ManagedIncidentModeItem, ManagedIncidentPriority, ManagedIncidentPriorityItem } from "../types/department";
export interface Department extends DepartmentType, Record<string, unknown> {
}
export declare const Mark43StatusConfigDefault: {
    TimeDispatched: string[];
    TimeEnroute: string[];
    TimeStaged: string[];
    TimeCleared: string[];
    TimeAtHospital: string[];
    TimeTransporting: string[];
    TimeArrived: string[];
};
export declare const IntterraFieldsDefault: {
    key: string;
    value: string;
    required: boolean;
    enabled: boolean;
    transformationRequired: boolean;
}[];
export declare const FireMapperConfigurationDefault: {
    enabled: boolean;
    layerRefreshInterval: number;
    proLicenseCount: number;
    host: string;
    layer: {
        name: string;
        pathname: string;
    }[];
    staticLayer: never[];
};
export declare const LicensingDefault: {
    tcPro2Way: number;
    tcPro1Way: number;
    tcMobile: number;
    tcWeb: number;
    fireMapperPro: number;
    sendToCAD: number;
    tcStreams: number;
};
export declare const SafetyPriorityKeywordDefault: {
    keywords: never[];
    priority: number;
    hexColor: string;
}[];
export declare const FirstArrivingConfigDefault: {
    token: string;
    apiUrl: string;
};
export declare const IntterraConfigDefault: {
    enabled: boolean;
    connections: never[];
    incidentWebhookEnabled: boolean;
};
export declare const ForwardingConfigDefault: {
    enabled: boolean;
    connections: never[];
    incidentWebhookEnabled: boolean;
};
export declare const VehicleStatusWebhookConfigDefault: {
    enabled: boolean;
    connections: never[];
};
export declare const IncidentReplayDefault: {
    enabled: boolean;
    replays: never[];
};
export declare const SomewearDefault: {
    enabled: boolean;
};
export declare const GSTConfigDefault: {
    enabled: boolean;
    code: string;
};
export declare const SkymiraConfigDefault: {
    enabled: boolean;
    token: string;
    locationsUrl: string;
};
export declare const Mark43ConfigDefault: {
    baseUrl: string;
    authToken: string;
    apiToken: string;
    userId: number;
    enabled: boolean;
};
export declare const SimpleSenseConfigDefault: {
    token: string;
};
export declare const WebDisclaimerDefault: {
    message: string;
    enabled: boolean;
};
export declare const RestrictedCommentsDefault: {
    enabled: boolean;
    callTypesAllowed: never[];
    statusesAllowed: never[];
    restrictedFields: string[];
    restrictedMessage: string;
};
export declare const StatusMappingConfigDefault: {
    TimeDispatched: {
        status: string;
        statusCode: string;
    };
    TimeEnroute: {
        status: string;
        statusCode: string;
    };
    TimeStaged: {
        status: string;
        statusCode: string;
    };
    TimeArrived: {
        status: string;
        statusCode: string;
    };
    TimeCleared: {
        status: string;
        statusCode: string;
    };
    TimeAtHospital: {
        status: string;
        statusCode: string;
    };
    TimePatient: {
        status: string;
        statusCode: string;
    };
    TimeTransporting: {
        status: string;
        statusCode: string;
    };
    TimeTransportComplete: {
        status: string;
        statusCode: string;
    };
};
export declare const ForwardFieldsDefault: {
    key: string;
    value: string;
    required: boolean;
    enabled: boolean;
    transformationRequired: boolean;
}[];
export declare const VehicleStatusWebhookFieldsDefault: {
    key: string;
    value: string;
    required: boolean;
    enabled: boolean;
    transformationRequired: boolean;
}[];
export declare const SamsaraConfigurationDefault: {
    enabled: boolean;
    token: string;
};
export declare const OrientationMarkerColorDefault: ColorSchemaType;
export declare const ManagedIncidentModeDefault: ManagedIncidentModeItem[];
export declare const ManagedIncidentPriorityItemsDefault: ManagedIncidentPriorityItem[];
export declare const ManagedIncidentPriorityDefault: ManagedIncidentPriority;
export default function DepartmentModule(mongoose: MongooseModule): Promise<Model<Department, {}, {}, {}, import("mongoose").Document<unknown, {}, Department> & Department & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>>;
export interface DepartmentModel extends Model<Department> {
}
//# sourceMappingURL=department.d.ts.map
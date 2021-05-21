"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArcGISGroupModule = void 0;
// import * as uuid from "uuid";
const helpers_1 = require("../helpers");
async function ArcGISGroupModule(mongoose) {
    const { Schema } = mongoose;
    const ArcGISGroupUser = helpers_1.createSchema(Schema, {
        username: {
            type: String,
            default: "",
        },
        fullName: {
            type: String,
            default: "",
        },
        memberType: {
            type: String,
            default: "",
        },
        orgId: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
    });
    const ArcGISDepartmentUser = helpers_1.createSchema(Schema, {
        // ArcGIS username
        username: {
            type: String,
            default: "",
        },
        // TC user account email
        email: {
            type: String,
            default: "",
        },
        // TC user id
        userId: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
    });
    const ArcGISDepartment = helpers_1.createSchema(Schema, {
        department: {
            type: String,
            default: "",
        },
        departmentId: {
            type: String,
            default: "",
        },
        authUsername: {
            type: String,
            default: "",
        },
        authError: {
            type: String,
            default: "",
        },
        tokenUsername: {
            type: String,
            default: null,
        },
        tokenError: {
            type: String,
            default: null,
        },
        users: {
            type: [ArcGISDepartmentUser],
            default: [],
        },
    }, {
        _id: false,
    });
    const modelSchema = helpers_1.createSchema(Schema, {
        // Unique, to be able to use replaceInto
        groupId: {
            type: String,
            unique: true,
        },
        title: {
            type: String,
            default: "",
        },
        protected: {
            type: Boolean,
            default: false,
        },
        owner: {
            type: String,
            default: "",
        },
        access: {
            type: String,
            default: "",
        },
        users: {
            type: [ArcGISGroupUser],
            default: [],
        },
        outsiders: {
            type: [ArcGISGroupUser],
            default: [],
        },
        externalOrgIds: {
            type: [String],
            default: [],
        },
        // departments that are linked to this group via group.user = dept.auth
        resolvedDepartments: {
            type: [ArcGISDepartment],
            default: [],
        },
        // departments that are linked via arcGISGroupId (linked by a super admin)
        linkedDepartments: {
            type: [ArcGISDepartment],
            default: [],
        },
        modified: {
            type: Date,
            default: helpers_1.currentDate,
        },
    }, {
        collection: "massive_arcgis_group",
    });
    modelSchema.set("autoIndex", false);
    return helpers_1.createModel(mongoose, "ArcGISGroup", modelSchema);
}
exports.ArcGISGroupModule = ArcGISGroupModule;
exports.default = ArcGISGroupModule;
//# sourceMappingURL=arcgis-group.js.map
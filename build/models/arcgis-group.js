"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArcGISGroupModule = void 0;
// import * as uuid from "uuid";
const helpers_1 = require("../helpers");
async function ArcGISGroupModule(mongoose) {
    const { Schema } = mongoose;
    const ArcGISGroupUser = (0, helpers_1.createSchema)(Schema, {
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
        id: false,
    });
    const ArcGISUserInvitation = (0, helpers_1.createSchema)(Schema, {
        username: {
            type: String,
            default: "",
        },
        atDate: {
            type: Date,
            default: helpers_1.currentDate,
        },
        invitedBy: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
    });
    const ArcGISDepartmentUser = (0, helpers_1.createSchema)(Schema, {
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
        id: false,
    });
    const ArcGISDepartment = (0, helpers_1.createSchema)(Schema, {
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
        users: {
            type: [ArcGISDepartmentUser],
            default: [],
        },
    }, {
        _id: false,
        id: false,
    });
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
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
        membershipAccess: {
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
        removableUsers: {
            type: [ArcGISGroupUser],
            default: [],
        },
        externalOrgIds: {
            type: [String],
            default: [],
        },
        invited: {
            type: [ArcGISUserInvitation],
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
        // Possible values: cron, user
        createdBy: {
            type: String,
            default: "",
        },
        // last time when cron updated groups
        // if date is in the past, we should refresh this
        // at run success, update this date to a date in the future
        runAt: {
            type: Date,
            default: "",
        },
    }, {
        collection: "massive_arcgis_group",
    });
    modelSchema.set("autoIndex", false);
    return (0, helpers_1.createModel)(mongoose, "ArcGISGroup", modelSchema);
}
exports.ArcGISGroupModule = ArcGISGroupModule;
exports.default = ArcGISGroupModule;
//# sourceMappingURL=arcgis-group.js.map
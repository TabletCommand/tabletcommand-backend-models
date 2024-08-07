"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
async function ArcGISGroupModule(mongoose) {
    const { Schema } = mongoose;
    const ArcGISGroupUser = new Schema({
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
    const ArcGISUserInvitation = new Schema({
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
    const ArcGISDepartmentUser = new Schema({
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
    const ArcGISDepartment = new Schema({
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
    const modelSchema = new Schema({
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
        },
    }, {
        autoIndex: false,
    });
    return mongoose.model("ArcGISGroup", modelSchema, "massive_arcgis_group", { overwriteModels: true });
}
exports.default = ArcGISGroupModule;
//# sourceMappingURL=arcgis-group.js.map
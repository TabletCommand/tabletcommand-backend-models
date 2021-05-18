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
        departmentIds: {
            type: [String],
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
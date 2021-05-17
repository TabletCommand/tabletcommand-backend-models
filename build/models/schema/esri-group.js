"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
function EsriGroupModule(mongoose) {
    const { Schema } = mongoose;
    const EsriGroupUser = helpers_1.createSchema(Schema, {
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
    const EsriGroup = helpers_1.createSchema(Schema, {
        groupId: {
            type: String,
            default: "",
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
            type: [EsriGroupUser],
            default: [],
        },
        outsiders: {
            type: [EsriGroupUser],
            default: [],
        },
        externalOrgIds: {
            type: [String],
            default: [],
        },
    }, {
        _id: false,
    });
    return EsriGroup;
}
exports.default = EsriGroupModule;
//# sourceMappingURL=esri-group.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateModule = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
async function TemplateModule(mongoose) {
    const { Schema, Types } = mongoose;
    const ChecklistOption = helpers_1.createSchema(Schema, {
        name: {
            type: String,
            default: "",
        },
        position: {
            type: Number,
            default: 0,
        },
        id: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
    });
    const GroupOption = helpers_1.createSchema(Schema, {
        name: {
            type: String,
            default: "",
        },
        position: {
            type: Number,
            default: 0,
        },
    }, {
        _id: false,
    });
    const modelSchema = helpers_1.createSchema(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        position: {
            type: Number,
            default: 1,
        },
        userId: String,
        uuid: {
            type: String,
            default: uuid.v4,
        },
        isMandatory: {
            type: Boolean,
            default: false,
        },
        modified_date: {
            type: String,
        },
        modified_unix_date: {
            type: Number,
            default: helpers_1.retrieveCurrentUnixTime,
        },
        departmentId: {
            type: String,
            required: true,
            index: true,
        },
        active: {
            type: Boolean,
            default: true,
        },
        name: {
            type: String,
            required: true
        },
        checklist: {
            type: [ChecklistOption],
            default: [],
        },
        group: {
            type: [GroupOption],
            default: []
        },
        agencyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Agency",
            default: null,
        },
    }, {
        collection: "massive_template",
    });
    modelSchema.set("autoIndex", false);
    return helpers_1.createModel(mongoose, "Template", modelSchema);
}
exports.TemplateModule = TemplateModule;
exports.default = TemplateModule;
//# sourceMappingURL=template.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChecklistItemModule = exports.ChecklistItemSchema = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
function ChecklistItemSchema(mongoose) {
    const { Schema, Types, } = mongoose;
    const modelSchema = (0, helpers_1.createSchema)(Schema, {
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
        checklist_uuid: {
            type: String
        },
        api_checklist_id: {
            type: String,
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
        description: {
            type: String,
            default: ""
        }
    }, {
        collection: "massive_checklist_item_sync",
    });
    modelSchema.set("autoIndex", false);
    return modelSchema;
}
exports.ChecklistItemSchema = ChecklistItemSchema;
async function ChecklistItemModule(mongoose) {
    const modelSchema = ChecklistItemSchema(mongoose);
    modelSchema.set("toJSON", {
        virtuals: true,
        versionKey: false,
        transform(doc, ret) {
            ret.id = ret._id;
        },
    });
    modelSchema.virtual("id").get(function () {
        // tslint:disable-next-line: no-unsafe-any
        return this._id.toString();
    });
    return (0, helpers_1.createModel)(mongoose, "ChecklistItem", modelSchema);
}
exports.ChecklistItemModule = ChecklistItemModule;
exports.default = ChecklistItemModule;
//# sourceMappingURL=checklist-item.js.map
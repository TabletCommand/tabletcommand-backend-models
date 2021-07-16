"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChecklistModule = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
const checklist_item_1 = require("./checklist-item");
async function ChecklistModule(mongoose) {
    const { Schema, Types } = mongoose;
    const ChecklistItem = checklist_item_1.ChecklistItemSchema(mongoose);
    const modelSchema = helpers_1.createSchema(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        position: {
            type: Number,
            default: 1,
        },
        userId: {
            type: String,
            default: "",
        },
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
        modified: {
            type: Date,
            default: helpers_1.currentDate,
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
        agencyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Agency",
            default: null,
        },
        items: {
            type: [ChecklistItem],
            default: [],
        }
    }, {
        collection: "massive_checklist_sync",
    });
    modelSchema.set("autoIndex", false);
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
    return helpers_1.createModel(mongoose, "Checklist", modelSchema);
}
exports.ChecklistModule = ChecklistModule;
exports.default = ChecklistModule;
//# sourceMappingURL=checklist.js.map
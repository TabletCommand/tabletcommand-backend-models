"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChecklistItemModule = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
async function ChecklistItemModule(mongoose) {
    const { Schema, Types } = mongoose;
    const modelSchema = helpers_1.createSchema(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        position: {
            type: Number,
            default: 1,
        },
        checked: {
            type: Number,
        },
        local_id: {
            type: Number,
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
        agencyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Agency",
            default: null,
        },
        description: {
            type: String,
            default: ""
        }
    }, {
        collection: "massive_checklist_item_sync",
    });
    modelSchema.set("autoIndex", false);
    modelSchema.set("toJSON", {
        virtuals: true,
        versionKey: false,
        transform(doc, ret) {
            strictSchema(doc.schema, ret);
            ret.id = ret._id;
        },
    });
    modelSchema.virtual("id").get(function () {
        // tslint:disable-next-line: no-unsafe-any
        return this._id.toString();
    });
    function strictSchema(schema, ret) {
        Object.keys(ret).forEach(function (element) {
            // Don't complain about the virtuals
            if (element === "id") {
                return;
            }
            const pathSchema = schema;
            if (pathSchema.paths[element] === undefined) {
                // console.log("backend-models.cad-incident: undefined schema.paths[element]:", element, pathSchema.paths[element]);
                delete ret[element];
            }
        });
    }
    return helpers_1.createModel(mongoose, "ChecklistItem", modelSchema);
}
exports.ChecklistItemModule = ChecklistItemModule;
exports.default = ChecklistItemModule;
//# sourceMappingURL=checklist-item.js.map
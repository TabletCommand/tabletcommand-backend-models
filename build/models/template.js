"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateSchema = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
function TemplateSchema(mongoose) {
    const { Schema } = mongoose;
    const ChecklistOption = new Schema({
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
        id: false,
    });
    const GroupOption = new Schema({
        name: {
            type: String,
            default: "",
        },
        position: {
            type: Number,
            default: 0,
        },
        uuid: {
            type: String,
            default: uuid.v4,
        },
    }, {
        _id: false,
        id: false,
    });
    const modelSchema = new Schema({
        _id: {
            type: Schema.Types.ObjectId,
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
        checklist: {
            type: [ChecklistOption],
            default: [],
        },
        group: {
            type: [GroupOption],
            default: []
        },
        agencyId: {
            type: Schema.Types.ObjectId,
            ref: "Agency",
            default: null,
        },
    }, {});
    modelSchema.set("autoIndex", false);
    modelSchema.virtual("id").get(function () {
        return this._id.toHexString();
    });
    modelSchema.set("toJSON", {
        virtuals: true,
        versionKey: false,
        transform(doc, ret) {
            strictSchema(doc.schema, ret);
        },
    });
    function strictSchema(schema, ret) {
        Object.keys(ret).forEach(function (element) {
            // Don't complain about the virtuals
            if (element === "id") {
                return;
            }
            const pathSchema = schema;
            if (pathSchema.paths[element] === undefined) {
                // console.log("backend-models.template: undefined schema.paths[element]:", element, pathSchema.paths[element]);
                delete ret[element];
            }
        });
    }
    // modelSchema.plugin(mongooseLeanVirtuals);
    return modelSchema;
}
exports.TemplateSchema = TemplateSchema;
async function TemplateModule(mongoose) {
    const modelSchema = TemplateSchema(mongoose);
    return mongoose.model("Template", modelSchema, "massive_template", { overwriteModels: true });
}
exports.default = TemplateModule;
//# sourceMappingURL=template.js.map
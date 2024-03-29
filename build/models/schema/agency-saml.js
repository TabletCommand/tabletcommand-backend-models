"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
function AgencySAMLSchema(mongoose) {
    const { Schema } = mongoose;
    const AgencyCronConfig = (0, helpers_1.createSchema)(Schema, {
        selector: {
            type: String,
            required: true,
            unique: true,
        },
        idp: {
            type: String,
            default: "",
        },
        sp: {
            type: String,
            default: "",
        },
        env: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
        id: false,
        timestamps: true,
        autoIndex: false,
        toJSON: {
            virtuals: true,
            versionKey: false,
        }
    });
    return AgencyCronConfig;
}
exports.default = AgencySAMLSchema;
//# sourceMappingURL=agency-saml.js.map
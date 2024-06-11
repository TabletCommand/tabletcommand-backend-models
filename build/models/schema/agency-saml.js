"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AgencySAMLSchema(mongoose) {
    const { Schema } = mongoose;
    const AgencySAML = new Schema({
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
        name: {
            type: String,
            default: "",
        }
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
    return AgencySAML;
}
exports.default = AgencySAMLSchema;
//# sourceMappingURL=agency-saml.js.map
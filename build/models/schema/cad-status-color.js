"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
function RateLimitModule(mongoose) {
    "use strict";
    var { Schema } = mongoose;
    var CADStatusColor = helpers_1.createSchema(Schema, {
        background: {
            type: String,
            default: "#851414" // Red-like
        },
        text: {
            type: String,
            default: "#F8F8F8" // White-like
        }
    }, {
        _id: false
    });
    return CADStatusColor;
}
exports.RateLimitModule = RateLimitModule;
;
//# sourceMappingURL=cad-status-color.js.map
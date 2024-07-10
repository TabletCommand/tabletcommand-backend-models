"use strict";
// These should be converted to Typescript Enum after upgrading mongoose to 6.x or newer
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationKindType = exports.LocationSource = void 0;
var LocationSource;
(function (LocationSource) {
    LocationSource["CAD"] = "CAD";
    LocationSource["FleetComplete"] = "FleetComplete";
    LocationSource["GST"] = "GST";
    LocationSource["Samsara"] = "Samsara";
    LocationSource["Skymira"] = "Skymira";
    LocationSource["SKYTRAC"] = "SKYTRAC";
    LocationSource["Somewear"] = "Somewear";
    LocationSource["TCAndroid"] = "TC-Android";
    LocationSource["TCIOS"] = "TC-iOS";
    LocationSource["TCMobileAndroid"] = "TCMobile-Android";
    LocationSource["TCMobileIOS"] = "TCMobile-iOS";
    LocationSource["VehicleModem"] = "VehicleModem";
})(LocationSource = exports.LocationSource || (exports.LocationSource = {}));
var LocationKindType;
(function (LocationKindType) {
    LocationKindType["FixedWing"] = "fixed-wing";
    LocationKindType["Helicopter"] = "helicopter";
    LocationKindType["Marine"] = "marine";
    LocationKindType["Person"] = "person";
    LocationKindType["Vehicle"] = "vehicle";
})(LocationKindType = exports.LocationKindType || (exports.LocationKindType = {}));
//# sourceMappingURL=constants.js.map
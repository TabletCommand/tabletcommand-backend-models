"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountIndustry = exports.LocationVisibility = exports.DepartmentReportOdometer = exports.UserStealthStatus = exports.LocationKindType = exports.LocationSource = void 0;
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
var UserStealthStatus;
(function (UserStealthStatus) {
    UserStealthStatus["Prohibited"] = "prohibited";
    UserStealthStatus["Visible"] = "visible";
    UserStealthStatus["Hidden"] = "hidden"; // User can go stealth, hidden
})(UserStealthStatus = exports.UserStealthStatus || (exports.UserStealthStatus = {}));
var DepartmentReportOdometer;
(function (DepartmentReportOdometer) {
    DepartmentReportOdometer["Disabled"] = "disabled";
    DepartmentReportOdometer["Status"] = "status";
    DepartmentReportOdometer["Comment"] = "comment";
    DepartmentReportOdometer["StatusComment"] = "status-comment";
})(DepartmentReportOdometer = exports.DepartmentReportOdometer || (exports.DepartmentReportOdometer = {}));
// Combination of .active, .sendToCAD, and .shared flags
var LocationVisibility;
(function (LocationVisibility) {
    LocationVisibility["Hidden"] = "hidden";
    LocationVisibility["Visible"] = "visible";
    LocationVisibility["CAD"] = "cad";
    LocationVisibility["Shared"] = "shared";
})(LocationVisibility = exports.LocationVisibility || (exports.LocationVisibility = {}));
// valid combinations for the following endpoints: admin-location / status / sync
// .None   - not visible to anyone - when a user sets their stealth to Hidden, and locationToCAD is false
//         - it's represented by an empty array 
// .Hidden - visible only to admins (on portal), the old admin=false
// .Visible - when user/device has location on (iPad, truck, CAD, etc) 
//          - visible on sync/admin-location, for the users of the the same account
// .CAD - location would be sent to CAD (GET status-location)
//      - most of the records would also have .visible, 
//      - unless user is stealth, then would be the only item
// .Shared - together with .Visible, determines which items are visible outside the current account, 
//          - if .visible is not present, item won't be visible to anyone. can be removed independently
// - [] or [.Shared] - missing .visible or .hidden, not visible to anyone - stealth
// - [.Hidden] => user visible to admin only
// - [.Hidden, .Shared] => missing .visible, visible only to account admins
// - [(.Hidden), .CAD] => user is stealth, but location is sent to CAD via GET status-location
// - [.Hidden, .Visible] => visible to local admins only, remove .visible
// - [.Visible] => user visible to local accounts
// - [.Visible, .CAD] => user visible to local accounts, also sent to CAD when locationToCAD is on
// - [.Visible, .Shared] => user visible to local accounts, also shared to other accounts
// - [.Visible, .CAD, .Shared] => user visible to local accounts, sent to CAD when locationToCAD is on, shared to other accounts
// Sending data out:
// If .visible => active = true, 
// otherwise,.Hidden => active = .false, include in sync/web
// if both are missing, but .CAD, active = true, for the status endpoint
// if .visible, .hidden, .CAD are missing, don't include this point.
// On update:
// If .visible or .hidden or .CAD present, save the location, otherwise, drop the request
var AccountIndustry;
(function (AccountIndustry) {
    AccountIndustry["Fire"] = "fire";
    AccountIndustry["Law"] = "law";
    AccountIndustry["University"] = "university";
    AccountIndustry["Utility"] = "utility";
})(AccountIndustry = exports.AccountIndustry || (exports.AccountIndustry = {}));
//# sourceMappingURL=constants.js.map
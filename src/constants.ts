export enum LocationSource {
  CAD = "CAD",
  FleetComplete = "FleetComplete",
  GST = "GST",
  Samsara = "Samsara",
  Skymira = "Skymira",
  SKYTRAC = "SKYTRAC",
  Somewear = "Somewear",
  TCAndroid = "TC-Android",
  TCIOS = "TC-iOS",
  TCMobileAndroid = "TCMobile-Android",
  TCMobileIOS = "TCMobile-iOS",
  VehicleModem = "VehicleModem"
}

export enum LocationKindType {
  FixedWing = "fixed-wing",
  Helicopter = "helicopter",
  Marine = "marine",
  Person = "person",
  Vehicle = "vehicle"
}

export enum UserStealthStatus {
  Prohibited = "prohibited",  // User cannot go stealth
  Visible = "visible",        // User can go stealth, visible
  Hidden = "hidden"           // User can go stealth, hidden
}

export enum DepartmentReportOdometer {
  Disabled = "",                      // Not recording, not sending
  Status = "status",                  // Recording, send with status
  Comment = "comment",                // Recording, send as comment
  StatusComment = "status-comment",   // Recording, send with status and as comment
}

// Combination of .active, .sendToCAD, and .shared flags
export enum LocationVisibility {
  Hidden = "hidden",    // .active = false, .sendToCAD = false, .shared = false
  Visible = "visible",  // .active = true, .sendToCAD = ?, .shared = false
  CAD = "cad",          // .active = ?, .sendToCAD = true, .shared = ?
  Shared = "shared",    // .active = true, .sendToCAD = ?, .shared = true,
}

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
